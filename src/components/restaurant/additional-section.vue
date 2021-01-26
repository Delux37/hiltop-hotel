<template>
    <section>
        <restoraunt-content></restoraunt-content>
        <restoraunt-content></restoraunt-content>
    </section>
</template>

<script>
import axios from 'axios'
import restorauntContent from './restoraunt-content.vue'
export default {
  components: {
      restorauntContent
  },
  data() {
      return {
          test: []
      }
  },
  mounted() {
  axios.get('https://www.hilltop.ge/api/slider/')
  .then((response) => {
    // handle success
    this.test = response.data;
    // console.log(this.roomList);
  })
  }
}
</script>

<style scoped>


</style>