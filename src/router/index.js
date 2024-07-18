import { createRouter, createWebHistory  } from "vue-router";

import About from '../components/AboutPage.vue';
import Blog from '../components/BlogPage.vue';
import Contact from '../components/ContactPage.vue';
import Pricing from '../components/PricingPage.vue';
import IndexPage from "../components/IndexPage.vue";
import CharlesNorth from "../components/blog/CharlesNorth.vue";
import ConnorLopez from "../components/blog/ConnorLopez.vue";
import JanetteLynch from "../components/blog/JanetteLynch.vue";
import MarcellZiemann from "../components/blog/MarcellZiemann.vue";

const routes=[
    {path:'/',component:IndexPage},
    {path:'/pricing',component:Pricing},
    {path:'/about',component:About},
    {path:'/contact',component:Contact},
    {path:'/blog',component:Blog},
    {path:'/blog/charlesNorth',component:CharlesNorth},
    {path:'/blog/connorLopez',component:ConnorLopez},
    {path:'/blog/janetteLynch',component:JanetteLynch},
    {path:'/blog/marcellZiemann',component:MarcellZiemann},
]

const router=createRouter({
    history:createWebHistory (),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          // 如果有保存的位置信息，则返回到该位置
          return savedPosition;
        } else {
          // 否则，滚动到页面顶部
          return { top: 0, behavior: 'smooth' };
        }
      },
});

export default router