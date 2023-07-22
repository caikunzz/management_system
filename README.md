### vue.config.js

- vue 相关的配置
- webpack 相关的配置

### js -> ts

### main.ts

1.初始化根组件的方式

```js
//vue.js 2.x
new Vue({
    render:(h) = >h(App)
}).$mount("#app")

//vue.js 3.x
createApp(App).mount("#app")

//vue .js的引入： 2.x中全量引入  3.x中模块引入



2.路由的注入方式

//vue.js 2.x
    new Vue({
        render:(h) = >h(App),
        router,
    }).$mount("#app")

//vue.js 3.x
createApp(App).use(router).mount("#app")
```

### router 的实例化

```js
2.x
// mode: 'hash'| 'history'
const router = new Vuerouter({routes,mode})

3.x
//mode: 'createWebHasshHistory' | 'createWebHistory'
const router = createRouter({routes,mode})

```

### 选项式 API （2.x）

3.x 中基于 2.x 的选项配置作了如下升级

- 新增 emits 配置项
  > emits 用于声明由组件触发的自定义事件。 (和 props 类似)
  > 解决问题：
  > 组件的 click 事件需要添加.native 修饰符
  > 组件内部触发事件 this.$emit("自定义事件名称","参数")

### 组合式 API

在 setup 中定义使用
