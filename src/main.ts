import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import router from './router'
import pinia from './stores'

import './assets/style.css'
import 'ant-design-vue/dist/reset.css'

import Antd from 'ant-design-vue';

const app = createApp(App);

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Charlie+Text:wght@400;700&display=swap';
link.rel = 'stylesheet';

document.head.appendChild(link);
app.use(Antd);
app.use(router);
app.use(pinia);
app.mount('#app');

  


