<template>
  <n-space vertical>
    <n-form ref="formRef" >
      <n-form-item label="角色名称"  >
        <n-input v-model:value="roleModel.roleName" placeholder="请输入角色名称" />
      </n-form-item>
      <n-form-item label="描述">
        <n-input v-model:value="roleModel.description" placeholder="请输入描述" />
      </n-form-item>
    </n-form>
    <n-form style="pading 10px" >
      <n-button type="success" @click="save">
      保存
    </n-button>
    <n-button type="tertiary">
      取消
    </n-button>
    </n-form>
  </n-space>

</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue'
import {RoleModel} from '../../model/RoleModel';
import RoleService from '../../service/RoleService.ts'
export default defineComponent({
  setup() {
    const roleModel = ref(new RoleModel())
    return {
      roleModel,
      save(){
        new RoleService().save(roleModel.value);
      },
    }
  }
})
</script>