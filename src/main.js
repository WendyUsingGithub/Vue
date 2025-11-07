import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // 引入你剛剛建立的插件

const app = createApp(App)

app.use(vuetify)

app.mount('#app')
