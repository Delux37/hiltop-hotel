<template>
    <div class="slider-text-box">
        <h1>{{title}}</h1>
        <p>{{subTitle}}</p>
    </div>
</template>

<script>
export default {
    props:['title', 'subTitle']
}
</script>

<style scoped>
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
    font-family: 'BigCaslonMedium';
    letter-spacing: 3px;
    word-spacing: 5px;
    font-size: 30px;
    color: #fff;
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

</style>