
import {RoleModel} from '../model/RoleModel';

import http  from '../http/Index.ts'
import { instanceToPlain } from 'class-transformer'

/**
 * 角色服务
 */
export default class RoleService{
    async  save(entity:RoleModel){
      await http({
        "url":"role/save",
        "method":"post",
        data: instanceToPlain(entity)
      }).then((rep=>{
        console.log(rep);
      }))
    }

}