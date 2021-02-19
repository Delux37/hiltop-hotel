<template>
    <div>
        <div class="header" :class="{geoHeader: language !== 'en'}">
            {{ aboutUs }}
        </div>
        <div class="content" :class="{geoContent: language !== 'en'}" v-html="about.description">
        </div>
    </div>
</template>
<script>
export default {
    computed: {
    about() {
        return this.$store.getters.about
      },
    language(){
          return this.$store.getters.getGlobalLanguage;
      },
    aboutUs(){
        return this.$store.getters.dynamicNav.aboutUs;
    }
    },
    mounted() {
    this.$store.dispatch('about');
  },
    watch:{
        language(){
            this.$store.dispatch('about');
        }
    }
}
</script>

<style scoped>
.header{
    margin-top: 115px;
    height: 36px;
    font-size: 30px;
    text-align: center;
    font-family: 'LarsseitLight';
}
.content{
    font-family: 'larsseit-thinitalic';
    text-align: center;
    width: 83%;
    margin: 15px auto;
    line-height: 26px;
    font-size: 22px;
}
.geoHeader{ 
    font-family: 'ArialCaps';
    font-size: 40px;
    line-height: 45px;
}
.geoContent{
    font-family: 'Nateli';
    font-size: 25px;
    line-height: 30px;
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