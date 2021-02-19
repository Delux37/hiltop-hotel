<template>
    <nav>
        <div class="row"
            :class="{whiteSection: isActive, hideMobile: !isMobileNavBarShown}"
        >
            <h1 class="main-text" 
            @click="$router.push({ name: 'homePage' })"
            :class="{movingNavMainText: isActive}">Hiltop Bakuriani
                <span @click="toggleMobileNav"><img src="../../assets/material-close.svg"/></span>
            </h1>
            <ul class="main-nav"
                v-if="navList"
                :class="{active: isActive}"
                >
                <a
                v-for="item in navList.navBar" :key="item"
                :href="'#' + item"
                :class="{geoFont: languageList !== 'ENG'}"
                >
                    {{ item }}
                </a >
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

                <li class="phone-logo"><span><img src="../../assets/feather-phone.svg"/></span></li>
                <li class="phone-number"><span>+995 555 555 555</span></li>
                <li v-if="isActive" class="facebook-logo"><span><img src="../../assets/facebookmobblack.png"/></span></li>
                <li v-else class="facebook-logo"><span><img src="../../assets/ionic-logo-facebook.svg"/></span></li>

                <li class="select ">
                    <div class="selected_wrapper" @click="toggleShown">
                        <p>{{ selected }}</p>
                        <img v-if="!isActive" :class="{selected: shown}" id="downarrow" src="../../assets/down-arrow-white.svg"/>
                        <img v-else :class="{selected: shown}" id="downarrowBlack" src="../../assets/downarrow1.svg"/>
                    </div>
                    <div v-if="shown" class="items">
                        <div class="item" @click="changeLanguage(lan)" v-for="lan in lans" :key=lan>{{ lan }}</div>
                    </div>
                </li>               
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    props: ['isActive'],
    data() {
        return {
            lans: ['eng', 'rus', 'geo'],
            selected: this.$store.getters.dynamicLang,
            shown: false,
            selectedComponent: 'Home',
        }
    },
    methods: {
        changeLanguage(lan){
            this.selected = lan;
            this.$store.dispatch('setLanguage', lan);
            this.toggleShown();
        },
        toggleShown(){
            this.shown = !this.shown;
        },
        toggleMobileNav(){
            this.$store.dispatch('toggleMobileNavBar')
        },
        emitHome(value){
            this.$emit('testFunction', value);
        }
    },
    computed: {
        isMobileNavBarShown(){
            return this.$store.getters.isMobileNavBarShown
        },
        languageList(){
            return this.$store.getters.dynamicLang
        },
        navList(){
            return this.$store.getters.dynamicNav;
        }
    },
}
</script>
<style scoped>
.geoFont{
    font-family: 'ArialCaps';
    line-height: 26px;
    font-size: 22px;
}
.row{
    width: 96%;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
}
.main-text:hover{
    cursor: pointer;
}
.main-text{
    font-family: 'BigCaslonMedium';
    letter-spacing: 3px;
    font-size: 35px;
    color: white;
    margin-left: 20px;
}
.main-nav{
    list-style: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: 3px;
    margin-right: 30px;
    }

.main-nav a,
.main-nav li {
    vertical-align: center;
    text-decoration: none;
    font-family: 'larsseit-light';
    display: inline-block;
    font-size: 22px;
    margin-left: 20px;
    line-height: 30px;
    color: #FFF;   
    border-bottom: 2px solid rgba(105, 88, 88, 0);
    text-transform: uppercase;
}

.main-nav a:hover{
    border-bottom: 2px solid #56D9D4;
    cursor: pointer;
}

.phone-logo{
    position: relative;
    top: 2px;
    margin-right: -10px;
}
.phone-number{

}
.select:hover{
    cursor: pointer;
}
#downarrow{
    border-bottom: none;
}
#downarrowBlack{
    border-bottom: none;
    margin-left: 2px;
}
.selected{
    transform: scaleY(-1);
}
.selected_wrapper{
    display: flex;
}
.items{
    background-color: white;
    color: black;
    position: absolute;
    text-transform: lowercase;
    padding: 10px 1.4%; 
    font-size: 20px;
}
.item{
    border-bottom: 1px solid rgba(255, 255, 255, 0);
}
.item:hover{
    border-bottom: 1px solid #56D9D4;
}
#language{
    background: none;
    color: white;
    outline: none;
    border: none;
    font-size: 22px;
    line-height: 30px;
    font-family:'Larsseit';
}
#language:hover{
    cursor: pointer;
}
#language option{
    color: black;
    font-size: 10px;
    line-height: 15px;
    width: fit-content;
}
#language option span{
    border: 2px solid red;
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

.main-text img{
    display: none;
}


.movingNavMainText{
    color: black;
}
.active li,
.active a{
    color: black;
    margin-bottom: 10px;
}
.active #language{
    color: black;
}

@media(max-width: 1440px){
    .main-nav a,
    .main-nav li{
        font-size: 20px;
        margin-left: 15px;
    }
    .main-text{
     font-size: 30px;
     margin-left: 10px;
    }
}
@media (max-width: 1366px){
 .main-nav a,
 .main-nav li{
        font-size: 20px;
        margin-left: 10px;
        /* color: blue; */
    }

}
@media (max-width: 1280px)
{
    .main-nav a,
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