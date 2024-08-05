import { createApp } from "vue";
import App from "./App.vue";
// element css
import "element-plus/dist/index.css";
// element plus
import ElementPlus from "element-plus";
// element icons
import * as Icons from "@element-plus/icons-vue";
// vue Router
import router from "@/routers";
// pinia store
import pinia from "@/stores";

const app = createApp(App);


// register the element Icons component
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(ElementPlus).use(router).use(pinia).mount("#app");
