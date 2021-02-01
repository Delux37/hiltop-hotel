<template>
    <div>
        <div class="title">BLOG</div>
        <div class="container">
            <ul>
                <blog-card
                v-for="blog in blogList.results"
                :key="blog.id"
                :title="blog.title"
                :content="blog.short_description.length > 80 ?blog.short_description.substring(0, 80) + '...': blog.short_description"
                :image="blog.picture.crop"
                :slug="blog.slug"
                >
                </blog-card>
            </ul>
        </div>
        <div class="load-more" @click="loadMore" v-show="!nothingToLoad">Load more</div>
    </div>
</template>

<script>
import blogCard from './blog-card.vue'
export default {
    data(){
        return {
            nothingToLoad: false,
        }
    },
    components: { blogCard },
    computed: {
    blogList() {
        return this.$store.getters.blogList
      }
    },
    mounted() {
    this.$store.dispatch('getBlog');
  },
   methods: {
       loadMore(){
           if(this.blogList.next !== null){
               this.$store.dispatch('loadMore', this.blogList.next);
           }else{
               this.nothingToLoad = true;
           }
       }
   }
}
</script>

<style scoped>
.load-more{
    text-align: center;
    line-height: 33px;
    font-size: 25px;
    padding-bottom: 5px;
    border-bottom: 2px solid #56D9D4;
    color: #464646;
    width: fit-content;
    margin: 50px auto 0 auto;
}
.load-more:hover{
    cursor: pointer;
    color: black;
}
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
@media (max-width: 768px){
    .title{
        font-size: 20px;
        line-height: 24px;
        font-weight: bold;
        margin-top: 70px;
    }
}
</style>