<template>
  <div class="btn" @click="$emit('abc', true)">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export type T1 = "abcdefg" | "bcdefg" | "jkl" | boolean;
export default defineComponent({
  name: "co-button",
  //使用3.x新增的emits选项来自定义事件
  // emits: ["abc"],
  // emits: { abc: null },
  emits: { abc: (arg: T1) => arg },
  setup() {
    console.log("setup");
  }, //提供给组合式API的入口（代替的是beforeCreate和created）
});
</script>

<style scoped lang="scss">
.btn {
  outline: none;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  line-height: 1.5714285714285714;
  font-size: 14px;
  height: 32px;
  padding: 4px 15px;
  border-radius: 6px;
  color: #fff;
  background-color: #1677ff;
  box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
}
</style>
