<template>
    <section>
        <div id="header"><h1>Room Types</h1></div>
        <div class="test">
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
                @clicked="test"
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
      }
    },
    mounted() {
    this.$store.dispatch('romTypes');
  },
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
}
#header h1{
    font-size: 40px;
    color: #464646;
    font-family: 'Larsseit';
}
.test ul{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: auto auto;
    row-gap: 20px;
    /* display: flex;
    row-gap: 30px; 
    flex-flow: wrap; */
}

</style>