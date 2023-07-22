import Button from "./Button.vue";
import type { App } from "vue";
export default function (app: App<Element>) {
  app.component("co-button", Button);
}
