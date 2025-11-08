import type { App } from "vue"
import HelloWorld from "./components/HelloWorld.vue"

export { HelloWorld }

export function install(app: App): void {
  app.component("HelloWorld", HelloWorld)
}

export default { install }
