<template>
    <div>
    
    <div id="pupilsContainer">
        <div id="pupilsContainer2">
            <img :src="scrappyPupils" id="scrappyEyes">
        </div>
    </div>

        <div id="cheeksContainer">
        <div id="cheeksContainer2">
            <img :src="scrappyCheeks" id="scrappyCheeks">
        </div>
    </div>

    </div>
</template>

<script>
import TweenMax  from 'greensock';
import scrappyPupils from "../assets/scrappy-head-pupils.png"
import scrappyCheeks from "../assets/scrappy-head-cheeks.png"

export default {
    name: "Scrappy",
    data(){
        return{
            scrappyPupils: scrappyPupils,
            scrappyCheeks: scrappyCheeks
        }
    },
    mounted: function(){
        var mouseX;
        var mouseY;

        onmousemove = function(e){
            mouseX = e.clientX;
            mouseY = e.clientY;
            console.log(mouseX)
            if ( mouseX >= window.innerWidth/2 + 20){
                TweenMax.to("#scrappyEyes", 0, { x: '5px' })
            }
            else if ( mouseX <= window.innerWidth/2 ){
                TweenMax.to("#scrappyEyes", 0, { x: '-5px' })
            } 
            else {
                TweenMax.to("#scrappyEyes", 0, { x: mouseX - 400 })
            }

            if ( mouseY < window.innerHeight/2 - 125 && mouseY > window.innerHeight/2 - 135 ) {
                TweenMax.to("#scrappyEyes", 0, { y: mouseY - 280 })
            } 
            else if ( mouseY <= window.innerHeight/2 - 135 ) {
                TweenMax.to("#scrappyEyes", 0, { y: "-17px" })
            }
            else if ( mouseY >= window.innerHeight/2 - 125 ) {
                TweenMax.to("#scrappyEyes", 0, { y: 0 })
            }
    }
    }
    
}
</script>

<style scoped>

#pupilsContainer{
    position: absolute;
    top: 20.5%;
    width: 100%;
    text-align: center;
    padding-left: 60px;
}

#pupilsContainer2{
    width: 240px;
    margin: 0px auto;
}

#scrappyEyes{
    float: left;
    width: 200px;
    height: 200px;
}

#cheeksContainer{
    position: absolute;
    top: 20.5%;
    width: 100%;
    text-align: center;
    padding-left: 60px;
}

#cheeksContainer2{
    width: 240px;
    margin: 0px auto;
}

#scrappyCheeks{
    float: left;
    width: 200px;
    height: 200px;
}
</style>