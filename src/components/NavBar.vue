<!-- eslint-disable vue/no-parsing-error -->
<template>
    <header class=" sticky top-5 rounded-full shadow-xl py-2 px-4 border-transparent transition bg-slate-300 z-10 bg-opacity-90 flex flex-col lg:flex-row justify-between items-center my-[25px]">
        <!-- Astroship网站Logo栏 -->
        <div class="flex w-full lg:w-auto items-center justify-between">
            <RouterLink to="/" class=" text-lg">
                <span class=" text-slate-800 font-bold">Astro</span>
                <span class=" text-slate-500">ship</span>
            </RouterLink>
            <!-- 移动端目录 -->
            <div class=" block lg:hidden">
                <button @click="toggleMobileMenu">
                    <svg v-if="!isMenuOpen" fill="currentColor" class="w-4 h-4 text-gray-800" width="24" height="24"
                        viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                        <title>Toggle Menu</title>
                        <path fill-rule="evenodd"
                            d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z">
                        </path>
                    </svg>
                    <svg v-else fill="currentColor" class="w-4 h-4 text-gray-800" width="24" height="24"
                        viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                        <title>Close Menu</title>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
        <!-- 导航栏 -->
        <nav class="w-full lg:w-auto lg:flex mt-[10px] lg:mt-0 hidden " ref="menuRef">
            <ul class="flex flex-col lg:flex-row lg:gap-4">
                <li>
                    <menu>
                        <button @click="toggleMenu"
                            class="flex items-center gap-1 w-full lg:w-auto lg:px-[15px] py-[10px] text-gray-600 hover:text-gray-900">
                            <span>
                                Features
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                                stroke="currentColor" class="w-3 h-3 mt-0.5 group-open:rotate-180">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5">
                                </path>
                            </svg>
                        </button>
                        <div v-if="showMenuPC" class=" transition-all duration-300">
                            <div class=" lg:absolute w-full lg:w-60 z-10">
                                <div class="px-[15px] lg:py-[10px] lg:bg-white lg:rounded-md lg:shadow lg:border flex flex-col ">
                                    <RouterLink to="/" class="py-[5px] text-gray-600 hover:text-gray-900">Action</RouterLink>
                                    <a href="#" class="py-[5px] text-gray-600 hover:text-gray-900">Another action</a>
                                    <a href="#" class="py-[5px] text-gray-600 hover:text-gray-900">Dropdown Submenu</a>
                                    <a href="#" class="py-[5px] text-gray-600 hover:text-gray-900">404 Page</a>
                                </div>
                            </div>
                        </div>
                    </menu>
                </li>
                <li>
                    <RouterLink to='/pricing' class="flex lg:px-[15px] py-[10px] items-center text-gray-600 hover:text-gray-900">
                        <span>
                            Pricing
                        </span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to='/about' class="flex lg:px-[15px] py-[10px] items-center text-gray-600 hover:text-gray-900">
                        <span>
                            About
                        </span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to='/blog' class="flex lg:px-[15px] py-[10px] items-center text-gray-600 hover:text-gray-900">
                        <span>
                            Blog
                        </span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to='/contact' class="flex lg:px-[15px] py-[10px] items-center text-gray-600 hover:text-gray-900">
                        <span>
                            Contact
                        </span>
                    </RouterLink>
                </li>
                <li>
                    <a to='/' class="flex lg:px-[15px] py-[10px] items-center text-gray-600 hover:text-gray-900">
                        <span>
                            Pro Version
                        </span>
                        <span
                            class=" ml-[5px] px-[10px] py-[2.5px] text-[10px] animate-pulse uppercase text-white bg-indigo-600 rounded-full">
                            New
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- 注册、登录 -->
        <div>
            <div class="hidden lg:flex items-center gap-4">
                <a href="#">
                    Login in
                </a>
                <a href="#"
                    class=" rounded-full text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-[10px] bg-black text-white hover:bg-gray-800 border-2 border-transparent">
                    Sign up
                </a>
            </div>
        </div>
    </header>
    <!-- 移动端目录 -->
    <nav class="w-full flex flex-col lg:hidden" v-if="isMenuOpen">
        <ul class="flex flex-col lg:flex-row lg:gap-6">
            <li>
                <menu>
                    <button @click="toggleMenu"
                        class="flex items-center gap-1 w-full lg:w-auto lg:px-[15px] py-[10px] text-gray-600 hover:text-gray-900">
                        <span>
                            Features
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                            stroke="currentColor" class="w-3 h-3 mt-[2.5px] group-open:rotate-180">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5">
                            </path>
                        </svg>
                    </button>
                    <div v-if="showMenuMobile" class=" transition-all duration-300">
                        <div class=" lg:absolute w-full lg:w-60 z-10">
                            <div class="px-4 lg:py-2 lg:bg-white lg:rounded-md lg:shadow lg:border flex flex-col ">
                                <a href="#" clss="py-1 text-gray-600 hover:text-gray-900">Action</a>
                                <a href="#" cass="py-1 text-gray-600 hover:text-gray-900">Another action</a>
                                <a href="#" lass="py-1 text-gray-600 hover:text-gray-900">Dropdown Submenu</a>
                                <a href="#"class="py-1 text-gray-600 hover:text-gray-900">404 Page</a>
                            </div>
                        </div>
                    </div>
                </menu>
            </li>
            <li>
                <RouterLink to="/pricing" href="#" class="flex lg:px-[15px] py-[10px] items-center text-gray-600 hover:text-gray-900">
                    <span>
                        Pricing
                    </span>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/about" href="#" class="flex lg:px-[15px] py-[10px] items-center text-gray-600 hover:text-gray-900">
                    <span>
                        About
                    </span>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/blog" href="#" class="flex lg:px-[15px] py-[10px] items-center text-gray-600 hover:text-gray-900">
                    <span>
                        Blog
                    </span>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/contact" href="#" class="flex lg:px-[15px] py-[10px] items-center text-gray-600 hover:text-gray-900">
                    <span>
                        Contact
                    </span>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/pricing" href="#" class="flex lg:px-[15px] py-[10px] items-center text-gray-600 hover:text-gray-900">
                    <span>
                        Pro Version
                    </span>
                    <span
                        class=" ml-[5px] px-[10px] py-[2.5px] text-[10px] animate-pulse uppercase text-white bg-indigo-600 rounded-full">
                        New
                    </span>
                </RouterLink>
            </li>
        </ul>
    </nav>
    <div class="lg:hidden flex items-center mt-[15px] gap-4" v-if="isMenuOpen">
        <a href="#"
            class=" rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-5 py-[10px] bg-gray-100 hover:bg-gray-200 border-2 border-transparent">Login
            in</a>
        <a href="#"
            class=" rounded text-center transition text-white focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-5 py-[10px] bg-black hover:bg-gray-800 border-2 border-transparent">Sign
            up</a>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue';
import { RouterLink } from 'vue-router';

const showMenuPC = ref(false);
const showMenuMobile = ref(false);
const menuRef = ref(null);

//按钮
const toggleMenu = () => {
    showMenuPC.value = !showMenuPC.value;
    showMenuMobile.value = !showMenuMobile.value;
}

//全局点击检测方法
const handleClickOutside = (event) => {
    if (menuRef.value && !menuRef.value.contains(event.target)) {
        showMenuPC.value = false;
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
})

onBeforeMount(() => {
    document.addEventListener('click', handleClickOutside);
})

//移动总目录开关方法
const mobileMenuRef = ref(false);


//移动features目录开关方法
const isMenuOpen = ref(false);

const toggleMobileMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    mobileMenuRef.value = !mobileMenuRef.value;

};
</script>
