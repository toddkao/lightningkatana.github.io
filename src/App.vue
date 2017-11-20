<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from '@/modules/navbar'
export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>

<style>
#app {
  background-color: #2980b9;
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
