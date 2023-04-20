import { createRouter, createWebHashHistory } from "vue-router";
import User from '../view/user/List.vue'
const routes = [
    {
        path: "/home",
        name: "home",
        component: User,
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
