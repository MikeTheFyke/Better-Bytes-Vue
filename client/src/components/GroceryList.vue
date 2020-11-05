<template>
    <div>
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
                <button id="groceryButton" v-on:click="viewGrocery()"><img :src="glImage" id="groceryButtonImage"></button>
            </div>
    </div>
</template>

<script>
import TweenMax  from 'greensock';
import glImage from "../assets/groceryList-Normal.png"
import PostService from '../PostService'
export default {
    name: "GroceryList",
    data(){
        return{
            glImage: glImage
        }
    },
            async created () {
        try {
            this.posts = await PostService.getPosts();
        } catch(err){
            this.error = err.message;
        }
    },
    mounted: function(){
        TweenMax.to("#groceryButtonContainer", 0.50, { opacity: 1, delay: 3});
        TweenMax.to("#groceryButton", 0.50, { scale: 2, delay: 3});
        TweenMax.to("#groceryButton", 0.50, { scale: 1, delay: 3.5});

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
    opacity: 0;
}

#groceryButton{
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border-color: white;
    border-style: solid;
    border-width: 3px;
    background-color:  #ed6f15;
    text-align: center;
    outline: none;
}

#groceryButtonImage{
    position: absolute;
    top:  2px;
    left: 2px;
    width: 40px;
    height: 40px;
}
</style>