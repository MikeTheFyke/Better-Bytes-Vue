<template>
  <div id="app">
    <Header />
    <AddFood />
    <!-- new foods component -->
    <!-- used v-bind to pass foods data up to Foods component as a prop. -->
    <!-- <Foods v-bind:foods="foods" v-on:del-food="deleteFood" />  -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import neew foods component.
// import Foods from './components/Foods'
import AddFood from './components/AddFood'
import Header from './components/layout/Header'
import TweenMax  from 'greensock';
// import PostService from './PostService.js'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Header,
    // Foods,
    AddFood
  },
    // Added data method
  data() {
    return {
      // created a object of arrays for food items
      foods: [
        // {
        //   id: 1,
        //   name: "Tomatoes",
        //   price: "$2.39",
        //   completed: false
        // },
        //         {
        //   id: 2,
        //   name: "Onions",
        //   price: "$1.39",
        //   completed: false
        // },
        //         {
        //   id: 3,
        //   name: "Steak",
        //   price: "$10.98",
        //   completed: false
        // }
      ],
      // error: '',
      // name: '',
      // price: '',
      // completed: false
    }
  },
  // async created () {
  //   try {
  //     this.posts = await PostService.getPosts();
  //   } catch(err){
  //     this.error = err.message;
  //   }
  // },
  methods: {
    // deleteFood(id){
    //   // filter and keep any id that doesnt match id that is passed to this method.
    //   this.foods = this.foods.filter(food => food.id !== id);
    // },
    // addFood(newFood){
    //   // await PostService.insertPost(this.name);
    //   // this.posts = await PostService.getPosts();
    //   // using a spread operator we will add food to list of foods
    //   this.foods = [...this.foods, newFood];
    // }
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
