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
                    <li>Price: ${{ price }}</li>
                    <li>Person: {{ humanCapacity }}</li>
                </ul>
            </div>
            <div class="description"><p v-html="description"></p></div>
            <div @click="close" class="viev-gallery-button-container"><h2 class="view-gallery-button">View Gallery</h2></div>
        </div>
        <teleport to="body">
            <base-model v-if="showIt">
                <carousel @next="next" @prev="prev" v-if="showIt">
                    <carousel-slide
                    class="carousel"
                    v-for="(image,index) in images"
                    :key="image"
                    :index="index"
                    :visibleSlide="visibleSlide"
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
import carousel from '../header/carousel.vue'
import carouselSlide from '../header/carousel-slide.vue'
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
            visibleSlide: 0
        }
    },
      computed: {
      slidesLen(){
          return this.images.length
      }
  },
  methods: {
      next(){
          if(this.visibleSlide >= this.slidesLen - 1){
              this.visibleSlide=0;
          }else{
              this.visibleSlide++;
              console.log(this.slidesLen);
              console.log(this.visibleSlide);
          }
      },
      prev() {
          if(this.visibleSlide <= 0){
              this.visibleSlide=this.slidesLen - 1;
          }else{
              this.visibleSlide--;
              console.log(this.slidesLen);
              console.log(this.visibleSlide);
          }
      },
      close() {
        this.showIt = !this.showIt;
    }
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
    /* height: 100%; */
    /* height: fit-content; */
}
.content-box{
    /* width: 42%; */
    width: 50%;
    padding-right: 3%;
    /* -moz-box-shadow: 0px 3px 8px rgb(100,100,100);
    -webkit-box-shadow: 0px 3px 8px rgb(100,100,100);
    box-shadow: 0px 3px 8px rgb(100,100,100); */
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
     z-index: 5;
}
.left-div{
    width: 35%;
    float: left;
    height: 100%;
}
.img-div{
    /* height: 234px;//21
    width: 366px;//19 */
    /* height: 21%; */
    width: 19vw;
    margin-top: 71px;
    margin-left: 50px;
}
.img-div img{
    width: 100%;
}

.title{
    margin-top: 31px;
}
.title h1{
    color: #464646;
    /* font-size: 30px; */
    font-size: 1.8rem;
}
.amenities{
    padding-top: 4px;
    padding-bottom: 4px;
    margin: 32px 30px;
    padding-left: 6px;
    border-left: 1px solid #56D9D4;
}
.amenities ul{
    list-style: none;
    font-size: 22px;
    font-family: 'Larsseit';
}
.description p{
    /* font-size: 20px; */
    font-size: 1.2em;
    font-family: 'Larsseit';
}
.viev-gallery-button-container{
    margin-top: 30px;
    margin-bottom: 34px;
    width: fit-content;
}
.viev-gallery-button-container h2{
    font-size: 20px;
    color: #464646;
    font-family: 'Larsseit';
    opacity: 0.7;
    border-bottom: 1px solid #56d9d500;
}
.viev-gallery-button-container h2:hover{
    opacity: 1;
    border-bottom: 1px solid #56D9D4;
    cursor: pointer;
}
</style>