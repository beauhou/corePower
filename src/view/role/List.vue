<template>
    <div class="user-operation">
        <n-button attr-type="button" @click="save">
            新增
        </n-button>
    </div>
    <n-form ref="formRef" label-placement="left" inline label-width="auto">
        <n-form-item label="角色名称" path="user.name">
            <n-input placeholder="输入角色名称" />
        </n-form-item>
        <n-form-item>
            <n-button attr-type="button">
                搜索
            </n-button>
        </n-form-item>
    </n-form>
    <div>
        <n-data-table a :columns="columns" :data="list.itemList" :pagination="{ pageSize: 5 }" :max-height="420" />
    </div>
</template>
  
<script lang="ts" setup >
import { h, ref } from 'vue';
import { useDialog } from 'naive-ui';
import Add from './Add.vue';
import roleService from '../../service/RoleService';
import { PageResultConstant } from '../../constant/page/PageResultConstant';
import { RoleModel } from '../../model/RoleModel';
/**
 * 对话框
 */
const dialog = useDialog();
const list = ref(new PageResultConstant<RoleModel>());

async function getList() {
    list.value = await roleService.page();
}

const columns = [
    {
        title: '角色名称',
        key: 'roleName'
    },
    {
        title: '描述',
        key: 'description'
    },
    {
        title: '创建时间',
        key: 'createdTime'
    }
]
getList();

/**
 * 保存
 */
function save() {
    dialog.create({
        title: '保存角色',
        content: () => h(Add,{"id":18}),
        showIcon: false,
        maskClosable:false,
    })
}

</script>

<style scoped>
.user-operation {
    padding-bottom: 10px;
}
</style>