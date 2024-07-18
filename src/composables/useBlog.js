import { ref } from 'vue';

// eslint-disable-next-line no-unused-vars
const blog=ref([
    {
        src:'https://images.unsplash.com/photo-1627163439134-7a8c47e08208?&fit=crop&w=430&h=240',
        title:'courses',
        introduction:'Introduction to the Essential Data Structures & Algorithms',
        author:'Marcell Ziemann',
        time:'Wed Nov 09 2022',
        slug:'marcellZiemann',
    },
    {
        src:'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?&fit=crop&w=430&h=240',
        title:'tutorials',
        introduction:'The Complete Guide to Full Stack Web Development',
        author:'anette Lynch',
        time:'Tue Nov 08 2022',
        slug:'janetteLynch',
    },
    {
        src:'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?&fit=crop&w=430&h=240',
        title:'tutorials',
        introduction:'How to become a Frontend Master',
        author:'Connor Lopez',
        time:'Mon Nov 07 2022',
        slug:'connorLopez',
    },
    {
        src:'https://images.unsplash.com/photo-1542393545-10f5cde2c810?&fit=crop&w=430&h=240',
        title:'technology',
        introduction:'Typography Example Post',
        author:'Charles North',
        time:'Sat Nov 05 2022',
        slug:'charlesNorth',
    },
])

export function useBlog() {
    return { blog };
}


