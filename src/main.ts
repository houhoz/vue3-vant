import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'amfe-flexible'

import '../mock/index'

createApp(App).use(store).use(router).mount('#app')
