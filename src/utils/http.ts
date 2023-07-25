import axios from "axios";
export default axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: process.env.VUE_APP_TIMEOUT,
});
//通过dot env文件来定义环境变量
//.env.development
//.env.production
