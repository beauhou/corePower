import { RoleModel } from "../model/RoleModel";
import { BaseService } from "./BaseService.ts";


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
