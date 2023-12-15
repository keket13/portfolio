<script setup>
import MainLayout from '../components/MainLayout.vue';

// Page Title of Views
const pageTitle = 'About'
</script>

<template>
  <MainLayout :pageTitle="pageTitle">
    <section>
      <div class="row justify-content-center align-items-center">
        <h1 class="mb-10 mt-5 text-2xl font-bold">Hey there! 👋 I'm Keth Elden Mondejar, a BSIT student from Cordova Public College. Here's a glimpse into who I am:</h1>

        <h1 class="font-bold text-2md">🌟 About Myself:</h1>
        <h2 class="mb-10">I'm passionate about [Your Main Interest or Passion]. Whether it's [Specific Activity/Hobby] or [Another Interest], I find joy in [Describe What You Love About It]. Outside of [Profession/Work], you'll often find me [Something You Enjoy Doing].</h2>

        <h1>🚀 Professional Background:</h1>
        <h2 class="mb-10">With a background in [Your Field], I've had the opportunity to [Highlight Key Achievements or Experiences]. My journey in [Your Field] has taught me the importance of [Your Work Values or Approach].</h2>

        <h1>📚 Lifelong Learner:</h1>
        <h2 class="mb-10">I believe in the power of continuous learning. Currently, I'm diving into [Current Learning Focus or Interest]. There's always something new to discover, and I love challenging myself to grow and adapt.</h2>

        <h1>✨ Philosophy:</h1>
        <h2 class="mb-10">I live by the motto [Your Favorite Quote or Life Philosophy]. This principle guides me in both my personal and professional pursuits. I value [Core Values] and strive to [Your Aspirations or Goals].</h2>

        <h2 class="mb-10">Looking forward to connecting with like-minded individuals and exploring new opportunities!</h2>
        
      </div>  
        <div class="col-md-4 text-center">
            <img :src="profileImage" alt="Profile Image" class="img-fluid rounded-circle mb-3" style="max-width: 200px;">
        </div>
        
    </section>
  </MainLayout>
</template>