
<script  lang="ts">
import { NSpace } from 'naive-ui'
import { defineComponent } from 'vue'
export default defineComponent({
    components: {
      NSpace
    }
  })
</script>
<template>
  <div style="width: 100vw;height: 100vh;">
    <n-space content-style="height: 500px;">
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;">
        </n-layout-sider>
        <n-layout>
          <n-layout-header>颐和园路11231231231</n-layout-header>
          <n-layout-content content-style="padding: 24px;">
            平山道
          </n-layout-content>
          <n-layout-footer>成府路</n-layout-footer>
        </n-layout>
      </n-layout>
    </n-space>
    <!-- <n-table :bordered="false" :single-line="false">
      <thead>
        <tr>
          <th>Abandon</th>
          <th>Abormal</th>
          <th>Abolish</th>
          <th>...</th>
          <th>万事开头难</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>放弃</td>
          <td>反常的</td>
          <td>彻底废除</td>
          <td>...</td>
          <td>干！我刚才背的是啥</td>
        </tr>
        <tr>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
      </tbody>
    </n-table> -->
  </div>
</template>

<style scoped>
.n-space {
  height: 100vh;
}

.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
  width: 100px;
}
</style>