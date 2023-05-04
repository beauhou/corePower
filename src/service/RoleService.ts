import { ClassConstructor } from "class-transformer";
import { RoleModel } from "../model/RoleModel";
import { BaseService } from "./BaseService.ts";


/**
 * 角色服务
 */
 class  RoleService extends BaseService<RoleModel> {
  
  /**
   * 获取泛型T的类型
   * @returns T类型
   */
  getModelClazz(): ClassConstructor<RoleModel> {
    return RoleModel;
  }

  /**
   * 请求根地址
   */
  baseUrl: string="/role";
  


}

export default new RoleService();
