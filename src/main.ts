import { createApp } from 'vue'
import App from './App.vue'

//nativeUI配置

import nativiui from 'naive-ui'
const app=createApp(App);
app.mount('#app');
app.use(nativiui);
