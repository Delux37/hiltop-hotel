<template>
    <div class="content-box">
        <div class="left-div">
            <div class="img-div">
                <img :src="primaryImage.crop"/>
            </div>
        </div>
        <div class="content-div">
            <div class="title"><h1>{{ title }}</h1></div>
            <div class="amenities">
                <ul>
                    <li>Price: ${{ price }}</li>
                    <li>Person: {{ humanCapacity }}</li>
                </ul>
            </div>
            <div class="description"><p>{{ testObj.description }}</p></div>
            <div class="viev-gallery-button-container"><h2 class="view-gallery-button">View more</h2></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'humanCapacity', 'price', 'primaryImage'],
    data() {
        return {
            testObj: {
                roomType: 'Room Type One',
                price: '200$',
                person: '5',
                description: 'this is rly cool rd ',
                img: 'http://via.placeholder.com/366x234'
            }
        }
    }
}
</script>

<style scoped>
.content-box{
    /* width: 42%; */
    width: 50%;
    padding-right: 3%;
    /* -moz-box-shadow: 0px 3px 8px rgb(100,100,100);
    -webkit-box-shadow: 0px 3px 8px rgb(100,100,100);
    box-shadow: 0px 3px 8px rgb(100,100,100); */
}
.content-div{
    display: flex;
    flex-direction: column;
    width: 65%;
    float: left;
    padding-left: 14%;
    border-bottom: 1px solid rgb(214, 214, 214);
    border-right: 1px solid rgb(214, 214, 214);

}
.left-div{
    width: 35%;
    float: left;
    height: 100%;
}
.img-div{
    /* height: 234px;//21
    width: 366px;//19 */
    /* height: 21%; */
    width: 19vw;
    margin-top: 71px;
    margin-left: 50px;
}
.img-div img{
    width: 100%;
}

.title{
    margin-top: 31px;
}
.title h1{
    color: #464646;
    /* font-size: 30px; */
    font-size: 1.8rem;
}
.amenities{
    padding-top: 4px;
    padding-bottom: 4px;
    margin: 32px 30px;
    padding-left: 6px;
    border-left: 1px solid #56D9D4;
}
.amenities ul{
    list-style: none;
    font-size: 22px;
    font-family: 'Larsseit';
}
.description p{
    /* font-size: 20px; */
    font-size: 1.2em;
    font-family: 'Larsseit';
}
.viev-gallery-button-container{
    margin-top: 30px;
    margin-bottom: 34px;
    width: 20%;
}
.viev-gallery-button-container h2{
    font-size: 20px;
    color: #464646;
    font-family: 'Larsseit';
    opacity: 0.7;
}
.viev-gallery-button-container h2:hover{
    opacity: 1;
    border-bottom: 1px solid #56D9D4;
    cursor: pointer;
}
</style>