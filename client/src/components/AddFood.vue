<template>
    <div>
        <button v-on:click="dropDown()">DropDown</button>
        <form @submit.prevent="addFood" id="AddNewFood"> 
            <input type="text" v-model="name" name="name" placeholder="Add New Food..." class="foodInput"  autocomplete="off">
            <input type="submit" value="Submit" class="btn" >
        </form>
                <div class="food-item" v-for="post in posts" v-bind:item="post" v-bind:key="post._id" >
                    <p v-on:dbclick="markComplete(post._id)">
                        {{post.name}} {{post.price}}
                        <button v-on:click="deleteFood(post._id)" class="del">X</button>
                    </p>
                </div>
    </div>    
</template>

<script>
import PostService from '../PostService'

export default {
    name: "AddFood",
    data(){
        return{
            posts: [],
            error: '',
            name: '',
            price: '$0.00'
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
    methods: {
            dropDown(){
                TweenMax.to("#AddNewFood", 1, { opacity: 1, delay: 2})
            },
                async markComplete() {
                // v-bind:class="is-complete"
                },
                async addFood() {
                    await PostService.insertPost(this.name);
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
                },
                async deleteFood(id) {
                    await PostService.deletePost(id);
                    this.posts = await PostService.getPosts();
                }
    }
}

</script>

<style scoped>

form{
    display: flex;
}

.foodInput{
    flex: 10;
    padding: 5px;
    outline: none;
}

.btn{
    flex: 2;
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