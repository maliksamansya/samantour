// import './assets/main.css'

import { createApp, markRaw, } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login';
// import { createApp, markRaw } from 'vue'
import Vue3Geolocation from 'vue3-geolocation';




import App from './App.vue'
import router from './router'
const pinia = createPinia()
const app = createApp(App)

pinia.use(({ store }) => {
    store.router = markRaw(router)
})
app.use(pinia)
app.use(router)

app.use(vue3GoogleLogin, {
    clientId:
        "176482456951-gt82336o0c3lbjkhqmdp2lsfekckger1.apps.googleusercontent.com",
});
app.use(Vue3Geolocation)



app.mount('#app')
