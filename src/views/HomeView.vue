<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" @click="a++" />
    {{ a }}
  </div>
</template>

<script lang="ts" setup>
const a = ref(1);
</script>
