<template>
    <div>
         <!-- Blog标题 -->
         <div class="text-center mt-20">
            <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">Our Blog</h1>
            <p class=" text-slate-600 mt-5 text-lg">We write about building startups and thoughts going on our mind.</p>
        </div>
        <!-- Blog内容 -->
        <main class="mt-20">
            <ul class="grid gap-16 max-w-4xl mx-auto">
                <li v-for="(item,index) in blog" :key="index">
                    <router-link :to="`/blog/${item.slug}`">
                        <div class="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
                            <!-- 博客图片 -->
                            <img :src=item.src alt="blog" class=" w-full rounded-2xl object-cover object-center bg-white" width="800" height="600">
                            <!-- 博客简介 -->
                            <div>
                                <span class=" text-blue-400 uppercase text-sm font-medium ">{{ item.title }}</span>
                                <h2 class=" text-3xl font-semibold leading-snug tracking-tight mt-[5px]">{{ item.introduction }}</h2>
                                <div class=" flex gap-2 mt-[15px]">
                                    <span class=" text-gray-400">
                                        {{ item.author }}
                                    </span>
                                    <span class=" text-gray-400">
                                        .
                                    </span>
                                    <span class=" text-gray-400">
                                        {{ item.time }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </main>
    </div>
</template>

<script setup>
import {useBlog} from '../composables/useBlog'
const {blog} = useBlog();
</script>
