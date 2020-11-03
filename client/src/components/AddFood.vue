<template>
    <div>
        <div id="sphereOne"></div>
        <div id="sphereTwo"></div>
        <form @submit.prevent="addFood" id="AddNewFood"> 
            <input type="text" v-model="name" name="name" placeholder="Add New Food..." class="foodInput"  autocomplete="off">
            <input type="submit" value="Add Food" class="btn" >
        </form>
        <div class="food-item" v-for="post in posts" v-bind:item="post" v-bind:key="post._id" >
            <p v-on:click="markComplete">
                {{post.name}} 
                <button v-on:click="deleteFood(post._id)" class="del">X</button>
            </p>
        </div>
    </div>    
</template>

<script>
import PostService from '../PostService'
import TweenMax  from 'greensock';

export default {
    name: "AddFood",
    data(){
        return{
            posts: [],
            error: '',
            name: ''
            // ,
            // price: '$0.00',
            // quantity: ''
        }
    },
    // created ia a life cycle method
        async created () {
        try {
            this.posts = await PostService.getPosts();
        } catch(err){
            this.error = err.message;
        }
    },
    mounted: function() {
        TweenMax.to("#sphereOne", 1, { scale: 30})
        TweenMax.to("#sphereTwo", 1, { scale: 15})
        TweenMax.to("#AddNewFood", 0.50, { opacity: 1, x: window.innerWidth/2-165, delay: 1});
    },
    methods: {
                markComplete() {
                
                },
                async addFood() {
                    await PostService.insertPost(this.name, this.quantity);
                    this.posts = await PostService.getPosts();
                    // constructing newly added food.
                    // const newFood = {
                    //     // id: v4(),
                    //     name: this.name,
                    //     price: "$0.00",
                    //     completed: false
                    // }
                    // send up to parent
                    // this.$emit('add-food', newFood);
                    // clears form
                    this.name = '';
                    // this.quantity = '';
                },
                async deleteFood(id) {
                    await PostService.deletePost(id);
                    this.posts = await PostService.getPosts();
                }
    }
}

</script>

<style scoped>

#sphereOne{
    position: absolute;
    top: 50%;
    left: 40%;
    background-color: #2f693b;
    width: 10px;
    height: 10px;
    border-radius: 5px;
}

#sphereTwo{
    position: absolute;
    top: 50%;
    left: 70%;
    background-color: #2f693b;
    width: 10px;
    height: 10px;
    border-radius: 5px;
}

#AddNewFood{
    position: absolute;
    top: 50%;
    left: 0px;
    opacity: 0;
}

form{
    display: flex;
}

.foodInput{
    flex: 10;
    padding: 5px;
    outline: none;
    color: #4fa861;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-style: solid;
    border-color: white;
    width: 100px;
}

.foodInput::placeholder{
    color: #4fa861;
}

.btn{
    flex: 2;
    width: 230px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-color: white;
    border-style: solid;
    background-color: #4fa861;
    color: white;
    outline: none;
    padding: 5px;
}

.food-item{
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}

.is-complete{
    text-decoration: line-through;
}

.del{
    background: #ff0000;
    color: #fff;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
    outline: none;
    border-style: solid;
    border-color: #ff0000;
}

</style>