<template>
    <div class="container">
        <div class="img_container">
            <img :src="image" v-if="roomList.length"/>
        </div>
        <div class="content_container">
            <div class="title">{{title}}</div>
            <div class="content" v-html="content"></div>
            <div @click="blogDetail(slug)" class="button-div">Read more</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default   {
    props: ['title', 'content', 'image', 'slug'],
        data() {
        return{
            roomList: []
        }
    },
    mounted() {
  axios.get('https://www.hilltop.ge/api/room-types/')
  .then((response) => {
    // handle success
    this.roomList = response.data
    //rooms.primary_image
    // console.log(this.roomList)
    // console.log(this.roomList);
  })
  },
    methods: {
      blogDetail(slug){

          this.$router.push({ name: 'blogDetail', params: { slug: slug } })
      }
  }
}
</script>
<style scoped>
.button-div{
    line-height: 24px;
    font-size: 18px;
    margin-top: 20px;
    float: right;
    border-bottom: 1px solid #56D9D4;
}
.content{
    line-height: 27px;
    font-size: 20px;
    font-family: 'Larsseit';
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
    padding-left: 50px;

    display: flex;
    position: relative;
}
.img_container{
    width: 26vw;
    /* height: 100%; */
    z-index: 10;
    position: relative;
}
.img_container img{
    width: 100%;
    height: 100%;
}
.content_container{
    padding: 20px;
    right: 10%;
    position: relative;
    border-right: 1px solid #56D9D4;
    height: 241px;
    width: 441px;
    align-self: center;
    z-index: 20;
    background-color: white;
}
</style>