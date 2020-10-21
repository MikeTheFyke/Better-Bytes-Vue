<template>
    <div>
        <p> Food Item </p>
    </div>
</template>

<script>
export default {
    name: "FoodItem"    
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