<template>
    <div class="container">
        <div class="info_container">
            <div class="header-text">
                <h1> Title</h1>
            </div>
            <div class="paragraph-text">
                <p>
                 using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publis
                </p>
            </div>
         </div>
        <div class="image_container">
            <img src="../../assets/slider3.jpg"/>
        </div>
    </div>
</template>

<script>
export default {
    props: ['image']
}
</script>

<style scoped>
.container{
    margin-top: 150px;
    width: 100%;
    display: flex;
    position: relative;
    margin-bottom: 1rem;
}
.image_container {
position: relative;
z-index: 10;
width: 150%;
}

.image_container img {
display: block;
max-width: 100%;
max-height: 100%;
}

.info_container {
/* color: white; */
/* background-color: rgba(0, 0, 0, 0.51);*/
background-color: white;
/* box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.5); */
border-left: 1px solid green;
border-radius: 5px;
position: relative;
width: 40%;
max-height: 30rem;
align-self: center;
padding: 2rem;
left: 2%;
z-index: 20;
}
.paragraph-text{
    width: 88%;
    margin: 0 auto;
    line-height: 27px;
    font-size: 20px;
    color: #464646;
}
.header-text{
    width: 65%;
    margin: 44px auto 70px auto;
    display: flex;
    justify-content: center;
}
.header-text h1{
    font-size: 50px;
    color: #464646;
}

/* .content-placeholder{
    width: 22%;
    border: 2px solid blue;
}
.img-div{
    width: 78%;
    float: right;
    border: 2px solid magenta;
}
.img-div img{
    width: 100%;
    height: 100%;

}
.container{
    width: 100%;
    margin-top: 115px;
}

.content-container{
    width: 570px;
    border: 1px solid red;
    height: 589px;
    margin-top: 7%;
    margin-left: 50px;
    background-color: #fff;
} */
</style>