import { BaseModel } from "../../model/BaseModel.ts";

export class PageConstant<T = BaseModel>   {
  /**
   * 当前页
   */
  currentPage: number = 1;

  /**
   * 当前页码
   */
  currentPageSize: number = 10;
  /**
   * 总数
   */
  total!: number;

  /**
   * 列表对象
   */
  itemList!: T[];

  /**
   * 查询参数
   */
  queryParams!: T;

  /**
   * 获取分页总页数
   */
  public getTotalCount(): Number {
    const totalCount = Math.ceil(this.total / this.currentPageSize);
    return totalCount;
  }
}
