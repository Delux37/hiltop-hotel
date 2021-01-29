<template>
    <div v-show="visibleSlide===index" class="carousel-slide">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:['index', 'type'],
    computed: {
    visibleSlide() {
        if(this.type=='room'){
            return this.$store.getters.roomSlides
        }
        if(this.type=='header'){
            return this.$store.getters.visibleSlide
        }
        return 0;
    },
  },
}
</script>

<style scoped>
#test{
    width: 100%;
    border: 5px solid red;

}
.header{
    position: absolute;
}

</style>