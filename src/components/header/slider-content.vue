<template>
    <div class="slider-text-box">
        <h1 :class="{geoTitle: language !== 'en'}">{{title}}</h1>
        <p :class="{geoSubtitle: language !== 'en'}">{{subTitle}}</p>
    </div>
</template>

<script>
export default {
    props:['title', 'subTitle', 'language']
}
</script>

<style scoped>
.geoTitle{
    font-family: 'Rioni';
}
.geoSubtitle{
    font-family: "Rioni"
}
.slider-text-box{
    position: absolute;
    /* top: 75%; */
    bottom: 5%;
    /* margin-left: 50px; */
    margin: 50px;
    /* width: 35%; */
    max-width: 600px;
    overflow: hidden;
}
h1{
    font-family: 'BigCaslonMedium';
    letter-spacing: 3px;
    font-size: 50px;
    color: #fff;
    margin-bottom: 22px;
}
p {
    font-family: 'BigCaslon';
    letter-spacing: 3px;
    word-spacing: 5px;
    font-size: 30px;
    color: #fff;
}
@media(max-width: 1440px){
    h1{
        font-size: 30px;
    }
    p{
        font-size: 20px;
    }
}
@media (max-width: 1366px){
 h1{
     font-size: 30px;
 }
 p{
     font-size: 15px;
     word-spacing: 2px;
     letter-spacing: 2px;
 }
@media (max-width: 1280px)
{
    h1{
        font-size: 40px;
    }
    p{
        font-size: 20px;
    }
}


 @media (max-width: 768px){
     h1{
         font-size: 20px;
         line-height: 24px;
     }
     p{
        font-size: 16px;
        line-height: 20px
    }
    .slider-text-box{
    position: absolute;
    bottom: 5%;
    top: 40%;
    left: -5%;
    height: fit-content;
    /* margin-left:10px; */
    /* margin-right: 20%; */
    max-width: 300px;
    overflow: hidden;
    padding-right: 10px;
}
}

}



</style>