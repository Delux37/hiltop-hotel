<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container{
    width: 35%;
    height: fit-content;
    padding: 20px;
    background-color: white;
}
@media(max-width: 1440px){
    .container{
        width: 40%;
        padding: 10px;
    }
}
</style>