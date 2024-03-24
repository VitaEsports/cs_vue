import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App, { message: 'Hello from Vue.js!' } )
app.use(createPinia())
app.use(router)

app.mount('#app')