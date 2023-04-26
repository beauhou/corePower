
import {PageParentConstant} from'./PageParentConstant.ts'

export class PageResultConstant<T=any> extends PageParentConstant{


    /**
     * 总数
     */
    total!:number;

    /**
     * 列表对象
     */
    itemList !:T

}