import { createWebHistory, createRouter } from "vue-router";
import Login from "@/components/views/Login.vue"
import Vote from "@/components/views/Vote.vue"
import NotFound from "@/components/views/NotFound.vue"
import End from "@/components/views/End.vue"

const routes = [
    {
        path: '/comma-vote',
        name: 'Login',
        component: Login,
    },
    {
        path: '/vote/:id',
        name: 'vote',
        component: Vote,
    },
    {
        path: '/end',
        name: 'end',
        component: End,
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;

