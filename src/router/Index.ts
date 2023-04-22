import { createRouter, createWebHistory } from "vue-router";
import User from '../view/user/List.vue'
import Login from '../Login.vue'
import Role from '../view/role/List.vue'
const routes = [
    {
        path: "/user/list",
        name: "/user/list",
        component: User,
    },
    {
        path: "/role/list",
        name: "/role/list",
        component: Role,
    },
    {
        path: "/login",
        name: "/login",
        component: Login,
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
