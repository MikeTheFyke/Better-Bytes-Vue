<template>
    <div>
        <form @submit.prevent="addFood" id="AddNewFood"> 
            <input type="text" v-model="name" name="name" placeholder="Add New Food..." class="foodInput"  autocomplete="off">
            <input type="text" v-model="quantity" name="quantity" placeholder="Add Food Quantity..." class="quantityInput"  autocomplete="off">
            <input type="submit" value="Add Food" class="btn" >
        </form>
        <div class="food-item" v-for="post in posts" v-bind:item="post" v-bind:key="post._id" >
            <p v-on:click="markComplete">
                Qty: {{post.quantity}} {{post.name}} 
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
            name: '',
            price: '$0.00',
            quantity: ''
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
        TweenMax.to("#AddNewFood", 0.50, { x: '-525px'});
        TweenMax.to("#AddNewFood", 0.50, { x: '-475px', delay: 0.50});
        TweenMax.to("#AddButton", 0.50, { x: '200px', delay: 0.50});
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
                    this.quantity = '';
                },
                async deleteFood(id) {
                    await PostService.deletePost(id);
                    this.posts = await PostService.getPosts();
                }
    }
}

</script>

<style scoped>

#AddButton{
    position: absolute;
    top: 7px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    color: white;
    background-color: #50e03d;
    border-color: transparent;
    font-size: 40px;
    outline: none;
}

#AddNewFood{
    position: absolute;
    top: 17px;
    right: -450px;
}

form{
    display: flex;
}

.foodInput{
    flex: 10;
    padding: 5px;
    outline: none;
    color: #50e03d;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-style: solid;
}

.btn{
    flex: 2;
    width: 225px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-color: white;
    border-style: solid;
    background-color: #50e03d;
    color: white;
    outline: none;
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