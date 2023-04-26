

/**
 * http请求响应常量
 */
export class HttpResultConstant<T>{

    /**
     * 状态码
     */
    code!:number;

    /**
     * 消息
     */
    message !:string;

    /**
     * 数据
     */
    data !:T;
}