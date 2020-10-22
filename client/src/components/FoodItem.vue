<template>
    <!-- add v-bind:class is complete and then conditional food.completed to add class style if completed. -->
    <div class="food-item" v-bind:class="{'is-complete':food.completed}">
        <p> 
            <input type="checkbox" v-on:change="markComplete">
            {{ food.name }} {{ food.price }}
            <button @click="$emit('del-food', food.id)" class="del">X</button> 
        </p>
    </div>
</template>

<script>
export default {
    name: "FoodItem",
    props: ["food"],
    methods: {
        // Added markComplete method for checkbox element.
        markComplete() {
            this.food.completed = !this.food.completed;
        }
    }    
}
</script>

<style scoped>

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
}

</style>