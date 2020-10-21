<template>
    <div>
        <form @submit.prevent="addFood"> 
            <input type="text" v-model="name" name="name" placeholder="Add Food..." class="foodInput"  autocomplete="off">
            <input type="submit" value="Submit" class="btn" >
        </form>
    </div>    
</template>

<script>
import { v4 } from 'uuid';
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
                id: v4(),
                name: this.name,
                price: "$0.00",
                completed: false
            }
            // send up to parent
            this.$emit('add-food', newFood);

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