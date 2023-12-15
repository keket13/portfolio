<script setup>
import { ref } from 'vue';

const isOpenMenu = ref(false);

// Social Links - Update this links to your link
const FacebookLink = 'https://www.facebook.com/keket13';
const LinkedinLink = 'https://www.instagram.com/keth.elden/';
const GithubLink = 'https://github.com/arielbatoon09';

const toggleMobileMenu = () => {
    return isOpenMenu.value = !isOpenMenu.value;
};

</script>

<template>
    <header class="bg-white border-b border-gray-200">
        <nav class="mx-auto max-w-screen-xl px-12 py-4">
            <div class="flex flex-row items-center justify-between">
                <router-link to="/" class="flex flex-col">
                    <h1 class="font-bold text-xl">Keth Elden Mondejar</h1>
                    <p class="font-light text-lg text-gray-600">BSIT Student</p>
                </router-link>

                <!-- Desktop Menu -->
                <div class="hidden lg:block">
                    <ul class="flex flex-row gap-8">
                        <li
                            :class="$route.name === 'home' ? 'text-cyan-700 font-medium text-lg' : 'text-gray-700 hover:text-cyan-700 font-normal text-lg'">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li
                            :class="$route.name === 'about' ? 'text-cyan-700 font-medium text-lg' : 'text-gray-700 hover:text-cyan-700 font-normal text-lg'">
                            <router-link to="/about">About</router-link>
                        </li>
                        <li
                            :class="$route.name === 'projects' ? 'text-cyan-700 font-medium text-lg' : 'text-gray-700 hover:text-cyan-700 font-normal text-lg'">
                            <router-link to="/projects">Projects</router-link>
                        </li>
                        <li
                            :class="$route.name === 'contact' ? 'text-cyan-700 font-medium text-lg' : 'text-gray-700 hover:text-cyan-700 font-normal text-lg'">
                            <router-link to="/contact">Contact</router-link>
                        </li>
                    </ul>
                </div>

                <!-- Desktop Social Icons -->
                <div class="hidden lg:block">
                    <ul class="flex flex-row items-center gap-3">
                        <a :href="FacebookLink" target="_blank" class="bg-gray-100 hover:bg-gray-200 p-2 rounded-full">
                            <svg class="w-[20px] h-[20px] text-gray-600" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a :href="LinkedinLink" target="_blank" class="bg-gray-100 hover:bg-gray-200 p-2 rounded-full">
                            <svg class="w-[20px] h-[20px] text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2476 2476" id="instagram">
                            <path 
                                d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"></path>
                        </svg>
                        </a>
                        <a :href="GithubLink" target="_blank" class="bg-gray-100 hover:bg-gray-200 p-2 rounded-full">
                            <svg class="w-[24px] h-[24px] text-gray-600" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </ul>
                </div>

                <!-- Burger Menu -->
                <div @click="toggleMobileMenu"
                    class="cursor-pointer block lg:hidden border border-gray-200 bg-gray-100 hover:bg-gray-200 p-2 rounded-full">
                    <svg class="w-[24px] h-[24px] text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M1 1h14M1 6h14M1 11h7" />
                    </svg>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div v-if="isOpenMenu" class="flex lg:hidden relative">

                <div class="bg-white flex flex-col absolute top-[18px] -left-[52px] w-screen gap-4 shadow-lg p-6 rounded">
                    <router-link to="/"
                        :class="$route.name === 'home' ? 'bg-gray-50 p-2 rounded text-cyan-700 font-medium text-lg' : 'hover:bg-gray-50 p-2 text-gray-700 hover:text-cyan-700 font-normal text-lg'">
                        Home
                    </router-link>
                    <router-link to="/about"
                        :class="$route.name === 'about' ? 'bg-gray-50 p-2 rounded text-cyan-700 font-medium text-lg' : 'hover:bg-gray-50 p-2 text-gray-700 hover:text-cyan-700 font-normal text-lg'">
                        About
                    </router-link>
                    <router-link to="/projects"
                        :class="$route.name === 'projects' ? 'bg-gray-50 p-2 rounded text-cyan-700 font-medium text-lg' : 'hover:bg-gray-50 p-2 text-gray-700 hover:text-cyan-700 font-normal text-lg'">
                        Projects
                    </router-link>
                    <router-link to="/contact"
                        :class="$route.name === 'contact' ? 'bg-gray-50 p-2 rounded text-cyan-700 font-medium text-lg' : 'hover:bg-gray-50 p-2 text-gray-700 hover:text-cyan-700 font-normal text-lg'">
                        Contact
                    </router-link>

                    <!-- Mobile Social Icons -->
                    <ul class="flex flex-row items-center gap-3 mt-2">
                        <a :href="FacebookLink" target="_blank" class="bg-gray-100 hover:bg-gray-300 p-2 rounded-full">
                            <svg class="w-[20px] h-[20px] text-gray-600" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a :href="LinkedinLink" target="_blank" class="bg-gray-100 hover:bg-gray-300 p-2 rounded-full">
                            <svg class="w-[20px] h-[20px] text-gray-600" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                <path fill-rule="evenodd"
                                    d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                                    clip-rule="evenodd" />
                                <path d="M3 5.012H0V15h3V5.012Z" />
                            </svg>
                        </a>
                        <a :href="GithubLink" target="_blank" class="bg-gray-100 hover:bg-gray-200 p-2 rounded-full">
                            <svg class="w-[24px] h-[24px] text-gray-600" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>