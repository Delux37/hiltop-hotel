<template>
    <!-- <transition> -->
        <div v-show="visibleSlide===index" class="carousel-slide">
            <slot></slot>
        </div>
    <!-- </transition> -->
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
        if(this.type=='Restaurant'){
            return this.$store.getters.serviceSlide
        }
        if(this.type=='Conference Room'){
            return this.$store.getters.conferenceSlide
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
/* .carouselSlide{
    position: absolute;
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0; 
}
.left-enter-active{
    animation: leftInAnimation 0.4s ease-in-out;
}
.left-leave-active{
    animation: leftOutAnimation 0.4s ease-in-out;
}
@keyframes leftInAnimation {
    from{
        transform:translateX(100%);
    }
    to{
         transform:translateX(0%);
    }
}
@keyframes leftOutAnimation {
    from{
        transform:translateX(0%);
    }
    to{
        transform:translateX(-100%);
    }
} */
</style>