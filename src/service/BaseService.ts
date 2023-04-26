import { BaseModel } from "../model/BaseModel";
import { HttpUtils } from "../http/Index";
import { PageResultConstant } from "../constant/page/PageResultConstant";
import { PageRequestConstant } from "../constant/page/PageRequestConstant";

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
    const data = await HttpUtils.sendPost<M>(this.baseUrl + "/update", entity);
    return data.data.primaryKey;
  }
  /**
   *
   * @param pageRequest 分页请求对象
   * @returns 分页查询结果
   */
  async page(pageRequest?:PageRequestConstant<M>): Promise<PageResultConstant<M>> {
    if(!pageRequest){
        pageRequest =new PageRequestConstant<M>();
        pageRequest.currentPage=1;
        pageRequest.currentPageSize=10;
    }
    console.log("分页参数",pageRequest)
    const data = await HttpUtils.sendPost<PageResultConstant<M>>(
      this.baseUrl + "/page",pageRequest
    );
    return data.data;
  }
}
