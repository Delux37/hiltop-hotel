<template>
    <div>
        <div class="mobile-header" v-if="!isMobileNavBarShown">
            <img @click="toggleMobileNav" src="../../assets/nav.png"/>
            <h1>Hiltop Hotel</h1>
            <img src="../../assets/whatsapp-white.svg"/>
        </div>
        <nav-bar id="test" isActive="true"></nav-bar>
        <nav-bar class="header"></nav-bar>
        <carousel class="cover" :length="sliderContant.length">   
            <carousel-slide  class="slider" v-for="(slides,index) in sliderContant"
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
    },
    isMobileNavBarShown(){
            return this.$store.getters.isMobileNavBarShown
        }
  },
   methods: {
        toggleMobileNav(){
            this.$store.dispatch('toggleMobileNavBar')
        }
    },
}
</script>

<style scoped>

.slider{
    /* height: 100%; */
}

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
.mobile-header{
    width: 100vw;
    /* height: 30px; */
    position: absolute;
    z-index: 101;
    display: flex;
    padding: 7px 24px;
    justify-content: space-between;
    display: none;
}
.mobile-header h1{
    line-height: 24px;
    font-size: 20px;
    color: white;
}
/*MEDIA QUERIES */
@media (max-width: 768px){
.header{
    padding-top: 0;
}
.mobile-header{
    display: flex;
}
.cover{
    background-size: cover;
    background-position: initial;
    height: 100vh;
}
.cover img{
    width: 100%;
    /* height: 100%; */
    opacity: 0.5;
}
.slider{
    /* background-size: cover;
    background-position: cover; */
    height: 100%;
}
#test{
    display: none;
}
}
</style>