import { createApp } from 'vue'
import Nativiui from 'naive-ui'
import App from './App.vue'
import {router} from './router/Index.ts'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
const app=createApp(App);
app.use(Nativiui);
app.use(router);
app.mount('#app');

