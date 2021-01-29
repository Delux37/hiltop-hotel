<template>
    <div class="container">
        <div class="info_container">
            <div class="header-text">
                <h1> {{ title }}</h1>
            </div>
            <div class="paragraph-text">
                <p v-html="description">
                 </p>
            </div>
         </div>
        <carousel class="image_container"  @next="next" @prev="prev" :type="type" :length="images.length">   
            <carousel-slide v-for="(slides,index) in images"
            :index="index"
            :key="slides"
            :visibleSlide="visibleSlide"
            :type="type"
            >
            <img :src="slides.image.full_size"/>
            </carousel-slide>
        </carousel>
    </div>
</template>

<script>
import axios from 'axios'
import carousel from '../header/carousel.vue'
import carouselSlide from '../header/carousel-slide.vue'
export default {
    props: ['title', 'description', 'images'],
    components: {carousel, carouselSlide},
    data() {
        return {
            type: 'restoraunt',
            test: [],
            visibleSlide: 0,
        }
    },
mounted() {
  axios.get('https://www.hilltop.ge/api/slider/')
  .then((response) => {
    // handle success
    this.test = response.data;
    // console.log(this.roomList);
  })
  },
    computed: {
      slidesLen(){
          return this.test.length
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
  }
}
</script>

<style scoped>
.container{
    margin-top: 150px;
    width: 100%;
    display: flex;
    position: relative;
    margin-bottom: 1rem;
}
.image_container {
position: relative;
/* z-index: 10; */
/* border: 2px solid green; */
width: 150%;
}

.image_container img {
display: block;
max-width: 100%;
/* max-height: 100%; */
}

.info_container {
/* color: white; */
/* background-color: rgba(0, 0, 0, 0.51);*/
background-color: white;
/* box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.5); */
border-left: 2px solid #56D9D4;;
/* border: 2px solid red; */
border-radius: 5px;
position: relative;
width: 50%;
/* max-height: 30rem; */
max-height: 100%;
align-self: center;
padding: 2rem;
left: 8%;
z-index: 20;
overflow: hidden;
}
.paragraph-text{
    width: 88%;
    margin: 0 auto;
    line-height: 27px;
    font-size: 20px;
    color: #464646;
    font-family: 'Larsseit';
}
.header-text{
    width: 65%;
    margin: 44px auto 70px auto;
    display: flex;
    justify-content: center;
}
.header-text h1{
    font-family: 'BigCaslonMedium';
    font-size: 50px;
    color: #464646;
}

/* .content-placeholder{
    width: 22%;
    border: 2px solid blue;
}
.img-div{
    width: 78%;
    float: right;
    border: 2px solid magenta;
}
.img-div img{
    width: 100%;
    height: 100%;

}
.container{
    width: 100%;
    margin-top: 115px;
}

.content-container{
    width: 570px;
    border: 1px solid red;
    height: 589px;
    margin-top: 7%;
    margin-left: 50px;
    background-color: #fff;
} */
</style>