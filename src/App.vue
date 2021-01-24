<template>
  <div>
    <header-page></header-page>
    <room-types></room-types>
    <additional-section></additional-section>
  </div>
</template>

<script>
import headerPage from './components//header/headerPage.vue'
import roomTypes from './components/room/roomTypes.vue'
import additionalSection from './components/restaurant/additional-section.vue'

export default {
  components: {
    headerPage,
    roomTypes,
    additionalSection
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
    font-family: 'Lato',  'Arial', sans-serif;
    font-weight: 300;
    text-rendering: optimizeLegibility;
}
</style>
