<template>
    <header class="header">
        <h1 id="pageTitle"> Better Bytes </h1>
    </header>
</template>

<script>
import TweenMax  from 'greensock';

export default {
    name: "Header",
    data(){
        return{

        }
    },
    mounted: function(){
        TweenMax.to("#pageTitle", 1, { y: 100, delay: 1.5, ease: "Bounce.easeOut"})
    }
}
</script>

<style scoped>

.header{
    position: absolute;
    top: -100px;
    background: transparent;
    color: #fff;
    text-align: center;
    width: 100%;
}

h1{
    font-family: "BigBottom";

}

.header a{
    color: #fff;
    padding-right: 5px;
}

</style>