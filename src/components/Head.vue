<template>
  <div class="head-container">
    <div class="head-container-left">
      <div class="router-path">
        <n-breadcrumb separator="/">
          <n-breadcrumb-item>
            菜单一</n-breadcrumb-item>
          <n-breadcrumb-item>
            菜单二</n-breadcrumb-item>
          <n-breadcrumb-item>
            菜单三</n-breadcrumb-item>
        </n-breadcrumb>
      </div>
    </div>
    <div class="head-container-center">

    </div>
    <div class="head-container-right">
      <div class="avatar">
        <n-avatar round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
        <n-gradient-text >Beauhou</n-gradient-text>
      </div>
    </div>
  </div>
  <n-divider />
</template>
<style scoped>
.head-container {
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.n-divider:not(.n-divider--vertical){
  margin-top: 5px;
  margin-bottom: 15px;
}

.head-container-center {
  flex: 1;
}
.avatar{
  cursor:pointer;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>