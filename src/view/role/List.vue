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
        <n-data-table a :columns="columns" :data="pageList.itemList" :max-height="420" :loading="loading" />
    </div>
    <div class="pagination">
        <n-pagination v-model:page="pageList.currentPage" v-model:page-size="pageList.currentPageSize" 
        :page-count="Math.ceil(pageList.total/pageList.currentPageSize)" show-size-picker :page-sizes="pageSizes" 	/>
        <div style="margin-left: 10px;"></div>
        <n-icon class="pagination-refresh" size="20" :component="Reload" @click="getList" />
    </div>
</template>
  
<script lang="ts" setup >
import { h, ref } from 'vue';
import { useDialog, NButton } from 'naive-ui';
import SaveOrUpdate from './SaveOrUpdate.vue';
import roleService from '../../service/RoleService';
import { PageResultConstant } from '../../constant/page/PageResultConstant';
import { RoleModel } from '../../model/RoleModel';
import { OperationConstant } from '../../constant/OperationConstant';
import { Reload } from '@vicons/ionicons5'

/**
 * 对话框
 */
const dialog = useDialog();
const loading = ref(false);
const pageList = ref(new PageResultConstant<RoleModel>());

async function getList() {
    loading.value = true;
    pageList.value = await roleService.page();
    console.log(pageList.value)
    loading.value = false;
}

const columns = [
    {
        title: 'id',
        key: 'roleId'
    },
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
    },
    {
        title: '操作',
        key: 'actions',
        render(row: RoleModel) {
            return h(
                NButton,
                {
                    size: 'small',
                    onClick: () => {
                        update(row.roleId);
                    }
                },
                { default: () => '编辑' }
            )
        }
    }
]

getList();

/**
 * 保存
 */
function save() {
    dialog.create({
        title: '保存角色',
        content: () => h(SaveOrUpdate, { operationType: OperationConstant.save }),
        showIcon: false,
        maskClosable: false,
    })
}

/**
 * 修改
 */
function update(primaryKey: number) {
    dialog.create({
        title: '修改角色',
        content: () => h(SaveOrUpdate, { primaryKey, operationType: OperationConstant.update }),
        showIcon: false,
        maskClosable: false,
    })
}
const pageSizes = [
      {
        label: '10 每页',
        value: 10
      },
      {
        label: '20 每页',
        value: 20
      },
      {
        label: '30 每页',
        value: 30
      },
      {
        label: '40 每页',
        value: 40
      }
    ]

</script>

<style scoped>
.user-operation {
    padding-bottom: 10px;
}

.pagination {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.pagination-refresh {
    cursor: pointer;
}
</style>