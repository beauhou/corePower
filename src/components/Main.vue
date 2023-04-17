
<script setup lang="ts">
import Menu from './Menu.vue'
</script>
<template>
  <n-space vertical size="large" style="height: 500px;">
    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;">
        <Menu/> 
      </n-layout-sider>
      <n-layout>
        <n-layout-header>颐和园路</n-layout-header>
        <n-layout-content content-style="padding: 24px;">
          平山道
        </n-layout-content>
        <n-layout-footer>成府路</n-layout-footer>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<style scoped>
.n-space{
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