<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    background () {
      return require('@/assets/images/black.jpg')
    }
  }
}
</script>

<style>
#app {
  /* background-color: #2980b9; */
  display:table;
  align-items:center;
  justify-content:center;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
</style>
