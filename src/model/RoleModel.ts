import { BaseModel } from './BaseModel';


export class RoleModel extends BaseModel{

    /**
     * 获取主键
     */
    get primaryKey(): number {
      return this.roleId;
    }

    /**
     * 设置主键
     */
    set primaryKey(value: number) {
       this.roleId=value;
    }

    /**
     * 主键
     */
    roleId !: number;

    /**
     * 角色名称
     */
     roleName!: string;

    /**
     * 描述
     */
     description!: string;
}