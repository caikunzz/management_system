<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
  <co-button v-on:abc="f" @click="f1">123123</co-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { T1 } from "./components/Button/Button.vue";
export default defineComponent({
  methods: {
    f(e: T1) {
      console.log("f被触发", e);
    },
    f1(e: MouseEvent) {
      console.log(e);
    },
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
