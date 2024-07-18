import { ref } from 'vue';
const liDetail=ref([
    "Luctus euismod pretium nisi et, est dui enim.",
    "Curae eget inceptos malesuada, fermentum class.",
    "Porttitor vestibulum aliquam porta feugiat velit, potenti eu placerat.",
    "Ligula lacus tempus ac porta, vel litora.",
]);

export function useliDetail(){
    return { liDetail };
}