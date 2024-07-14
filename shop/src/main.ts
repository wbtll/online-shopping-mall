
import "./assets/globals.css"

import { createApp } from 'vue'

// 状态管理
import { createPinia } from 'pinia'
// axios
import axios from "axios";
// elementplus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
// vuerouter
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(axios)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
