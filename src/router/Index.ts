import { createRouter, createWebHistory } from "vue-router";
import Role from '../view/role/List.vue'
const routes = [
    {
        path: "/",
        name: "/role/list",
        component: Role,
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
