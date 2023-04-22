import axios from "axios";
const service = axios.create({
    // baseURL: import.meta.env.VITE_BASE_URL, // url = base url + request url
    baseURL:"/api/",
    timeout: 30000,// request timeout
    // withCredentials:true
})
// 请求拦截
service.interceptors.request.use(
    (config: any) => {
        // config.headers["content-type"]="application/json"
        return config
    },
    (error: any) => {
        return Promise.reject(error)
    }
)

// 响应拦截
service.interceptors.response.use(
    (response: any) => {
        const respondConstant = response.data ;
        if (respondConstant.code === 200) {
            return response.data
        }
    },
    (error: any) => {
        if (error.response) {
            switch (error.response.status) {
                case 500:
                    break
                default:
                    return Promise.reject(error)
            }
        }
    }
)

export default service