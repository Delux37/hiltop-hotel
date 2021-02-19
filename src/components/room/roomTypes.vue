<template>
    <section>
        <div id="header"><h1>{{ navList['roomTypes'] }}</h1></div>
        <div class="roomCard" v-if="roomList">
            <ul>
                <room-card
                v-for="rooms in roomList"
                :key="rooms.id"
                :title=rooms.title
                :humanCapacity=rooms.human_capacity
                :price=rooms.price
                :primaryImage=rooms.primary_image
                :description=rooms.description
                :images=rooms.images
                ></room-card>
            </ul>
        </div>
    </section>
</template>

<script>
import roomCard from './roomCard.vue'
export default {
    components: {
        roomCard
    },
    computed: {
    roomList() {
        return this.$store.getters.roomList
      },
    language() {
        return this.$store.getters.getGlobalLanguage;
    },
    navList(){
        return this.$store.getters.dynamicNav.roomTypes;
    }
    },
    mounted() {
    this.$store.dispatch('romTypes');
  },
  watch: {
      language() {
          this.$store.dispatch('romTypes');
      }
  }
}
</script>
<style scoped>
section{
    margin-top: 115px;
}
#header{
    height: 53px;
    width: 20%;
    margin: 0 auto;
    margin-bottom: 30px;
    /* border: 2px solid red; */
}
#header h1{
    font-size: 40px;
    color: #464646;
    font-weight: 100;
    font-family: 'LarsseitLight';
    text-transform: uppercase;  
}
.roomCard ul{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: auto auto;
    row-gap: 20px;

    /* display: flex;
    row-gap: 30px; 
    flex-flow: wrap; */
}
@media (max-width: 768px){
.roomCard ul{
    display: flex;
    flex-direction: column;
    row-gap: 50px;
}
#header{
    /* border: 2px solid red; */
    /* margin: 0; */
    overflow: hidden;
    width: 100%;
    text-align: center;
    margin-top: 15px;
    height: fit-content;
    text-transform: uppercase;
    position: relative;
    top: 10px;
}
#header h1{
    line-height: 18px;
    font-size: 15px;
}
}

</style>