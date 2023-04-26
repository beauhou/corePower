<template>
  <n-space vertical>
    <n-form ref="formRef"  label-placement="left" 		>
      <n-form-item label="名称">
        <n-input v-model:value="roleModel.roleName" placeholder="角色名称" />
      </n-form-item>
      <n-form-item label="描述">
        <n-input
        readonly="true"
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
      <n-button type="success" @click="save">
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
const save = () => { roleService.save(roleModel.value); }
const props=defineProps({
  id:{
    type:Number
  },
  operationType:{
    type:Number,
    default:OperationConstant.info
  }
})


/**
 * 创建
 */
onMounted(()=>{
  //获取明细
  async function getInfo(){
    roleModel.value=await roleService.getById(props.id as number);
  }
  getInfo();
})


</script>