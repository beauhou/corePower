<script  setup  lang="ts">
import { ref } from 'vue'
import Menu from "./Menu.vue";
import Head from "./Head.vue";
import Content from "./Content.vue";
const collapsed = ref(false)
</script>
<template>
  <n-layout class="main-contain" has-sider>
    <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="220" :collapsed="collapsed" show-trigger
      @collapse="collapsed = true" @expand="collapsed = false">
      <Menu />
    </n-layout-sider> 
    <n-layout class="main-contain-right">
      <n-layout-header>
        <Head />
      </n-layout-header>
      <n-layout-content class="main-contain-right-content">
        <Content />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped>
:deep(.n-layout-scroll-container){
  width: 100%;
}
.main-contain-right{
  margin: 5px;
  padding-top: 5px;
}
.main-contain{
  display: flex;
}
.n-contain-right-content{
  flex: 1;
}
</style>