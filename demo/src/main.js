import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

// 入口main.js默认采用的是es6原生的模块（import语法在ES6中默认发送一个请求）
// 默认会把vue的模块增加一个前缀 /@modules
// 把.vue文件在后端给解析成一个对象了（唯一就是编译了.vue文件）

// node Koa 快速搭建http服务