<template>
    <div>
        <div class="header">
            About us
        </div>
        <div class="content" v-html="about.description">
        </div>
    </div>
</template>
<script>
export default {
    computed: {
    about() {
        return this.$store.getters.about
      }
    },
    mounted() {
    this.$store.dispatch('about');
  },
}
</script>

<style scoped>
.header{
    margin-top: 115px;
    height: 53px;
    font-size: 40px;
    text-align: center;
    font-family: 'BigCaslonMedium';
}
.content{
    font-family: 'Larsseit';
    text-align: center;
    width: 83%;
    margin: 15px auto;
    line-height: 33px;
    font-size: 25px;
}
@media (max-width: 768px){
    .header{
        margin: 0;
        font-size: 20px;
        line-height: 24px;
    }
    .content{
        font-size: 14px;
        line-height: 17px;
    }
}
</style>