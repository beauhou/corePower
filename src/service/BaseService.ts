import { BaseModel } from "../model/BaseModel";
import { HttpUtils } from "../http/Index";
import { PageConstant } from "../constant/page/PageConstant";
import { ClassConstructor, plainToClass } from "class-transformer";
import { ModelUtils } from "../util/ModelUtils";

/**
 * 基础业务处理类
 */
export abstract class BaseService<T extends BaseModel> {
  /**
   * 根路径
   */
  abstract baseUrl: string;

  /**
   * 获取右上角泛型
   */
  abstract getModelClazz(): ClassConstructor<T>;

  /**
   *
   */
  async getById(primaryKey: number): Promise<T> {
    const data = await HttpUtils.sendGet<T>(this.baseUrl + "/get", {
      primaryKey,
    });
    return data.data;
  }

  /**
   *
   * @param entity 保存
   * @returns
   */
  async save(entity: T): Promise<T> {
    const result = await HttpUtils.sendPost<T>(this.baseUrl + "/save", entity);
    return result.data;
  }

  /**
   * 更新数据
   * @param entity 实体对象
   */
  async update(entity: T): Promise<number> {
    const data = await HttpUtils.sendPost<T>(this.baseUrl + "/update", entity);
    return data.data.primaryKey;
  }
  /**
   *
   * @param pageRequest 分页请求对象
   * @returns 分页查询结果
   */
  async page(
    pageRequest?: PageConstant<T>
  ): Promise<PageConstant<T>> {
    if (!pageRequest) {
      pageRequest = new PageConstant<T>();
      pageRequest.currentPage = 1;
      pageRequest.currentPageSize = 10;
    }
    const data = await HttpUtils.sendPost<PageConstant<T>>(
      this.baseUrl + "/page",
      pageRequest
    );

    return this.transferPage(data.data);
  }

  /**
   * 内部转换
   * @param data 分页返回结果
   * @returns 分页class实例化对象
   */
  private transferPage(data: PageConstant<T>): PageConstant<T> {
    const result = plainToClass(PageConstant, data) as PageConstant<T>;
    const items = result.itemList;
    const transFerItem: T[] = [];
    items.forEach((element: T) => {
      transFerItem.push(this.transferJsonObj2Model(element));
    });
    result.itemList
    result.itemList = transFerItem;
    return result;
  }

  /**
   * 将Json对象转化为模型对象
   */
  protected transferJsonObj2Model(target: any): T {
    console.log("转换类型",target)
    const result = plainToClass(this.getModelClazz(), target);
    return result;
  }


}
