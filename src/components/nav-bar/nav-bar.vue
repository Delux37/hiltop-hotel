<template>
    <nav>
        <div class="row">
            <h1 id="main-text">Hiltop Bakuriani</h1>
            <ul class="main-nav">
                <li>Home</li>
                <li>Room Types</li>
                <li>Restoraunt</li>
                <li>About us</li>
                <li>Conference room</li>
                <li>Blog</li>
                <li>Contact</li>
                <li><img src="../../assets/feather-phone.svg"/></li>
                <li>+995 555 555 555</li>
                <li><img src="../../assets/ionic-logo-facebook.svg"/></li>
                <li>ENG</li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.main-nav li {
    display: inline-block;
    font-size: 22px;
    margin-left: 30px;
    line-height: 30px;
    color: #FFF;    
}
.main-nav li:hover {
    border-bottom: 2px solid #56D9D4;
    cursor: pointer;
}
.main-nav{
    list-style: none;
    float: right;
    height: 100%;
    display: flex;
    align-items: center;
}
.row{
    width: 96%;
    height: 47px;
    margin: 0 auto;
    overflow: hidden;
}
#main-text{
    float: left;
    font-size: 35px;
    color: white;
    margin-left: 20px;
}

</style>