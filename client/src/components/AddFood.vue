<template>
    <div>
        <div id="sphereContainer">
            <div id="sphereContainer2">
            <div id="sphereOne"></div>
            <div id="sphereTwo"></div>
            </div>
        </div>

        <div id="addContainer">
            <div id="addContainer2">
                <form @submit.prevent="addFood" id="AddNewFood"> 
                    <input type="text" v-model="name" name="name" placeholder="Add New Food..." class="foodInput"  autocomplete="off">
                    <input type="submit" value="Add Food" class="btn" >
                </form>
            </div>
        </div>

        <div id="groceryListContainer">
            <div id="groceryList">
                <h1 id="goceryListTitle">Grocery List</h1>
                <button id="closeGrocery" v-on:click="closeGrocery()">X</button>
                <div class="food-item" v-for="post in posts" v-bind:item="post" v-bind:key="post._id" >
                    <p>
                        {{post.name}} 
                        <button v-on:click="deleteFood(post._id)" class="del">X</button>
                    </p>
                </div>
            </div>
        </div>

        <div id="groceryButtonContainer">
            <button id="groceryButton" v-on:click="viewGrocery()"></button>
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
        TweenMax.to("#sphereOne", 1, { opacity: 1, scale: 30, delay: 1.75})
        TweenMax.to("#sphereTwo", 1, { opacity: 1, scale: 15, delay: 1.75})
        TweenMax.to("#AddNewFood", 0.50, { x:'-200vw'});
        TweenMax.to("#AddNewFood", 0.50, { opacity: 1, x:0, delay: 3});

        document.getElementById('groceryButton').addEventListener('mouseover', function(){
            TweenMax.to('#groceryButton', 1.5, { backgroundColor: "white", borderColor: "#ed6f15", scale: 1.5, ease: "Elastic.easeOut" } );
        });

        document.getElementById('groceryButton').addEventListener('mouseout', function(){
            TweenMax.to('#groceryButton', 1.5, { backgroundColor: "#ed6f15", borderColor: "white", scale: 1, ease: "Elastic.easeOut" } );
        });

        document.getElementById('closeGrocery').addEventListener('mouseover', function(){
            TweenMax.to('#closeGrocery', 1.5, { backgroundColor: "#4fa861", borderColor: "white", opacity: 1 } );
        });

        document.getElementById('closeGrocery').addEventListener('mouseout', function(){
            TweenMax.to('#closeGrocery', 1.5, { backgroundColor: "#4fa861", borderColor: "white", opacity: 0.25 } );
        });

    },
    methods: {
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
                },
                viewGrocery(){
                    TweenMax.to('#groceryListContainer', 0.5, { scaleY: 1, scaleX: 1, opacity: 1, zIndex: 4})
                },
                closeGrocery(){
                    TweenMax.to('#groceryListContainer', 0.5, { scaleY: 0, scaleX: 0, opacity: 0, zIndex: 0})
                }
    }
}

</script>

<style scoped>

#sphereContainer{
    position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    padding-left: 40px;
}

#sphereContainer2{
    width: 200px;
    margin: 0px auto;
}

#sphereOne{
    float: left;
    background-color: #2f693b;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    opacity: 0;
}

#sphereTwo{
    float: right;
    background-color: #2f693b;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    opacity: 0;
}

#addContainer{
    position: absolute;
    top: 49%;
    width: 100%;
    text-align: center;
}

#addContainer2{
    width:500px;
    margin: 0px auto;
}

#AddNewFood{
    position: absolute;
    top: 50%;
    margin: 0px 85px;
    opacity: 0;
}

form{
    display: flex;
    width: 300px;
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

#groceryListContainer{
    position: absolute;
    top: 15%;
    width: 100%;
    opacity: 0;
    transform: scaleY(0);
    transform: scaleX(0);
    transform-origin: top;
}

#groceryList{
    width: 400px;
    margin: 0px auto;
    background-color: #2f693b;
    border-color: white;
    border-style: solid;
    border-radius: 15px;
    border-width: 4px;
}

#goceryListTitle{
    color: white;
    font-family: "BigBottom";
    font-size: 22px;
    width: 200px;
    margin: 0px auto;
}

#closeGrocery{
    position:relative;
    top: -26px;
    right: -350px;
    width: 40px;
    height: 40px;
    color: white;
    font-size: 30px;
    border-radius: 20px;
    border-style: solid;
    background-color: #4fa861;
    border-color: white;
    border-width: 2px;
    opacity: 0.25;
    outline: none;
}

.food-item{
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}

.food-item:nth-child(even){
    background-color: #c5c9c6;
}

.is-complete{
    text-decoration: line-through;
}

.del{
    background: white;
    color: #ed6f15;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
    outline: none;
    border-style: solid;
    border-color: #ed6f15;
}

#groceryButtonContainer{
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: transparent;
    width: 50px;
    height: 50px;
    text-align: center;
    vertical-align: auto;
}

#groceryButton{
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border-color: white;
    border-style: solid;
    border-width: 3px;
    background-color:  #ed6f15;
    outline: none;
}

</style>