import { createApp } from "vue";
import App from "./App.vue";
import OfficeTool from "office-tool";

import "@/assets/styles/global.css";
import "office-tool/dist/index.css";

const app = createApp(App);
app.use(OfficeTool);

app.mount("#app");
