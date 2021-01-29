<template>
    <div>
    <nav-bar id="test" isActive="true"></nav-bar>
    <nav-bar class="header"></nav-bar>
    <carousel class="cover" @next="next" @prev="prev" :length="sliderContant.length">   
        <carousel-slide v-for="(slides,index) in sliderContant"
        :index="index"
        :key="slides"
        :type="type"
        >
        <img :src="slides.picture.full_size"/>
        <sliderContent 
        :title="slides.title"
        :subTitle="slides.sub_title"
        ></sliderContent>
        </carousel-slide>
    </carousel>
    </div>
</template>

<script>
import navBar from '../UI/nav-bar.vue'
import sliderContent from './slider-content.vue'
import carousel from '../UI/carousel.vue'
import carouselSlide from '../UI/carousel-slide.vue'
export default {
  components: { navBar, sliderContent, carousel, carouselSlide },
  data() {
      return{
          type: 'header',
      }
  },
    mounted() {
    this.$store.dispatch('headerSetion');
  },
  computed: {
    sliderContant() {
        return this.$store.getters.sliderContant
    }
  },
}
</script>

<style scoped>
.cover img{
    width: 100%;
    height: 100%;
    opacity: 0.5;
}
.header{
    padding-top: 20px;
    z-index: 100;
    position: absolute;
    width: 100%;
}
#test{
    position: fixed;
    width: 100%;
    padding-top: 20px;
    opacity: 3;
    z-index: 98;
    background-color: white;
    border-bottom: 1px solid #56D9D4;
}

.cover{
    background-size: cover;
    background-position: center;
    height: 100vh;
    overflow: hidden;
    position: relative;
    background-color: #5C5959;
    z-index: 99;
}

</style>