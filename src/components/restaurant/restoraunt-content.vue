<template>
    <div class="container" :class="{chessPrincipleContainer: index % 2 == 1}">
        <div class="left-container" >
            <div class="content-container" :class="{chessPrincipleContent: index % 2 == 1}">
                <div class="header-text" :class="{geoTitle: language !== 'en'}" >
                    <h1> {{ title }}</h1>
                </div>
                <div class="paragraph-text" :class="{geoDescription: language !== 'en'}">
                    <p v-html="description">
                    </p>
                </div>
            </div>
         </div>
        <carousel class="image_container" :title="title" :type="type" :length="images.length">   
            <carousel-slide v-for="(slides,index) in images"
            :index="index"
            :key="slides"
            :visibleSlide="visibleSlide"
            :type="title"
            class="slides"
            >
            <img :src="slides.image.full_size"/>
            </carousel-slide>
        </carousel>
    </div>
</template>

<script>
import carousel from '../UI/carousel.vue'
import carouselSlide from '../UI/carousel-slide.vue'
export default {
    props: ['title', 'description', 'images', 'index'],
    components: {carousel, carouselSlide},
    data() {
        return {
            type: 'restoraunt',
            visibleSlide: 0,
        }
    },
    computed: {
    language() {
        return this.$store.getters.getGlobalLanguage;
    },
  }
}
</script>

<style scoped>
.slides{
    height: 100%;
}
.container{
    margin-top: 150px;
    width: 100%;
    display: flex;
    margin-bottom: 1rem;
    height: 900px;
}
.image_container {
width: 78%;
position: relative;
z-index: 0;
/* z-index: 10; */
/* border: 2px solid green; */
width: 100%;
}

.image_container img {
/* display: block; */
width: 100%;
height: 100%;

}
.content-container{
background-color: white;
border-left: 1px solid #56D9D4;;
width: 35%;
overflow: hidden;
position: absolute;
left: 3%;
max-height: 90%;
overflow: hidden;
box-shadow: 1px 1px 5px rgba(116, 116, 116, 0.637);
z-index: 2;
}

.left-container {
width: 22%;
display: flex;
align-items: center;
}

.paragraph-text{
    width: 88%;
    margin: 0 auto;
    line-height: 27px;
    font-size: 20px;
    color: #464646;
    font-family: 'LarsseitThinItalic';
    margin-bottom: 60px;
}
.header-text{
    width: 100%;
    margin: 50px 20px 60px 30px;
    /* display: flex;
    justify-content: center; */
}
.header-text h1{
    font-family: 'BigCaslonMedium';
    font-size: 30px;
    color: #464646;
}
.geoTitle h1{
    font-family: 'Rioni';
    margin-right: 30px;
    line-height: 57px;
    font-size: 50px;
}
.geoDescription p{
    font-family: 'Nateli';
    font-size: 20px;
}
.chessPrincipleContainer{
    flex-direction: row-reverse;
}
.chessPrincipleContent{
    position: absolute;
    border-left: none;
    left: 61%;
    border-right: 1px solid #56D9D4;;
}
@media (max-width: 1660px){
.chessPrincipleContent{
    left: 60.5%;
}
}

@media (max-width: 1366px){

.container{
    height: 700px;
}
.header-text{
 margin: 20px 0 20px 30px;
}

.header-text h1{
    font-size: 30px;
}
.paragraph-text{
    font-size: 16px;
}
}

@media(max-width: 1280px){
    .chessPrincipleContent{
    left: 63%;
}
}
@media (max-width: 768px){
.container{
    display: flex;
    padding: 0;
    flex-direction: column-reverse;
}
.left-container{
    width: 100%;
    padding: 0;
    height: 50%;
}
.image_container{
    /* border: 2px solid red; */
    width: 100%;
    /* height: 100%; */
}
.content-container{
    position: static;
    overflow: hidden;
    margin: 0;
    margin-top: -150px;
    margin-left: 30px;
    margin-right: 10px;
    width: 100%;

}
.header-text h1{
    line-height: 24px;
    font-size: 20px;
}
.paragraph-text p {
    line-height: 17px;
    font-size: 14px;
}
}
</style>