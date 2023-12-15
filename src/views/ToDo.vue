<template>
    <!-- Todo App -->
    <div class="main">
        <div class="container">
            <div class="title">
                <h1 class="text-cyan-700 text-5xl mb-14">Todo App</h1>
            </div>
            <div class="actions">
                <form @submit.prevent="addTask">
                    <input type="text" placeholder="Add Task" v-model="task" required />
                    <button class="mx-3" type="submit">Add</button>
                    <input type="text" placeholder="Search task" v-model="searchQuery" />
                </form>
            </div>
            <div class="tasks">
                <div class="task-items" v-for="todo in filteredTodos" :key="todo.id">
                    <p :class="{ 'line-through': todo.done }" class="mx-4">{{ todo.details }}</p>
                    <button class="done-btn mx-4" @click="markAsDone(todo.id)">Done</button>
                    <button class="remove-btn" @click="removeTask(todo.id)">Remove</button>
                </div>
                <button class="clear-btn" @click="clearAllTasks">Clear ALL tasks</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import database from '../firebase';
import { ref, computed, onMounted } from 'vue';
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore';

const db = database;
const task = ref('');
const searchQuery = ref('');
const todos = ref([]);

// Function to fetch tasks from Firestore
const fetchTasks = async () => {
try {
    const querySnapshot = await getDocs(collection(db, 'tasks'));
    todos.value = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
} catch (error) {
    console.error('Error fetching tasks:', error);
}
};

// Fetch tasks on component mount
onMounted(fetchTasks);

const addTask = async () => {
try {
    if (task.value.trim() !== '') {
        const newTask = { details: task.value, done: false };
        const docRef = await addDoc(collection(db, 'tasks'), newTask);
        todos.value.push({ ...newTask, id: docRef.id });
        task.value = '';
    }
} catch (error) {
    console.error('Error adding task:', error);
}
};

const removeTask = async (taskId) => {
try {
    await deleteDoc(doc(db, 'tasks', taskId));
    todos.value = todos.value.filter((todo) => todo.id !== taskId);
} catch (error) {
    console.error('Error removing task:', error);
}
};

const markAsDone = async (taskId) => {
try {
    const todo = todos.value.find((t) => t.id === taskId);
    if (todo) {
        await updateDoc(doc(db, 'tasks', taskId), { done: !todo.done });
        todo.done = !todo.done;
    }
} catch (error) {
    console.error('Error updating task:', error);
}
};

const clearAllTasks = async () => {
try {
    const querySnapshot = await getDocs(collection(db, 'tasks'));
    querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
    });
    todos.value = [];
} catch (error) {
    console.error('Error clearing all tasks:', error);
}
};

const filteredTodos = computed(() => {
return todos.value.filter((todo) =>
    todo.details.toLowerCase().includes(searchQuery.value.toLowerCase())
);
});
</script>

<style scoped>
.main {
background-color: #f0f0f0;
/* Set the background color for the main div */
display: flex;
align-items: center;
/* Center the content vertically using flexbox */
justify-content: center;
/* Center the content horizontally using flexbox */
height: 100vh;
/* Set the height of the main div to 100% of the viewport height */
}

.container {
text-align: center;
/* Center align the content within the container */
}

.title {
margin-bottom: 20px;
/* Add some space below the title */
}

.actions {
margin-bottom: 20px;
/* Add some space below the actions */
}

input[type="text"] {
padding: 8px;
margin-right: 8px;
border: 1px solid #ccc;
border-radius: 4px;
}

button {
padding: 8px 16px;
background-color: #1800f0;
/* Green background color for buttons */
color: #fff;
/* White text color for buttons */
border: none;
border-radius: 4px;
cursor: pointer;
}

button.done-btn {
background-color: #00ffff;
/* Blue background color for "Done" button */
}

button.remove-btn {
background-color: #f44336;
/* Red background color for "Remove" button */
}

button.clear-btn {
background-color: blue;
/* Orange background color for "Clear All" button */
}

.tasks {
text-align: center;
/* Center align the content within the tasks div */
}

.task-items {
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 10px;
/* Add some space between task items */
}

.line-through {
text-decoration: line-through;
}</style>