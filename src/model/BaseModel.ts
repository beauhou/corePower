

/**
 * 基础数据模型
 */
export  abstract class BaseModel{
    forEach(arg0: (element: T) => void) {
      throw new Error("Method not implemented.");
    }

    

    /**
     * 获取主键
     */
    abstract get primaryKey(): number 


    /**
     * 设置主键
     */
    abstract set  primaryKey(value: number) 


    
}