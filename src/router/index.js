import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import mainView from '../views/main.vue';
import loginView from '../views/login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: "Home", component: mainView},
        {path: "/login", name: "Login", component: loginView},
    ]
})


export default router;