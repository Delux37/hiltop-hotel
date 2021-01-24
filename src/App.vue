<template>
  <div>
    <header-page></header-page>
    <room-types></room-types>
  </div>
</template>

<script>
import headerPage from './components/headerPage.vue'
import roomTypes from './components/room/roomTypes.vue'
export default {
  components: {
    headerPage,
    roomTypes
  }

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
