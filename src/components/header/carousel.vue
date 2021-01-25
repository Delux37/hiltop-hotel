<template>
    <div class="carousel">
        <slot></slot>

        <button @click="next" class="next">Next</button>
        <button @click="prev" class="prev">Prev</button>
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
button{
    position: absolute;
    height: 40px;
    width: 50px;
    top: 50%;
    /* top: calc(50% -20px); */
    background-color: rgba(0,0,0,0.8);
    color: white;
    border: 2px solid red;
    border: none;
}
.next{
right: 0;
}
.prev{
left: 0;
}
</style>