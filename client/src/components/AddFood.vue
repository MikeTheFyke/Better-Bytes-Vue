<template>
    <div>
        <form @submit.prevent="addFood"> 
            <input type="text" v-model="name" name="name" placeholder="Add New Food..." class="foodInput"  autocomplete="off">
            <input type="submit" value="Submit" class="btn" >
        </form>
    </div>    
</template>

<script>
import PostService from '../PostService'

export default {
    name: "AddFood",
    data(){
        return{
            posts: [],
            name: '',
            price: '$0.00',
            completed: false
        }
    },
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
            const newFood = {
                // id: v4(),
                name: this.name,
                price: "$0.00",
                completed: false
            }
            // send up to parent
            this.$emit('add-food', newFood);
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