import { ClassConstructor, plainToClass } from "class-transformer";

/**
 *数据模型工具类
 */
export class ModelUtils {
  /**
   * 复制类属性
   */
  static copyProperties<T=any>(target: any, clazz: ClassConstructor<T>) {
    const result = plainToClass(clazz, target);
    return result;
  }
}
