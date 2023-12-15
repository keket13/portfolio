<script setup>
import MainLayout from '../components/MainLayout.vue';

// Page Title of Views
const pageTitle = 'Projects'
</script>

<template>
  <MainLayout :pageTitle="pageTitle">
    <section>
      <!-- image - start -->
      <router-link to="/todo"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                    loading="lazy" alt="Photo by Magicle"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Todo App</span>
        </router-link>
        <!-- image - end -->

      <router-link to="/contact"
        class="inline-block rounded-lg bg-cyan-700 px-8 py-3 text-center text-sm font-semibold text-white outline-none 
        ring-indigo-300 transition duration-100 hover:bg-cyan-600 focus-visible:ring active:bg-cyan-700 md:text-base mx-5">
        Unique App
      </router-link>

    </section>
  </MainLayout>
</template>