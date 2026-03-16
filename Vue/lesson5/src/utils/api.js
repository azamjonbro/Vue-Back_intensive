import axios from "axios";
let token = localStorage.getItem("token")
const api = axios.create({
    baseURL:"https://dacha.techinfo.uz/api",
    timeout:20000,
    headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+token
    }
})










export default api