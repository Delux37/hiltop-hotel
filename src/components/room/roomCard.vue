<template>
    <div class="content-box">
        <div class="left-div">
            <div class="img-div">
                <img :src="primaryImage.crop"/>
            </div>
        </div>
        <div class="content-div">
            <div class="title"><h1>{{ title }}</h1></div>
            <div class="amenities">
                <ul>
                    <li>Price: <strong>${{ price }}</strong></li>
                    <li>Person: <strong>{{ humanCapacity }}</strong></li>
                </ul>
            </div>
            <div class="description"><p v-html="description"></p></div>
            <div  @click="close" class="viev-gallery-button-container"><h2 class="view-gallery-button">View Gallery</h2></div>
        </div>
        <teleport to="body">
            <base-model v-if="showIt" @close="close">
                <carousel :type='type' :imagesLen="images.length" @close="close"> 
                    <carousel-slide
                    class="carousel"
                    v-for="(image,index) in images"
                    :key="image"
                    :index="index"
                    :type='type'
                    >
                    <img :src="image.image.full_size">
                    </carousel-slide>
                </carousel>
            </base-model>
        </teleport>
    </div>
</template>

<script>
import BaseModel from '../UI/BaseModel.vue'
import carousel from '../UI/carousel.vue'
import carouselSlide from '../UI/carousel-slide.vue'
export default {
    props: ['title', 'humanCapacity', 'price', 'primaryImage', 'description', 'images'],
    emits: ['clicked'],
    components: {
        BaseModel,
        carousel,
        carouselSlide
    },
    data() {
        return {
            showIt: false,
            type: 'room'
        }
    },
  methods: {
      close() {
        this.showIt = !this.showIt;
    },
  },
}
</script>

<style scoped>
.carousel{
    padding: 0;
    background-color: none;
    background: none;
}
.carousel img{
    width: 100%;
    height: 100%;
}
.content-box{
    height: 100%;
    padding-right: 3%;
}
.content-div{
    display: flex;
    flex-direction: column;
    width: 65%;
    float: left;
    padding-left: 14%;
    border-left: none;
    border-bottom: 1px solid rgb(214, 214, 214);
    border-right: 1px solid rgb(214, 214, 214);
    /* box-shadow: 0 1px 5px 0 #888888; */
    box-shadow: 1px 5px 5px rgba(116, 116, 116, 0.637);
     z-index: 5;
     position: relative;
}
.left-div{
    width: 35%;
    float: left;
    height: 100%;
}
.img-div{
    width: 19vw;
    margin-top: 71px;
    margin-left: 50px;
    position: relative;
    z-index: 15;
}
.img-div img{
    width: 100%;
}
.title{
    margin-top: 31px;
}
.title h1{
    font-family: 'BigCaslonMedium';
    color: #464646;
    font-size: 22px;
    line-height: 27px;
}
.amenities{
    padding-top: 4px;
    padding-bottom: 4px;
    margin: 32px 30px;
    padding-left: 16px;
    border-left: 1px solid #56D9D4;
}
.amenities ul{
    list-style: none;
    font-size: 22px;
    font-family: 'Larsseit';
    font-weight: 100;
    color: rgb(126, 126, 126);
}
strong{
    color: rgb(59, 59, 59);
}
.amenities ul li{
   margin-top: 5px;
   font-family: 'Larsseit';
}
.description{
    padding-right: 5px;
}
.description p{
    /* font-size: 20px; */
    height: 100%;
    font-size: 1.2em;
    font-family: 'LarsseitThinItalic';
}
.viev-gallery-button-container{
    margin-top: 16px;
    margin-bottom: 25px;
    width: fit-content;
}
.viev-gallery-button-container h2{
    font-size: 15px;
    line-height: 18px;
    color: #8a8a8a;
    font-family: 'LarsseitLight';
    opacity: 0.7;
    border-bottom: 1px solid #56d9d500;
}
.viev-gallery-button-container h2:hover{
    opacity: 1;
    border-bottom: 1px solid #56D9D4;
    cursor: pointer;
}
@media (max-width: 768px){
.content-box{
    /* border: 2px solid green; */
    display: flex;
    padding-left: 10px;
}
.left-div{
    /* border: 2px solid blue; */
    width: 50%;
    /* float: right; */
}
.img-div{
    /* width: 100%; */
    margin: 0;
    /* border: 2px solid green; */
    width: 100%;
    max-height: 100px;
    height: 100px;
}
.img-div img{
    width: 100%;
    /* height: 100%; */
}
.content-div{
    /* height: fit-content; */
    /*HEIGHT PROBLEMS */
    max-height: 210px;
    width: 50%;
    /* border: 2px solid yellow; */
    padding: 0;
}
.title{
    /* border: 2px solid blue; */
    margin: 0;
    /* text-align: center; */
}
.title h1{
    margin-top: 10px;
    margin-left: 20px;
    line-height: 17px;
    font-size: 14px;
}
.amenities{
    margin: 0;
    margin-lefT: 40px;
    margin-top: 10px;
    /* border: 2px solid green; */
}
.amenities li{
    line-height: 17px;
    font-size: 14px;
}
.description {
    /* border: 2px solid ORANGE; */
    position: relative;
    width: 170%;
    right: 70%;
    bottom: -10px;
    background-color: white;
    padding: 20px 15px 28px 15px;
    /* max-height: 135px; */
    box-shadow: 1px 5px 5px rgba(116, 116, 116, 0.637);
    /* height: 500px; */
}
.description p{
    line-height: 17px;
    font-size: 14px;
}
.viev-gallery-button-container{
    position: relative;
    bottom: 23%;
    left: 40%;
}
.viev-gallery-button-container h2{
    line-height: 16px;
    font-size: 13px;
}
}
</style>