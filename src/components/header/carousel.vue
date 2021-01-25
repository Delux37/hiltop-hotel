<template>
    <div class="carousel">
        <slot></slot>

        <img @click="next" class="next" src="../../assets/arrow.svg"/>
        <img  @click="prev" class="prev" src="../../assets/arrow.svg"/>
    </div>
</template>
<script>
export default {
    methods: {
        next() {
            this.$emit('next')
        },
        prev() {
            this.$emit('prev')
        }
    }
}
</script>
<style scoped>
/* .carousel{
    position: relative;
    width: 600px;
    height: 350px;
    overflow: hidden;
} */
button,
img{
    position: absolute;
    height: 60px;
    width: 50px;
    top: 50%;
    /* top: calc(50% -20px); */
    /* background-color: rgba(0,0,0,0.8); */
    /* color: white; */
    opacity: 0.5;
    border: 2px solid red;
    border: none;
}
img:hover{
    
}
.next{
right: 0;
}
.prev{
left: 0;
transform: scaleX(-1);
}
</style>