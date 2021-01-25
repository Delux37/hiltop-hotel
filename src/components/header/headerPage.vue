<template>
    <carousel class="cover" @next="next" @prev="prev">
        <nav-bar class="header"></nav-bar>
        <carousel-slide v-for="(slides,index) in sliderContant"
        :index="index"
        :key="slides"
        :visibleSlide="visibleSlide"
        >
        <img :src="slides.picture.full_size"/>
        </carousel-slide>
        
        <sliderContent 
        class="test"
        
        ></sliderContent>
    </carousel>
</template>

<script>
import navBar from './nav-bar.vue'
import sliderContent from './slider-content.vue'
import axios from 'axios'
import carousel from './carousel.vue'
import carouselSlide from './carousel-slide.vue'

export default {
  components: { navBar, sliderContent, carousel, carouselSlide },
  data() {
      return{
          sliderContant: [],
          visibleSlide: 0,
      }
  },
  computed: {
      slidesLen(){
          return this.sliderContant.length
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
      }
  },
  mounted() {
  axios.get('https://www.hilltop.ge/api/slider/')
  .then((response) => {
    // handle success
    //sub_title
    //title
    this.sliderContant = response.data
    console.log(this.sliderContant);
  })
  }
}
</script>

<style scoped>
.cover img{
    width: 100%;
    height: 100%;
    opacity: 0.5;
}
.test{
    z-index: 10;
}
.header{
    padding-top: 20px;
    z-index: 20;
    position: absolute;
    width: 100%;
}
.cover{
    background-size: cover;
    background-position: center;
    height: 100vh;
    /* position: relative; */
    /* padding-top: 20px; */
    /* width: 100%; */
    /* height: 100%; */
    overflow: hidden;
    /* opacity: 0.5; */
    background-color: #5C5959;
    z-index: 0;
}
</style>