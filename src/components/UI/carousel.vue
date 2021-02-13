<template>
    <div class="carousel">
        <img v-if="type=='room'" @click="$emit('close')" id="close" src="../../assets/iconclose.svg"/>
        <slot></slot>

        <img v-if="type=='room'" @click="next" class="next" src="../../assets/arrow.svg"/>
        <img v-if="type=='room'" @click="prev" class="prev" src="../../assets/arrow.svg"/>

        <div v-else-if="type=='restoraunt'" class="middle-manual-selectors">
            <ul>
                <li 
                @click="dotted(nums)" 
                v-for="(nums, index) in length" 
                :key="nums"
                :class="{activeMiddle: index === visibleSlideService}"
                >
                   <span ></span>
                </li>
            </ul>
        </div>

        <div v-else class="numeration">
            <ul>
                <li 
                @click="numeration(nums)" 
                v-for="(nums, index) in length" 
                :key="nums"
                
                >
                    <span class="test" :class="{active: index === visibleSlideHeader}">
                        <span>0{{ nums }}</span>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: ['length', 'type', 'imagesLen', 'title'],
    emits: ['close'],
    data() {
        return{
            direction: '',
        }
    },
    methods: {
        numeration(num) {
            this.$store.dispatch('manual', num-1)
            this.$store.state.direction="left"
        },
        dotted(num){
            if(this.title==='Restaurant'){
                this.$store.dispatch('manualMiddle', num-1)
            }else{
                this.$store.dispatch('manualMiddleConference', num-1)
            }
        },
        next() {
            this.$store.dispatch('next', this.imagesLen);
        },
        prev() {
            this.$store.dispatch('prev', this.imagesLen);
        },
    },
    computed: {
    visibleSlideHeader() {
        return this.$store.getters.visibleSlide
    },
    visibleSlideService(){
         if(this.title==='Restaurant'){
            return this.$store.getters.serviceSlide
         }else{
            return this.$store.getters.conferenceSlide
        }
        
    }
    }
}
</script>
<style scoped>

.middle-manual-selectors{
    width: 100%;
    position: absolute;
    bottom: 3%;
    color: rgba(255, 255, 255, 0);
    display: flex;
    justify-content: center;
}
.middle-manual-selectors ul{
    list-style: none;
    display: flex;
}
.middle-manual-selectors li{
    width: 8px;
    height: 8px;

    /* display: inline-block; */
    /* border-radius: 50%; */
    /* background: #000; */
    /* opacity: .2; */
    

    margin-left: 10px;
    background-color: rgb(255, 255, 255);
    /* font-weight: bold;
    font-size: 20px; */
    border-radius: 50%;
    /* transform: scale(0.8); */
}
.middle-manual-selectors li:hover{
    cursor: pointer;
}
/*CLASS WHEN MIDDLE MANUAL IS ACTIVE */
.activeMiddle{
    /* background-color: rgb(255, 255, 255);
    transform: scale(1.2); */
    width: 16px !important;
    border-radius: 20px !important;
}



.numeration{
    position: absolute;
    top: 50%;
    transform: translateY(-40%);
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 2%;

    border-right: 1px solid #0000004D;
}
.test{
    border-right: 1px solid #00000000;
    margin-top: -10px;
    padding-right: 20px;
    /* margin-right: 10px; */
    margin-right: -2px;
}
.test span{
    font-size: 20px; 
}
.numeration ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    
}
.numeration li {
    color: #0000004D;
    font-size: 50px;
    margin-top: -1px;
}
.numeration .test:hover{
    color: #FFFAFA ;
    border-right: 3px solid #FFFAFA ;
    cursor: pointer;
}
.active{
    color: #FFFAFA  !important;
    border-right: 3px solid #FFFAFA !important;
}
button,
img{
    position: absolute;
    /* height: 60px;
    width: 50px; */
    /* height: 25px; */
    /* width: 15px; */
    top: 70%;
    /* opacity: 0.5; */
    border: none;
}
img:hover{
    opacity: 1;
    cursor: pointer;
}
.next{
right: 0;
right: 50px;
}
.prev{
left: 0;
transform: scaleX(-1);
left: 50px;
}
#close{
    position: absolute;
    right: 0;
    top: -5%;
}
@media(max-width: 1660px){
    img{
        top: 64%;
    }
}

@media(max-width: 1330px){
    img{
        top: 70%;
    }
}

@media (max-width: 1280px)
{
    img{
        top: 55%;
    }
    .numeration li {
        font-size: 30px;
    }
}
</style>