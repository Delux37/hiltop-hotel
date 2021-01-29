<template>
    <div class="carousel">
        <slot></slot>

        <img v-if="type=='room'" @click="next" class="next" src="../../assets/arrow.svg"/>
        <img v-if="type=='room'" @click="prev" class="prev" src="../../assets/arrow.svg"/>

        <div v-else class="numeration">
            <ul>
                <li 
                @click="test(nums)" 
                v-for="(nums, index) in length" 
                :key="nums"
                :class="{active: index === visibleSlide}"
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
    data() {
        return{
            list: ['01', '02', '03', '04'],
            yo: 4
        }
    },
    methods: {
        test(num) {
            console.log(num)
            this.$store.dispatch('manual', num-1)
        },
        next() {
            // this.$emit('next')
            this.$store.dispatch('next');
        },
        prev() {
            // this.$emit('prev')
            this.$store.dispatch('prev');
        }
    },
    computed: {
        visibleSlide() {
        return this.$store.getters.visibleSlide
    }     
    }
}
</script>
<style scoped>

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
</style>