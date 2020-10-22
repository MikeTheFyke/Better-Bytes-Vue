<template>
    <div>
        <form @submit.prevent="addFood"> 
            <input type="text" v-model="name" name="name" placeholder="Add New Food..." class="foodInput"  autocomplete="off">
            <input type="submit" value="Submit" class="btn" >
        </form>
        <div class="container">
        <h1> Lastest Items </h1>
            <div class="posts-container">
                <div class="post" v-for="post in posts" v-bind:item="post" v-bind:key="post._id">
                    <p class="text">{{post.name}}</p>
                </div>
            </div>
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
            price: '$0.00',
            completed: false
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

</style>