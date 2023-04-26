import axios, { AxiosResponse } from "axios";
import { HttpResultConstant } from "../constant/HttpResultConstant";
import { HttpStatus } from "./HttpStatus";
import { instanceToPlain } from "class-transformer";


const service = axios.create({
  // baseURL: import.meta.env.VITE_BASE_URL, // url = base url + request url
  baseURL: "/api/",
  timeout: 30000, // request timeout
  // withCredentials:true
});
// 请求拦截
service.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response: any) => {
    const respondConstant = response.data;
    if (respondConstant.code === 200) {
      return response;
    }
  },
  (error: any) => {
    if (error.response) {
      switch (error.response.status) {
        case 500:
          break;
        default:
          return Promise.reject(error);
      }
    }
  }
);

export class HttpUtils {



  
    /**
     * 发送get请求
     * @param url 请求地址
     * @param params 请求参数
     * @returns  返回数据
     */
    static async sendGet<T =any>(url:string,params?:any):Promise<HttpResultConstant<T>>{
      const resp= await HttpUtils.sendRequest(HttpStatus.get,url,params);
      return resp.data;
    }

    /**
     *
     * @param url 请求地址
     * @param params  请求参数
     */
    static async sendPost<T = any>(url:string ,params?:any):Promise<HttpResultConstant<T>>{
        if(params){
            params=instanceToPlain(params);
        }
       const resp= await HttpUtils.sendRequest(HttpStatus.post,url,params);
       return resp.data;
    }


  /**
   * 发送网络请求
   */
  static async sendRequest(httpStatus: HttpStatus, url: string, params: any):Promise<any> {
    switch (httpStatus) {
      //处理get请求
      case HttpStatus.get:
        return await service.get<any>(url,{params});
      //处理post请求
      case HttpStatus.post:
        return await service.post<any>(url,params);
    }
  }
  
}

export default service;
