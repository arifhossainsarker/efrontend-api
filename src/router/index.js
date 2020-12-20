import {createWebHistory, createRouter} from 'vue-router';
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import ProductDetails from '../components/parsials/ProductDetails.vue'

const routes =[
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/products/:id",
        name: "ProductDetails",
        component: ProductDetails
    },
    {
        path: "/about",
        name: "About",
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;