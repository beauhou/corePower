import { RoleModel } from "../model/RoleModel";
import  { HttpUtils } from "../http/Index.ts";
import { BaseService } from "./BaseService.ts";
import { PageResultConstant } from "../constant/page/PageResultConstant.ts";
import { BaseModel } from "../model/BaseModel.ts";


/**
 * 角色服务
 */
 class  RoleService extends BaseService<RoleModel> {

  /**
   * 请求根地址
   */
  baseUrl: string="/role";


}

export default new RoleService();
