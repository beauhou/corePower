import { BaseModel } from "../../model/BaseModel";
import { PageParentConstant } from "./PageParentConstant";

/**
 * 分页请求参数
 */
export class PageRequestConstant<M extends BaseModel> extends PageParentConstant{

    /**
     * 查询参数
     */
    queryParams !:M;

}