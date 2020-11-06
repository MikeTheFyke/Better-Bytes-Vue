<template>
    <div>

    <div id="handContainer">
        <div id="handContainer2">
            <img :src="scrappyRightHand" id="scrappyRight">
            <img :src="scrappyLeftHand" id="scrappyLeft">
        </div>
    </div>

    <div id="sphereContainer">
        <div id="sphereContainer2">
        <img :src="acornLeft" id="sphereOne">
        <img :src="acornRight" id="sphereTwo">
        </div>
    </div>

    <div id="headContainer">
        <div id="headContainer2">
            <img :src="scrappyHead" id="scrappyHead">
        </div>
    </div>

    <div id="noEyesContainer">
        <div id="noEyesContainer2">
            <img :src="scrappyNoEyes" id="scrappyNoEyes">
        </div>
    </div>

    
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
import scrappyHead from "../assets/scrappy-head.png"
import scrappyNoEyes from "../assets/scrappy-head-noeyes.png"
import scrappyLeftHand from "../assets/scrappy-leftHand.png"
import scrappyRightHand from "../assets/scrappy-rightHand.png"
import acornLeft from "../assets/acorn-left01.png"
import acornRight from "../assets/acorn-right01.png"

export default {
    name: "Scrappy",
    data(){
        return{
            scrappyPupils: scrappyPupils,
            scrappyCheeks: scrappyCheeks,
            scrappyHead : scrappyHead,
            scrappyNoEyes : scrappyNoEyes,
            scrappyLeftHand : scrappyLeftHand,
            scrappyRightHand : scrappyRightHand,
            acornLeft: acornLeft,
            acornRight: acornRight,
        }
    },
    mounted: function(){
        var mouseX;
        var mouseY;

        TweenMax.to("#headContainer", 0, { opacity: 0, y:'-300vh'})
        TweenMax.to("#scrappyHead", 1, { scale: 100, delay: 1.75})
        TweenMax.to("#headContainer", 1, { opacity: 1, y:'350px', delay: 1.75})
        TweenMax.to("#headContainer", 0.5, { y:0, delay: 2.5})
        TweenMax.to("#headContainer", 0, { opacity: 0, delay: 3})

        TweenMax.to("#noEyesContainer", 0, { opacity: 0, y:'-300vh'})
        TweenMax.to("#scrappyNoEyes", 1, { scale: 100, delay: 1.75})
        TweenMax.to("#noEyesContainer", 1, { opacity: 0, y:'350px', delay: 1.75})
        TweenMax.to("#noEyesContainer", 0.5, { y:0, delay: 2.5})
        TweenMax.to("#noEyesContainer", 0, { opacity: 1, delay: 3})

        TweenMax.to("#sphereContainer", 0.25, { opacity: 1, y: '-300h'})
        TweenMax.to("#sphereOne", 1, { opacity: 1, scale: 1, delay: 1.75})
        TweenMax.to("#sphereTwo", 1, { opacity: 1, scale: 1, delay: 1.75})
        TweenMax.to("#sphereContainer", 1, { opacity: 1, y: 0, delay: 2})

        TweenMax.to("#sphereOne", 1, { opacity: 1, scale: 15, rotation:  10, delay: 2.5})
        TweenMax.to("#sphereTwo", 1, { opacity: 1, scale: 10, rotation: -10, delay: 2.5})
        TweenMax.to("#sphereOne", 1, { rotation: -10, delay: 3.5})
        TweenMax.to("#sphereTwo", 1, { rotation:  10, delay: 3.5})

        TweenMax.to("#scrappyLeft",  1, { y: '50px', delay: 2.5 })
        TweenMax.to("#scrappyRight", 1, { y: '50px', delay: 2.5 })

        TweenMax.to("#scrappyLeft",  1, { opacity: 1, y: '20px', scale: 2, rotation: 10, delay: 3.5 })
        TweenMax.to("#scrappyRight", 1, { opacity: 1, y: 0, x:'20px', scale: 2, rotation: -10, delay: 3.5 })

        TweenMax.to("#scrappyCheeks", 0, {opacity: 1, delay: 3})
        TweenMax.to("#scrappyEyes", 0, {opacity: 1, delay: 3})

        onmousemove = function(e){
            mouseX = e.clientX;
            mouseY = e.clientY;
            console.log(mouseX)
            if ( mouseX >= window.innerWidth/2 + 19){
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
                TweenMax.to("#scrappyEyes", 0, { y: "-16px" })
            }
            else if ( mouseY >= window.innerHeight/2 - 125 ) {
                TweenMax.to("#scrappyEyes", 0, { y: 0 })
            }
    }
    }
    
}
</script>

<style scoped>

#headContainer{
    position: absolute;
    top: 33%;
    width: 100%;
    text-align: center;
    padding-left: 60px;
}

#headContainer2{
    width: 40px;
    margin: 0px auto;
}

#scrappyHead{
    float: left;
    width: 2px;
    height: 2px;
}

#noEyesContainer{
    position: absolute;
    top: 33%;
    width: 100%;
    text-align: center;
    padding-left: 60px;
}

#noEyesContainer2{
    width: 40px;
    margin: 0px auto;
}

#scrappyNoEyes{
    float: left;
    width: 2px;
    height: 2px;
}

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
    opacity: 0;
}

#cheeksContainer{
    position: absolute;
    top: 20.5%;
    width: 100%;
    text-align: center;
    padding-left: 60px;
}

#cheeksContainer2{
    width: 255px;
    margin: 0px auto;
}

#scrappyCheeks{
    float: left;
    width: 220px;
    height: 200px;
    opacity: 0;
}

#sphereContainer{
    position: absolute;
    top: 48%;
    width: 100%;
    text-align: center;
    padding-left: 40px;
}

#sphereContainer2{
    width: 200px;
    margin: 0px auto;
}

#sphereOne{
    float: left;
    width: 20px;
    height: 20px;
    opacity: 0;
}

#sphereTwo{
    float: right;
    width: 20px;
    height: 20px;
    opacity: 0;
}

#handContainer{
    position: absolute;
    top: 38%;
    width: 100%;
}

#handContainer2{
    width: 350px;
    margin: 0px auto;
}

#scrappyRight{
    float: left;
    width: 50px;
    height: 50px;
    opacity: 0; 
}

#scrappyLeft{
    float: right;
    width: 50px;
    height: 50px;
    opacity: 0;
}
</style>