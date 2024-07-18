<template>
    <div>
        <div class="text-center mt-20">
            <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">Pricing</h1>
            <p class=" text-slate-600 mt-5 text-lg">Simple & Predictable pricing. No Surprises.</p>
        </div>
        <div class=" grid md:grid-cols-3 gap-10 mt-[60px] mx-auto max-w-screen-lg">
            <!-- free -->
            <div>
                <div class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-[25px] px-[30px] rounded-md">
                    <div class=" text-center">
                        <h4 class=" text-lg font-medium text-gray-400">Personal</h4>
                        <p class="mt-[15px] text-4xl font-bold text-black md:text-4xl">Free</p>
                    </div>
                    <ul class="grid mt-[15px] gap-y-4">
                        <li class="flex items-start gap-3 text-gray-800" v-for="(item,index) in freeLi" :key="index">
                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-source-file="C:/Users/25499/Desktop/Astroship v1.2.0/astroship/src/components/ui/icons/tick.astro" data-astro-source-loc="10:5"><circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".16" data-astro-source-file="C:/Users/25499/Desktop/Astroship v1.2.0/astroship/src/components/ui/icons/tick.astro" data-astro-source-loc="10:5"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 12a8.25 8.25 0 0 1 11.916-7.393.75.75 0 1 0 .668-1.343A9.713 9.713 0 0 0 12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c0-.366-.02-.727-.06-1.082a.75.75 0 1 0-1.49.164A8.25 8.25 0 1 1 3.75 12Zm17.78-6.47a.75.75 0 0 0-1.06-1.06L12 12.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z" fill="currentColor" data-astro-source-file="C:/Users/25499/Desktop/Astroship v1.2.0/astroship/src/components/ui/icons/tick.astro" data-astro-source-loc="11:14"></path> </svg>
                            <span>
                                {{ item }}
                            </span>
                        </li>
                    </ul>
                    <div class="flex mt-10">
                        <a href="#" class=" rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-[25px] py-[12.5px] bg-white border-2 border-black hover:bg-gray-100 text-black">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
            <!-- startup -->
            <div>
                <div class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-[25px] px-[30px] rounded-md">
                    <div class=" text-center">
                        <h4 class=" text-lg font-medium text-gray-400">startup</h4>
                        <p class="mt-[15px] text-4xl font-bold text-black md:text-4xl">$19</p>
                    </div>
                    <ul class="grid mt-[15px] gap-y-4">
                        <li class="flex items-start gap-3 text-gray-800" v-for="(item,index) in startupLi" :key="index">
                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-source-file="C:/Users/25499/Desktop/Astroship v1.2.0/astroship/src/components/ui/icons/tick.astro" data-astro-source-loc="10:5"><circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".16" data-astro-source-file="C:/Users/25499/Desktop/Astroship v1.2.0/astroship/src/components/ui/icons/tick.astro" data-astro-source-loc="10:5"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 12a8.25 8.25 0 0 1 11.916-7.393.75.75 0 1 0 .668-1.343A9.713 9.713 0 0 0 12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c0-.366-.02-.727-.06-1.082a.75.75 0 1 0-1.49.164A8.25 8.25 0 1 1 3.75 12Zm17.78-6.47a.75.75 0 0 0-1.06-1.06L12 12.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z" fill="currentColor" data-astro-source-file="C:/Users/25499/Desktop/Astroship v1.2.0/astroship/src/components/ui/icons/tick.astro" data-astro-source-loc="11:14"></path> </svg>
                            <span>
                                {{ item }}
                            </span>
                        </li>
                    </ul>
                    <div class="flex mt-10">
                        <a href="#" class=" rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-[25px] py-[12.5px] bg-black border-2 border-black hover:bg-gray-100 text-white">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
            <!-- enterprise -->
            <div>
                <div class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-[25px] px-[30px] rounded-md">
                    <div class=" text-center">
                        <h4 class=" text-lg font-medium text-gray-400">Enterprise</h4>
                        <p class="mt-[15px] text-4xl font-bold text-black md:text-4xl">Custom</p>
                    </div>
                    <ul class="grid mt-[15px] gap-y-4">
                        <li class="flex items-start gap-3 text-gray-800" v-for="(item,index) in enterpriseLi" :key="index">
                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-source-file="C:/Users/25499/Desktop/Astroship v1.2.0/astroship/src/components/ui/icons/tick.astro" data-astro-source-loc="10:5"><circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".16" data-astro-source-file="C:/Users/25499/Desktop/Astroship v1.2.0/astroship/src/components/ui/icons/tick.astro" data-astro-source-loc="10:5"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 12a8.25 8.25 0 0 1 11.916-7.393.75.75 0 1 0 .668-1.343A9.713 9.713 0 0 0 12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c0-.366-.02-.727-.06-1.082a.75.75 0 1 0-1.49.164A8.25 8.25 0 1 1 3.75 12Zm17.78-6.47a.75.75 0 0 0-1.06-1.06L12 12.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z" fill="currentColor" data-astro-source-file="C:/Users/25499/Desktop/Astroship v1.2.0/astroship/src/components/ui/icons/tick.astro" data-astro-source-loc="11:14"></path> </svg>
                            <span>
                                {{ item }}
                            </span>
                        </li>
                    </ul>
                    <div class="flex mt-10">
                        <a href="#" class=" rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-[25px] py-[12.5px] bg-white border-2 border-black hover:bg-gray-100 text-black">
                            Contact us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const freeLi=ref(["Lifetime free","Up to 3 users","Unlimited Pages","Astro Sub domain","Basic Integrations","Community Support"]);
const startupLi=ref(["All Free Features","Up to 20 users","20 Custom domains","Unlimited Collaborators","Advanced Integrations","Priority Support"])
const enterpriseLi=ref(["All Pro Features","Unlimited Custom domains","99.99% Uptime SLA","SAML & SSO Integration","Dedicated Account Manager","24/7 Phone Support"]);











</script>

