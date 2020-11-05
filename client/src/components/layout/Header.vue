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

        document.getElementById('pageTitle').addEventListener('mouseover', function(){
            TweenMax.to('#pageTitle', 1.5, { scale: 2} );
        });

        document.getElementById('pageTitle').addEventListener('mouseout', function(){
            TweenMax.to('#pageTitle', 1.5, { scale: 1} );
        });
    }
}
</script>

<style scoped>

.header{
    position: absolute;
    top: -100px;
    background: transparent;
    color: #4fa861;;
    text-align: center;
    width: 100%;
}

h1{
    font-family: "BigBottom";
    font-size: 40px;

}

.header a{
    color: #fff;
    padding-right: 5px;
}

</style>