<template>
    <div class="user-operation">
        <n-button attr-type="button" @click="handleButtonClick">
            新增
        </n-button>
    </div>
    <n-form ref="formRef" label-placement="left" inline label-width="auto">
        <n-form-item label="用户名" path="user.name">
            <n-input placeholder="输入姓名" />
        </n-form-item>
        <n-form-item label="年龄" path="user.age">
            <n-input placeholder="输入年龄" />
        </n-form-item>
        <n-form-item>
            <n-button attr-type="button">
                搜索
            </n-button>
        </n-form-item>

    </n-form>
    <div>
        <n-data-table :columns="columns" :data="data" :pagination="pagination" :max-height="420" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent, h } from 'vue';
import { useDialog } from 'naive-ui';
import Add from './Add.vue';


const columns = [
    {
        title: '用户名',
        key: 'name'
    },
    {
        title: '年龄',
        key: 'age'
    },
    {
        title: '地址',
        key: 'address'
    }
]

export default defineComponent({
    setup() {
        const dialog = useDialog()
        return {
            handleButtonClick() {
                dialog.warning({
                    title: '使用渲染函数',
                    content: () => h(Add),
                    action: () => 'Action'
                })
            }
        }
    },
    data() {
        return {
            data: Array.from({ length: 46 }).map((_, index) => ({
                key: index,
                name: `Edward King ${index}`,
                age: 32,
                address: `London, Park Lane no. ${index}`
            })),
            columns,
            pagination: {
                pageSize: 15
            }
        }
    }
})
</script>

<style scoped>
.user-operation{
    padding-bottom: 10px;
}
</style>