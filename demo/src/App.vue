<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 0,
      msg: "Hello World~",
    };
  },
};
</script>
