<template>
    <div class="container">
        <div class="contact-container">
            <div class="contact">
                CONTACT
            </div>
            <div class="additonal-info">
                <p>PHONE: <span>{{ contact.phone }}</span></p>
                <p>E-MAIL: <span>{{ contact.email }}</span></p>
                <p>ADRESS: <span>{{ contact.address }}</span></p>
            </div>
        </div>
        <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.8739340779516!2d43.527764515436935!3d41.744811979232956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d276e3d7e93%3A0xf8903b47b3b8245a!2sHilltop%20Bakuriani!5e0!3m2!1ska!2sge!4v1611562952104!5m2!1ska!2sge" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            link: {
                hash: '#contact'
            },
        }
    },
    computed: {
    contact() {
        return this.$store.getters.contact
      },
    language() {
         return this.$store.getters.getGlobalLanguage;
    }
    },
    mounted() {
    this.$store.dispatch('contact');
  },
  watch: {
      language(){
          this.$store.dispatch('contact');
      }
  }
}
</script>
<style scoped>
p{
    line-height: 30px;
    font-size: 22px;
    margin-bottom: 11px;
}
.additonal-info{
    border-left: 1px solid #464646;
    padding-right: 50px;
    align-self: center;
    margin-left: 54px;
    padding-left: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    line-height: 19px;
    font-family: 'LarsseitMedium';
}

.additonal-info p span{
    font-weight: 700;
}
.contact{
    font-size: 30px;
    line-height: 36px;
    color: #464646;
    font-family: 'Larsseit';
    border-left: 1px solid white;
    position: absolute;
    top: -20%;
}
.contact-container{
    display: flex;
    align-items: center;
    border-left: 1px solid #56D9D4;
    background-color: white;
    width: 33%;
    height: 337px;
    z-index: 20;
    align-self: center;
    position: relative;
    left: 2%;
    box-shadow: 1px 2px 3px rgba(116, 116, 116, 0.349);
}

.container{
    margin-top: 202px;
    margin-bottom: 100px;
    width: 100%;
    display: flex;
}
.map-container{
    width: 70%;
    float: right;
    height: 784px;
    z-index: 10;
    position: relative;
}
.map-container iframe{
    width: 100%;
    float: right;
    height: 100%;
}
@media (max-width: 768px){
    .container{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .contact-container{
        width: 100%;
        height: fit-content;
    }
    .contact{
        width: 100%;
        text-align: center;
        line-height: 24px;
        font-size: 20px;
    }
    .additonal-info{
        width: 100%;
        padding: 0 0 0 10px;
        margin: 10px;
        border-left: 1px solid #56D9D4;
    }
    .additonal-info p {
        margin-top: 10px;
        line-height: 19px;
        font-size: 16px;
    }
    .map-container{
        width: 100%;
        height: 260px;
        margin-top: 30px;
    }
}
</style>