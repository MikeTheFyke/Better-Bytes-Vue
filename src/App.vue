<template>
  <div id="app">
    {{ foods }}
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
    // Added data method
  data() {
    return {
      // created a object of arrays for food items
      foods: [
        {
          id: 1,
          title: "Tomatoes",
          completed: false
        },
                {
          id: 2,
          title: "Onions",
          completed: false
        },
                {
          id: 3,
          title: "Steak",
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
