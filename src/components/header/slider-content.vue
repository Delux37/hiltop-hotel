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
    top: 75%;
    margin-left: 50px;
    width: 35%;
    overflow: hidden;
}
h1{
    font-size: 50px;
    color: #fff;
    margin-bottom: 22px;
}
p {
    font-size: 30px;
    color: #fff;
}

</style>