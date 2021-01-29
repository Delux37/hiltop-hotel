<template>
    <div class="carousel">
        <slot></slot>

        <img v-if="type=='room'" @click="next" class="next" src="../../assets/arrow.svg"/>
        <img v-if="type=='room'" @click="prev" class="prev" src="../../assets/arrow.svg"/>

        <div v-else-if="type=='restoraunt'" class="middle-manual-selectors">
            <ul>
                <li 
                @click="test1(nums)" 
                v-for="(nums, index) in length" 
                :key="nums"
                :class="{activeMiddle: index === visibleSlideService}"
                >
                    O
                </li>
            </ul>
        </div>

        <div v-else class="numeration">
            <ul>
                <li 
                @click="test(nums)" 
                v-for="(nums, index) in length" 
                :key="nums"
                :class="{active: index === visibleSlideHeader}"
                >
                    0{{ nums }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: ['length', 'type'],
    methods: {
        test(num) {
            console.log(num)
            this.$store.dispatch('manual', num-1)
        },
        test1(num){
            this.$store.dispatch('manualMiddle', num-1)
        },
        next() {
            this.$store.dispatch('next');
        },
        prev() {
            this.$store.dispatch('prev');
        }
    },
    computed: {
    visibleSlideHeader() {
        return this.$store.getters.visibleSlide
    },
    visibleSlideService(){
        return this.$store.getters.serviceSlide
    }
    }
}
</script>
<style scoped>

.middle-manual-selectors{
    width: 100%;
    position: absolute;
    bottom: 3%;
    color: white;
    display: flex;
    justify-content: center;
}
.middle-manual-selectors ul{
    list-style: none;
    display: flex;
}
.middle-manual-selectors li{
    margin-left: 10px;
    background-color: white;
    font-weight: bold;
    font-size: 20px;
    border-radius: 50%;
    transform: scale(1);
}
/*CLASS WHEN MIDDLE MANUAL IS ACTIVE */
.activeMiddle{
    
}

.numeration{
    position: absolute;
    top: 50%;
    transform: translateY(-40%);
    right: 0;
    display: flex;
    flex-direction: column;
    margin-right: 2%;
}
.numeration ul{
    list-style: none;
    display: flex;
    flex-direction: column;
}
.numeration li {
    border-right: 5px solid #0000004D;
    color: #0000004D;
    font-size: 50px;
    padding-right: 20px;
    margin-bottom: 5px;
}
.numeration li:hover{
    color: white;
    border-right: 5px solid white;
    cursor: pointer;
}
.active{
    color: white !important;
    border-right: 5px solid white !important;
}
button,
img{
    position: absolute;
    height: 60px;
    width: 50px;
    top: 50%;
    /* height: 100%; */
    /* top: calc(50% -20px); */
    /* background-color: rgba(0,0,0,0.8); */
    /* color: white; */
    opacity: 0.5;
    border: 2px solid red;
    border: none;
}
img:hover{
    opacity: 1;
    cursor: pointer;
}
.next{
right: 0;
}
.prev{
left: 0;
transform: scaleX(-1);
}

@media (max-width: 1280px)
{
    .numeration li {
        font-size: 30px;
    }
}
</style>