<template>
    <div>
        <div v-for="food in foods">
            <h3>{{ food.name }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "Foods",
    props: ["foods"]
}
</script>

<style scoped>

</style>