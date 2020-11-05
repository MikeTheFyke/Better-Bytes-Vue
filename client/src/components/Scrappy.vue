<template>
    <div>
    
    <div id="pupilsContainer">
        <div id="pupilsContainer2">
            <img :src="scrappyPupils" id="scrappyEyes">
        </div>
    </div>


    </div>
</template>

<script>

import scrappyPupils from "../assets/scrappy-head-pupils.png"

export default {
    name: "Scrappy",
    data(){
        return{
            scrappyPupils: scrappyPupils
        }
    }
    
}
</script>

<style scoped>

#pupilsContainer{
    position: absolute;
    top: 33%;
    width: 100%;
    text-align: center;
    padding-left: 60px;
}

#pupilsContainer2{
    width: 40px;
    margin: 0px auto;
}

#scrappyEyes{
    float: left;
    width: 200px;
    height: 200px;
}

</style>