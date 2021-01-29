<template>
    <div>
        <nav-bar isActive="true"></nav-bar>
        <div class="container">
            <div class="img-div">
                <img :src="blogDetail.picture.full_size"/>
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
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
import navBar from '../header/nav-bar.vue'
export default{
components: {
    navBar
},
computed:{
    blogDetail() {
        return this.$store.getters.blogDetail
      }
    },
    // date,  title,
}
</script>

<style scoped>

.container{
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

</style>