<template>
    <div>
        <form @submit="addFood"> 
            <input type="text" name="title" placeholder="Add Food..." class="foodInput">
            <input type="submit" value="Submit" class="btn" >
        </form>
    </div>    
</template>

<script>
export default {
    name: "AddFood"
}
</script>

<style scoped>

form{
    display: flex;
}

.foodInput{
    flex: 10;
    padding: 5px;
}

.btn{
    flex: 2;
}

</style>