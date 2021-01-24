<template>
    <header>
        <nav-bar></nav-bar>
        <sliderContent></sliderContent>
    </header>
</template>

<script>
import navBar from './nav-bar/nav-bar.vue'
import sliderContent from './slider-content.vue'

export default {
  components: { navBar, sliderContent },
}
</script>

<style scoped>
header{
    padding-top: 20px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../assets/luxury.jpg);
    background-size: cover;
    background-position: center;
    height: 100vh;
}
</style>