import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import Button from "./components/Button";
import "./styles.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

const app = createApp(App);
app.use(router);
app.use(Button);
app.use(Antd);
app.mount("#app");
