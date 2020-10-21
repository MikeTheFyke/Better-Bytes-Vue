<template>
    <div>
        <div v-bind:key="food.id" v-for="food in foods">
            <!-- <h3> {{food.id}} {{ food.name }} {{ food.price }}</h3> -->
            <FoodItem v-bind:food="food" />
        </div>
    </div>
</template>

<script>

import FoodItem from "./FoodItem.vue";

export default {
    name: "Foods",
    components: {
        FoodItem
    },
    props: ["foods"]
}
</script>

<style scoped>

</style>