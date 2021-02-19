<template>
    <div class="container">
        <div class="img_container">
            <img :src="image"/>
        </div>
        <div class="content_container">
            <div class="title"
            :class="{forGeoTitle: lan === 'en' || 'ru'}"
            >{{title}}</div>
            <div class="content" v-html="content"
            :class="{forGeoContent: lan === 'en' || 'ru'}"></div>
            <div @click="blogDetail(slug)" class="button-div"
            :class="{forGeoButton: lan === 'en' || 'ru'}">Read more</div>
        </div>
    </div>
</template>

<script>
export default   {
    props: ['title', 'content', 'image', 'slug'],
    methods: {
      blogDetail(slug){
          this.$router.push({ name: 'blogDetail', params: { slug: slug } })
      }
  },
  computed: {
      lan(){
          return this.$store.getters.getGlobalLanguage;
      },
  }
}
</script>
<style scoped>
/* "{active: index === visibleSlideHeader}" */

.button-div{
    line-height: 24px;
    font-size: 18px;
    margin-top: 20px;
    float: right;
    border-bottom: 1px solid rgba(255, 255, 255, 0);
    position: absolute;
    bottom: 20px;
    right: 20px;
}
.button-div:hover{
    cursor: pointer;
    border-bottom: 1px solid #56D9D4;
}
.content{
    line-height: 27px;
    font-size: 20px;
    font-family: 'Larsseit';
    overflow-y: hidden;
}
.title{
    line-height: 40px;
    font-size: 30px;
    margin-bottom: 35px;
    font-family: 'BigCaslonMedium';
}
.container{
    width: 50%;
    height: 304px;
    /* height: 200px; */
    /* height: 28%; */
    padding-left: 25px;
    display: flex;
    position: relative;
}
.img_container{

    width: 26vw;
    /* width: 60%; */
    /* height: 100%; */
    z-index: 10;
    position: relative;
}
.img_container img{
    width: 100%;
    height: 100%;
}
.content_container{
    /* padding-top: 20px; */
    /* padding-left: 20px; */
    padding: 20px;
    /* right: 10%; */
    position: absolute;
    border-right: 1px solid #56D9D4;
    height: 241px;
    /* width: 441px; */
    width: 541px;
    /* right: 20px; */
    right: 5%;
    align-self: center;
    z-index: 20;
    background-color: white;
    box-shadow: 1px 5px 5px rgba(116, 116, 116, 0.637);
}

.forGeoTitle{
    font-family: 'Rioni';
    line-height: 34px;
    font-size: 30px;
}
.forGeoContent{
    font-family: 'Nateli';
    line-height: 20px;
    font-size: 20px;
}
.forGeoButton{
    font-family: 'Arial';
    line-height: 24px;
    font-size: 18px;
}


@media (max-width: 1660px){
    .img_container{
        /* width: 26vw;
        z-index: 10;
        position: relative; */
    }
    .content_container{
        width: 441px;
    }
}
@media (max-width: 1440px){
    .title{
        margin-bottom: 15px;
        
    }
    .content_container{
        width: 400px;
        height: 200px;
    }
    .container{
        height: 250px;
    }
}
@media (max-width: 768px){

}
@media (max-width: 768px){
    .container{
        height: fit-content;
        width: 100%;
        padding: 0;
        display: flex;
        flex-direction: column;
    }
    .img_container{
        width: 70%;
        margin: 0;
    }
    .content_container{
        width: 70%;
        margin: 0;
        position: relative;
        right: -12%;
        height: 50%;
        top: -50px;
        padding: 20px 15px;
        box-shadow: 1px 5px 5px rgba(116, 116, 116, 0.637);
    }
    .title{
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        margin: 0 0 20px 0;
    }
    .content{
        font-size: 14px;
        line-height: 17px;
        margin: 0;
    }
    .button-div{
        font-size:14px;
        line-height: 17px;
    }
}
</style>