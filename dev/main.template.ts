import { createApp } from "vue"
import "../packages/tailwind.css"

// @ts-ignore: App.vue はcp App.template.vue App.vueで作成
import App from "./App.vue"

createApp(App).mount("#app")
