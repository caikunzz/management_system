<template>
  <h1 @click="fn">
    {{ v1 }}
  </h1>

  <div>
    <label for="username">姓名</label>
    <input id="username" type="text" placeholder="姓名" v-model="v2.username" />
  </div>
  <div>
    <label for="phonenumber">手机号</label>
    <input
      type="tel"
      id="phonenumber"
      placeholder="手机号"
      v-model="v2.phonenumber"
    />
  </div>
  <button @click="echoUserInfo">echoUserInfo</button>
</template>
<script lang="ts">
// template不需要根节点了
// 使用ref定义的数据  在js中需要value属性获取其值，在模板中不需要（template编译帮我们处理过了）
// ref可以定义简单类型、复杂类型的响应式数据
// setup返回值的两种情况
// 1.返回值为数据：数据就为tremplate提供的数据源
// 2.返回值为  返回jsx元素的函数： 该函数就直接充当render函数
import { defineComponent, reactive, ref } from "vue";
// function $ref<T>(data: T) {
//   return reactive({ value: data });
// }
//ref是一种特殊的reactive
export default defineComponent({
  setup() {
    function feat1() {
      let v1 = ref(1);
      function fn() {
        console.log(v1.value++);
      }
      return [v1, fn] as const;
    }
    let [v1, fn] = feat1();
    const v2 = reactive<{
      username: string;
      phonenumber: string;
    }>({
      username: "",
      phonenumber: "",
    });
    function echoUserInfo() {
      console.log(v2);
    }
    return { v1, v2, fn, echoUserInfo };
  },
  //data
  // methods
  // computed
  // watch
  // props
  // modal
  // render
  // template
  // components
  // filters
  // directives
  // created
});
</script>
