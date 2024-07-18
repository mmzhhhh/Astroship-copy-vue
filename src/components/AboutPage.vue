<template>
    <div>
        <!-- About标题 -->
        <div class="text-center mt-20">
            <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">About</h1>
            <p class=" text-slate-600 mt-5 text-lg">We are a small passionate team.</p>
        </div>
        <!-- 简介 -->
        <div class="mt-20 flex flex-col gap-3 max-w-4xl mx-auto">
            <h2 class=" font-bold text-3xl text-gray-800">Empowering the world with Astro.</h2>
            <p class=" text-lg leading-relaxed text-slate-500">We're a multi-cultural team from around the world! We come from diverse backgrounds, bringing different personalities, experiences and skills to the job. This is what makes our team so special.</p>
        </div>
        <!-- 团队简介 -->
        <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-[60px]">
            <div class="group" v-for="(item,index) in team" :key="index">
                <!-- 头像 -->
                <div class=" w-full text-center">
                    <img :src=item.src alt="team" sizes="(max-width:800px) 100vw,400px" width="400" height="400" class=" w-full rounded-md  transition group-hover:-translate-y-1 group-hover:shadow-xl bg-white object-cover object-center aspect-square">
                </div>
                <div class="mt-5 text-center">
                    <h2 class=" text-lg text-gray-800">{{ item.name }}</h2>
                    <h3 class=" text-sm text-slate-500">{{ item.position }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const team=ref([
    {
        src:'https://images.unsplash.com/photo-1580489944761-15a19d654956?&fit=crop&w=280',
        name:'Janette Lynch',
        position:'Senior Director'
    },

    {
        src:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?&fit=crop&w=280',
        name:'Marcell Ziemann',
        position:'Principal Strategist'
    },

    {
        src:'	https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?&fit=crop&w=280',
        name:'Robert Palmer',
        position:'Marketing Engineer'
    },
])
</script>
