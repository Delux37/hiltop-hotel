<template>
    <header>
        <div class="cover">
            <nav-bar></nav-bar>
            <sliderContent></sliderContent>
        </div>
    </header>
</template>

<script>
import navBar from './nav-bar.vue'
import sliderContent from './slider-content.vue'
import axios from 'axios'

export default {
  components: { navBar, sliderContent },
  data() {
      return{
          sliderContant: []
      }
  },
  mounted() {
  axios.get('https://www.hilltop.ge/api/slider/')
  .then((response) => {
    // handle success
    this.sliderContant = response.data
    console.log(this.sliderContant)
    // console.log(this.roomList);
  })
  }
}
</script>

<style scoped>
header{
    /* ; */
    /* linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), */
    background-image:  url(../../assets/luxury.jpg);
    background-size: cover;
    background-position: center;
    height: 100vh;
}
.cover{
    padding-top: 20px;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-color: #5C5959;
}
</style>