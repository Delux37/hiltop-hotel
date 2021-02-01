<template>
  <div>
    <header-page id="header"></header-page>
    <room-types id="roomTypes"></room-types>
    <additional-section></additional-section>
    <about-us></about-us>
    <blog-content></blog-content>
    <contact-section></contact-section>
  </div>
</template>

<script>
import headerPage from '../components//header/headerPage.vue'
import roomTypes from '../components/room/roomTypes.vue'
import additionalSection from '../components/restaurant/additional-section.vue'
import aboutUs from '../components/about/about-us.vue'
import blogContent from '../components/blog-section/blogContent.vue'
import contactSection from '../components/contact-section/contact-section.vue'

export default {
  components: {
    headerPage,
    roomTypes,
    additionalSection,
    aboutUs,
    blogContent,
    contactSection,
  },
  data() {
    return {
    }
  },
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    background-color: #FFF;
    color: #555;
    font-family:  'Lato', 'Arial', sans-serif;
    font-weight: 300;
    text-rendering: optimizeLegibility;
}
@media (max-width: 768px) {
  #header{
    position: relative;
    z-index: 10;
  }
  #roomTypes{
    background-color: white;
    width: 90%;
    margin: 0 auto;
    position: relative;
    margin-top: -250px;
    z-index: 200;
  }
}

</style>
