

/**
 * 基础数据模型
 */
export  abstract class BaseModel{

    

    /**
     * 获取主键
     */
    abstract get primaryKey(): number 


    /**
     * 设置主键
     */
    abstract set  primaryKey(value: number) 


    
}