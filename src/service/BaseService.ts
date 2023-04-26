import { BaseModel } from "../model/BaseModel";
import { HttpUtils } from "../http/Index";
import { PageResultConstant } from "../constant/page/PageResultConstant";

/**
 * 服务基础类
 */
export abstract class BaseService<M extends BaseModel> {
  /**
   * 根路径
   */
  abstract baseUrl: string;

  /**
   *
   */
  async getById(primaryKey: number): Promise<M> {
    const data = await HttpUtils.sendGet<M>(this.baseUrl + "/get", { primaryKey});
    console.log("哈哈哈",data);
    return data.data;
  }

  /**
   *
   * @param entity 保存
   * @returns
   */
  async save(entity: M): Promise<M> {
    const result = await HttpUtils.sendPost<M>(this.baseUrl + "/save", entity);
    return result.data;
  }

  /**
   * 更新数据
   * @param entity 实体对象
   */
  async update(entity: M): Promise<number> {
    const data = await HttpUtils.sendPost<M>(this.baseUrl + "/get", entity);
    return data.data.primaryKey;
  }
  /**
   *
   * @returns 分页查询对象
   */
  async page(): Promise<PageResultConstant<M>> {
    const data = await HttpUtils.sendPost<PageResultConstant<M>>(
      this.baseUrl + "/page"
    );
    return data.data;
  }
}
