<template>
    <div>
        <form @submit="addFood"> 
            <input type="text" name="title" placeholder="Add Food..." class="foodInput">
            <input type="submit" value="Submit" class="btn" >
        </form>
    </div>    
</template>

<script>
import uuid from 'uuid';
export default {
    name: "AddFood",
    data(){
        return{
            name: ''
        }
    },
    methods: {
        addFood() {
            // constructing newly added food.
            const newFood = {
                id: uuid.v4(),
                name: this.name,
                completed: false
            }
            // send up to parent
            this.$emit('add-food', newFood);
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
}

.btn{
    flex: 2;
}

</style>