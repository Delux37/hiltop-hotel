<template>
    <div v-show="visibleSlide===index" class="carousel-slide">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:['index'],
    computed: {
    visibleSlide() {
        return this.$store.getters.visibleSlide
    }     
  },
}
</script>

<style scoped>
.header{
    position: absolute;
}

</style>