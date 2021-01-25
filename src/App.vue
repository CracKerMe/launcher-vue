<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    console.log('\n %c Thank you for your visit. waiting for your useing experience reply \n', 'color:#ffffff;background:linear-gradient(90deg,#35eee3 0,#21cec0 100%);padding:15px 0;border-radius:5px;')
  }
}
</script>

<style>
@import './assets/css/variables.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
