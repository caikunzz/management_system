import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import "./styles.css";
import "ant-design-vue/dist/reset.css";
import { Icon } from "@iconify/vue";

const app = createApp(App);
app.use(router);
app.component("Icon", Icon);
app.mount("#app");
