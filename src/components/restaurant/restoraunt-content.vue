<template>
    <div class="container">
        <div class="left-container">
            <div class="content-container">
                <div class="header-text">
                    <h1> {{ title }}</h1>
                </div>
                <div class="paragraph-text">
                    <p v-html="description">
                    </p>
                </div>
            </div>
         </div>
        <carousel class="image_container" :type="type" :length="images.length">   
            <carousel-slide v-for="(slides,index) in images"
            :index="index"
            :key="slides"
            :visibleSlide="visibleSlide"
            :type="type"
            class="slides"
            >
            <img :src="slides.image.full_size"/>
            </carousel-slide>
        </carousel>
    </div>
</template>

<script>
import axios from 'axios'
import carousel from '../UI/carousel.vue'
import carouselSlide from '../UI/carousel-slide.vue'
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
//   methods: {
//           next(){
//           if(this.visibleSlide >= this.slidesLen - 1){
//               this.visibleSlide=0;
//           }else{
//               this.visibleSlide++;
//               console.log(this.slidesLen);
//               console.log(this.visibleSlide);
//           }
//       },
//       prev() {
//           if(this.visibleSlide <= 0){
//               this.visibleSlide=this.slidesLen - 1;
//           }else{
//               this.visibleSlide--;
//               console.log(this.slidesLen);
//               console.log(this.visibleSlide);
//           }
//       }
//   }
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
border-left: 2px solid #56D9D4;;
border-radius: 5px;
/* height: 60%; */
width: 28%;
overflow: hidden;
position: absolute;
left: 3%;
max-height: 90%;
overflow: hidden;
/* position: relative; */
/* width: 50%; */
/* max-height: 20%; */
/* padding: 2rem; */
/* left: 8%; */
z-index: 2;
/* overflow: hidden; */
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
    font-family: 'Larsseit';
    margin-bottom: 50px;
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
@media (max-width: 1366px){
.container{
    height: 700px;
}
.header-text{
 margin: 20px auto 20px auto;
}

.header-text h1{
    font-size: 30px;
}
.paragraph-text{
    font-size: 16px;
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
    /* border: 2px solid green; */
    position: static;
    /* display: block; */
    /* width: 100%; */
    /* height: 100%; */
    overflow: hidden;
    margin: 0;
    margin-top: -150px;
    /* margin-bottom: 0; */
    margin-left: 30px;
    margin-right: 10px;
    width: 100%;
    /* height: 100%; */

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