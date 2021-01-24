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
                ></room-card>
            </ul>
        </div>
    </section>
</template>

<script>
import roomCard from './roomCard.vue'
import axios from 'axios'
export default {
    components: {
        roomCard
    },
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
    // console.log(this.roomList)
    // console.log(this.roomList);
  })
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
}
#header h1{
    font-size: 40px;
    color: #464646;
}
.test ul{
    display: flex;
    row-gap: 20px; 
    flex-flow: wrap;
}

</style>