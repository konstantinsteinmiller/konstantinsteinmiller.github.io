import '@/assets/tailwind.css'
import '@/assets/main.sass'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { i18n } from '@/utils/setupI18n'

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
