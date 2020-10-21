<template>
  <div id="app">
    <!-- new foods component -->
    <!-- used v-bind to pass foods data up to Foods component as a prop. -->
    <Foods v-bind:foods="foods" /> 
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import neew foods component.
import Foods from './components/Foods.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Foods
  },
    // Added data method
  data() {
    return {
      // created a object of arrays for food items
      foods: [
        {
          id: 1,
          name: "Tomatoes",
          price: "$2.39",
          completed: true
        },
                {
          id: 2,
          name: "Onions",
          price: "$1.39",
          completed: false
        },
                {
          id: 3,
          name: "Steak",
          price: "$10.98",
          completed: false
        }
      ]
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family:Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
