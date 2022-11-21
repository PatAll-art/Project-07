<template>
  <div id="app">
   
    <HomePage/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  align-items: center;
  color: #2c3e50;
  font-size: 12px;
  border-bottom: 2px;
  border-style: black;
}




</style>
