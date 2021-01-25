<template>
    <div>
        <div class="title">BLOG</div>
        <div class="container">
            <ul>
                <blog-card></blog-card>
                <blog-card></blog-card>
                <blog-card></blog-card>
            </ul>
        </div>
    </div>
</template>

<script>
import blogCard from './blog-card.vue'
export default {
    components: { blogCard }
    
}
</script>

<style scoped>
.title{
    
    margin-top: 200px;
    line-height: 53px;
    font-size: 40px;
    text-align: center;
}
.container ul{
    display: flex;
    row-gap: 20px; 
    flex-flow: wrap;
}
</style>