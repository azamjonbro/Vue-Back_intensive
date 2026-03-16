import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue"
import Home from "../views/Home.vue"
const routes = [
    {
        name:"Home",
        path:"/",
        component: Home
    },
    {
        name:"Login",
        path:"/login",
        component:Login
    }
]

const router = createRouter({
    routes,
    history:createWebHistory()
})
export default router