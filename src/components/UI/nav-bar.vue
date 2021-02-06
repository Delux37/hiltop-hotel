<template>
    <nav>
        <div class="row"
            :class="{whiteSection: isActive, hideMobile: !isMobileNavBarShown}"
        >
            <h1 class="main-text" :class="{movingNavMainText: isActive}">Hiltop Bakuriani
                <span @click="toggleMobileNav"><img src="../../assets/material-close.svg"/></span>
            </h1>
            <ul class="main-nav"
                :class="{active: isActive}">
                <li class="languageList">
                    <div class="language-bar-mob">
                          <select name="language" id="language-mob">
                            <option value="ENG">ENG</option>
                            <option value="RUS">RUS</option>
                            <option value="GEO">GEO</option>
                          </select>
                        <div>
                            <span class="facebook-mob"><img src="../../assets/iconmob.png"/></span>
                            <span class="phone-mob"><img src="../../assets/facebookmob.png"/></span>
                        </div>
                    </div>
                </li>
                <li>Home</li>
                <li>Room Types</li>
                <li>Services </li>
                <li>About us</li>
                <li>Blog</li>
                <li>Contact</li>
                <li class="phone-logo"><span><img src="../../assets/feather-phone.svg"/></span></li>
                <li class="phone-number"><span>+995 555 555 555</span></li>
                <li v-if="isActive" class="facebook-logo"><span><img src="../../assets/facebookmobblack.png"/></span></li>
                <li v-else class="facebook-logo"><span><img src="../../assets/ionic-logo-facebook.svg"/></span></li>
                <li class="language-bar">
                    <select name="language" id="language">
                        <option value="ENG">ENG</option>
                        <option value="RUS">RUS</option>
                        <option value="GEO">GEO</option>
                    </select>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    props: ['isActive'],
    methods: {
        toggleMobileNav(){
            this.$store.dispatch('toggleMobileNavBar')
        }
    },
    computed: {
        isMobileNavBarShown(){
            return this.$store.getters.isMobileNavBarShown
        },
    }
}
</script>
<style scoped>
#language{
    background: none;
    color: white;
    outline: none;
    border: none;
    font-size: 20px;
    line-height: 24px;
}
#language option{
    color: black;
    font-size: 10px;
    line-height: 15px;
    width: fit-content;
}
#language-mob{
    background: none;
    color: black;
    outline: none;
    border: none;
}
.language-bar-mob{
    display: none;
}
.whiteSection{
    background-color: white;
}
.facebook-mob{
    display: none;
}
.close-button span{
    display: none;
}
.phone-mob{
    display: none;
}
.main-nav li {
    font-family: 'Larsseit';
    display: inline-block;
    font-size: 22px;
    margin-left: 20px;
    line-height: 30px;
    color: #FFF;   
    border-bottom: 2px solid rgba(105, 88, 88, 0);
    text-transform: uppercase;
}
.main-text img{
    display: none;
}
.main-nav li:hover{
    border-bottom: 2px solid #56D9D4;
    cursor: pointer;
}
.main-nav{
    list-style: none;
    float: right;
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: 10px;
    margin-right: 30px;

    /*216px*/
    /*768 */
    /**HelveticaNeueCyr */
    /*FiraGo */
}
.row{
    width: 96%;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
}
.main-text{
    font-family: 'BigCaslon';
    letter-spacing: 3px;
    float: left;
    font-size: 35px;
    color: white;
    margin-left: 20px;
}
.movingNavMainText{
    color: black;
}
.active li{
    color: black;
    margin-bottom: 10px;
}
.active #language{
    color: black;
}


@media (max-width: 1366px){
 .main-nav li{
        font-size: 20px;
        margin-left: 10px;
        /* color: blue; */
    }
}
@media (max-width: 1280px)
{
    .main-nav li{
        font-size: 16px;
        margin-left: 10px;
    }
    h1{
        font-size: 20px;
        letter-spacing: 1px;
    }
}
@media (max-width: 768px){
    nav{
    display: flex;
    flex-direction: column;
    /* border: 5px solid magenta; */
}
.row{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    background-color: white;
    width: 70%;
    height: 80vh;
}
.row h1{
    line-height: 24px;
    font-size: 20px;
    color: black;
}
.main-nav{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    /* margin-top: 40px; */
    width: 90%;
    margin-left: 20px;
}
.main-nav li{
    font-family: 'BigCaslon';
    font-size: 16px;
    line-height: 21px;
    color: black;
}
.main-text img{
    display: block;
}
.main-text{
    margin: 0;
    padding: 7px 10px;
    display: flex;
    color: black;
    width: 100%;
    justify-content: space-between; 
}
.langaugeList{
    border: 2px solid green;
}
.language-bar{
    display: none;
}
.language-bar-mob{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
#language-mob{
    margin-left: -5px;
}
.main-nav li:hover{
    border: none;
}
.phone-logo span{
    position: absolute;
    display: none;
    top: 40px;
    left: 50%;
}
.language-bar-mob div{
    display: flex;
    justify-content: flex-start;
}
.languageList{
    width: 100%;
}
.language-bar-mob span{
    margin-right: 20px;
}
.facebook-mob{
    display: block;
    /* position: absolute; */
    /* top: 78px; */
    /* left: 60%; */
}
.close-button span{
    display: block;
    float: right;
}
.phone-mob{
    display: block;
}
.facebook-logo span{
    display: none;
}
.phone-number span{
    display: none;
}
.hideMobile{
    display:none;
}
}


</style>