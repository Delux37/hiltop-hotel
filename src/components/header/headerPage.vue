<template>
    <div>
        <div class="mobile-header" v-if="!isMobileNavBarShown">
            <img @click="toggleMobileNav" src="../../assets/nav.png"/>
            <h1>Hiltop Hotel</h1>
            <img src="../../assets/whatsapp-white.svg"/>
        </div>
        <nav-bar id="test" isActive="true"></nav-bar>
        <nav-bar @testFunction = "test" class="header"></nav-bar>
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
        <video-content id="video-container" :class="{isVideoShown: videoShown}">
             <span @click="toggleVideo" id="img-close-btn"><img src="../../assets/white-x.svg"/></span>
            <iframe id="video" width="789" height="444" src="https://www.youtube.com/embed/4tjvVNcVreE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </video-content>
        <img v-show="videoShown" @click="toggleVideo" id="video-show-logo" src="../../assets/video2.png"/>
    </div>
</template>

<script>
import navBar from '../UI/nav-bar.vue'
import sliderContent from './slider-content.vue'
import carousel from '../UI/carousel.vue'
import carouselSlide from '../UI/carousel-slide.vue'
import videoContent from './videoContent.vue'
export default {
  components: { navBar, sliderContent, carousel, carouselSlide, videoContent },
  data() {
      return{
          type: 'header',
          videoShown: false,
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
    },
    language() {
        return this.$store.getters.getGlobalLanguage;
    },
    
  },
  watch: {
      language() {
          this.$store.dispatch('headerSetion');
      }
  },
   methods: {
        toggleMobileNav(){
            this.$store.dispatch('toggleMobileNavBar')
        },
        toggleVideo(){
            this.videoShown = !this.videoShown;
        },
        test(value) {
            console.log(value);
        }
    },
}
</script>

<style scoped>
#video-show-logo:hover{
    cursor: pointer;
}
#video-show-logo{
    position: absolute;
    bottom: 5%;
    right: 3%;
    z-index: 501;
}
.isVideoShown{
    display: none;
}
#video-container{
    position: absolute;
    bottom: 25%;
    right: 10%;
    z-index: 500;
}
#video{
    width: 100%;
    height: 350px;
}
#img-close-btn{
    position: absolute;
    /* top: -7%;
    right: -1.5%; */
    
    top: -5%;
    right: -0.5%;
}
#img-close-btn img{
    width: 15px;
    height: 15px;
}

#img-close-btn:hover{
    cursor: pointer;
}

.cover img{
    width: 100%;
    height: 100vh;
    opacity: 0.5;
}
.header{
    z-index: 100;
    position: absolute;
    width: 100%;
}
#test{
    position: fixed;
    width: 100%;
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
    padding: 0;
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
@media(max-width: 1440px){
    .header{
        padding: 0;
    }
    #video{
    height: 350px;
    }
}

@media (max-width: 768px){
#video-container,
#video-show-logo{
    display: none;
}
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
    display: flex;
    justify-content: center;
}
.cover img{
    width: unset;
    height: 100%;
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