import { createWebHistory, createRouter } from "vue-router";
import Login from "@/components/views/Login.vue"
import Vote from "@/components/views/Vote.vue"

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/vote/:id',
        name: 'vote',
        component: Vote,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;