
 export default class RespondConstant<T extends Object> {

    /**
     * 状态码
     */
    private _code!: number;

    /**
     * 消息
     */
    private _message!: string;

    /**
     * 数据
    */
    private _data!: T;



    public get code(): number {
        return this._code;
    }
    public set code(value: number) {
        this._code = value;
    }

    public get data(): T {
        return this._data;
    }
    public set data(value: T) {
        this._data = value;
    }

    public get message(): string {
        return this._message;
    }
    public set message(value: string) {
        this._message = value;
    }

}
