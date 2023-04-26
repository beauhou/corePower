<template>
  <n-space vertical>
    <n-form ref="formRef"  label-placement="left" 		>
      <n-form-item label="名称">
        <n-input v-model:value="roleModel.roleName" placeholder="角色名称" />
      </n-form-item>
      <n-form-item label="描述">
        <n-input
        v-model:value="roleModel.description"
        placeholder="描述"
        type="textarea"
        :autosize="{
          minRows: 3,
          maxRows: 5
        }"
      />
      </n-form-item>
    </n-form>
    <n-form style="pading 10px">
      <n-button type="success" @click="saveOrUpdate(roleModel)">
        保存
      </n-button>
      <n-button type="tertiary">
        取消
      </n-button>
    </n-form>
  </n-space>
</template>
  
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { RoleModel } from '../../model/RoleModel';
import  roleService  from '../../service/RoleService.ts'
import { OperationConstant } from '../../constant/OperationConstant';
const roleModel = ref(new RoleModel())

const props=defineProps({
  primaryKey:{
    type:Number
  },
  operationType:{
    type:Number,
    default:OperationConstant.info
  }
})


onMounted(()=>{
 //获取明细
 async function getInfo(){
    roleModel.value=await roleService.getById(props.primaryKey as number);
  }
  if(props.operationType===OperationConstant.update){
    getInfo();
  }
})

/**
 * 修改或者保存
 */
async function saveOrUpdate(params:RoleModel) {
  if(props.operationType===OperationConstant.update){
    await roleService.update(params);
  }else{
    await roleService.save(params);
  }
}

</script>