<!-- <template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Register message="Registered" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Register from './components/Register.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Register
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
<template>
  <div id="app">
    <navbar></navbar>
   <router-view></router-view>
    
  </div>
</template>

<script>

import NavBar from "./components/Navigation.vue";


export default {
  name: 'App',
  components:{
    'navbar':NavBar
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

