<template>
    <main class="grid lg:grid-cols-2 place-items-center pt-20 pb-10 md:pt-[10px] md:pb-[120px]">
        <!-- 简介 -->
        <div>
            <h1 class=" text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">Marketing
                website done with Astro</h1>
            <p class=" text-lg mt-5 text-slate-600 max-w-xl">Astroship is a starter template for startups, marketing
                websites & landing pages. Built with
                Astro.build and TailwindCSS. You can quickly create any website with this starter.</p>
            <div class=" mt-7 flex flex-col sm:flex-row gap-3">
                <a href="#"
                    class=" rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-6 py-3 bg-black text-white hover:bg-gray-800 border-2 border-transparent flex gap-1 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"
                        class="text-white w-4 h-4" width="1em" height="1em" fill="white" stroke="white"
                        stroke-width="1">
                        <path
                            d="M18.348,7.23c-1.311-3.151-4.395-5.23-7.848-5.23C5.813,2,2,5.813,2,10.5c0,.551,.053,1.097,.157,1.633-1.347,1.032-2.157,2.646-2.157,4.367,0,3.032,2.243,5.5,5,5.5h11.5c4.136,0,7.5-3.364,7.5-7.5,0-3.467-2.344-6.437-5.652-7.27Zm-1.848,12.77H5c-1.654,0-3-1.57-3-3.5,0-1.261,.684-2.43,1.784-3.051l.688-.389-.219-.76c-.168-.582-.253-1.188-.253-1.801,0-3.584,2.916-6.5,6.5-6.5,2.79,0,5.265,1.774,6.159,4.415l.191,.564,.587,.101c2.644,.454,4.563,2.733,4.563,5.42,0,3.032-2.467,5.5-5.5,5.5Zm-1.207-7.293l1.414,1.414-3.293,3.293c-.39,.39-.902,.585-1.414,.585s-1.024-.195-1.414-.585l-3.293-3.293,1.414-1.414,2.293,2.293v-6h2v6l2.293-2.293Z" />
                    </svg>
                    Download for Free
                </a>
                <a href="#"
                    class=" rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-6 py-3 border-2 border-black flex gap-1 items-center justify-center ">
                    <svg height="1em" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1"
                        viewBox="0 0 512 512" width="1em" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g>
                            <path class="st0"
                                d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z" />
                        </g>
                    </svg>
                    GitHub Repo
                </a>
            </div>
        </div>
        <!-- 图片 -->
        <div class=" py-7 md:order-1 hidden md:block ">
            <img src="/src/assets/hero.png">
        </div>
    </main>
</template>
