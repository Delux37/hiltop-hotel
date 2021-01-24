<template>
    <section>
        <div id="header"><h1>Room Types</h1></div>
        <div class="test">
            <room-card></room-card>
        </div>
    </section>
</template>

<script>
import roomCard from './roomCard.vue'
export default {
    components: {
        roomCard
    }
}
</script>
<style scoped>
.test{
    display: flex;
    flex-direction: row;
}
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
</style>