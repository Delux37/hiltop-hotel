<template>
    <div>
        <div class="title">BLOG</div>
        <div class="container">
            <ul>
                <blog-card
                v-for="blog in blogList"
                :key="blog.id"
                :title="blog.title"
                :content="blog.short_description"
                :image="blog.picture.crop"
                :slug="blog.slug"
                >
                </blog-card>
            </ul>
        </div>
    </div>
</template>

<script>
import blogCard from './blog-card.vue'
export default {
    components: { blogCard },
    computed: {
    blogList() {
        return this.$store.getters.blogList
      }
    },
    mounted() {
    this.$store.dispatch('getBlog');
  },

}
</script>

<style scoped>
.title{
    margin-top: 200px;
    margin-bottom: 50px;;
    line-height: 53px;
    font-size: 40px;
    text-align: center;
}
.container ul{
    display: flex;
    row-gap: 50px;
    flex-flow: wrap;
}
</style>