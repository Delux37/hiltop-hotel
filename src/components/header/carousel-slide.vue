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
        if(this.type=='restoraunt'){
            return this.$store.getters.serviceSlide
        }
        return 0;
    },
  },
}
</script>

<style scoped>
.header{
    position: absolute;
}

</style>