import {createWebHistory, createRouter} from 'vue-router';
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import ProductDetails from '../components/parsials/ProductDetails.vue'
import Login from '../components/parsials/Login.vue'
import Register from '../components/parsials/Register.vue'

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
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;