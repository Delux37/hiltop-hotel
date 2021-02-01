<template>
    <div>
        <nav-bar id="test" isActive="true"></nav-bar>
        <div class="container">
            <div class="img-div" v-if="blogDetail.picture">
                <img  :src="blogDetail.picture.full_size"/>
            </div>
            <div @click="$router.push({ name: 'homePage' })" class="back-button-pc">
                <img src="../assets/whatsapp-black.png"/> 
            </div>
            <div class="text-div">
                <div class="text-div-container">
                    <div class="header-div">
                        <div class="title-div">{{ blogDetail.title }}</div>
                        <div class="date-tag-div">
                            <p> {{ blogDetail.date }} </p>
                            <ul>
                                <li v-for="tag in blogDetail.tags" :key="tag">
                                    {{ tag.title }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="content-div">
                        <p v-html="blogDetail.description"></p>
                    </div> 
                    <div class="date-tag-div mobile">
                            <p> {{ blogDetail.date }} </p>
                            <ul>
                                <li v-for="tag in blogDetail.tags" :key="tag">
                                    {{ tag.title }}
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
import navBar from '../components/UI/nav-bar.vue'
export default{
components: {
    navBar
},
computed:{
    blogDetail() {
        return this.$store.getters.blogDetail
      }
    },
  mounted() {
    this.$store.dispatch('getBlogDetail', this.$route.params.slug)
  },
  methods: {
      back(){
          this.$routes.push({ path: '/'})
          console.log('Tried to push')
      }
  }
}
</script>

<style scoped>
.back-button-pc{
   position: absolute;
   right: 35%;
   top: 25%;
   z-index: 100;
   border: 2px solid yellow;
}
#test{
    /* position: fixed; */
    width: 100%;
    padding: 40px 0;
    opacity: 3;
    z-index: 98;
    background-color: white;
    border-bottom: 1px solid #56D9D4;
}
.container{
    margin-top: 10px;
    height: 80vh;
    width: 100%;
    display: flex;
}
.img-div{
    width: 61%;
    position: relative;
    z-index: 10;
}
.img-div img{
    width: 100%;
    height: 100%;
}
.text-div{
    width: 39%;
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
}
.text-div-container{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 90%;
    /* border: 2px solid magenta; */
    width: 100%;
}
/* HEADER SECTION  */
.header-div{
    width: 100%;
    height: 30%;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.title-div{
    padding-bottom: 10%;
    font-size: 40px;
    font-weight: bold;
}
.date-tag-div{
    display: flex;
    justify-content: space-between;
    display: none;
}
.date-tag-div ul{
    display: flex;
    list-style: none;
}
.date-tag-div li{
    margin-left: 5px;
}
/* */
.content-div{
    position: relative;
    width: 100%;
    height: 70%;
    z-index: 20;
    right: 7%;
    font-size: 20px;
    display: flex;
    align-items: center;
    font-weight: bold;
    padding: 20% 8%;
    border-right: 1px solid #56D9D4;
    background-color: #fff;
    overflow: hidden;

}
@media (max-width:768px){
    .back-button{
        border: 2px solid blue;
    }
    #test{
        display: none;
    }
    .container{
        display: flex;
        flex-direction: column;
        height: fit-content;
    }
    .img-div{
        width: 100%;
    }
    .text-div{

        width: 100%;
        padding: 0;
        height: fit-content;
    }
    .text-div-container{
        padding: 0;
        padding: 0 20px;
    }
    .header-div{
        padding: 0;
        margin: 0;
    }
    .title-div{
        font-size: 20px;
        line-height: 24px;
        padding: 0;
        /* margin: 0; */
    }
    .content-div{
        border: none;
        padding: 0;
        position: static;
        margin-top: 30px;
    }
    .content-div p{
        line-height: 17px;
        font-size: 14px;
    }
    .mobile{
        display: flex;
        justify-content: space-between;
    }
    .date-tag-div>p {
        margin-top: 30px;
    }
    .mobile ul{
        display: flex;
        align-items: flex-end;
    }
    .mobile li{
        display: inline-block;
        margin-right: 10px;
    }
}

</style>