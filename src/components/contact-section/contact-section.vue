<template>
    <div class="container">
        <div class="contact-container">
            <div class="contact">
                CONTACT
            </div>
            <div class="additonal-info">
                <p>Phone: +995 555 555 555</p>
                <p> e-mail: hiltop@bakuriani.com</p>
                <p>adress: bakuriani</p>
            </div>
        </div>
        <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.8739340779516!2d43.527764515436935!3d41.744811979232956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d276e3d7e93%3A0xf8903b47b3b8245a!2sHilltop%20Bakuriani!5e0!3m2!1ska!2sge!4v1611562952104!5m2!1ska!2sge" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    </div>
</template>

<style scoped>
p{
    line-height: 30px;
    font-size: 22px;
    margin-bottom: 11px;
}
.additonal-info{
    padding: 90px;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.contact{
    font-size: 40px;
    line-height: 53px;
    color: #464646;
}
.contact-container{
    background-color: white;
    width: 33%;
    height: 337px;
    z-index: 20;
    align-self: center;
    position: relative;
    left: 2%;
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

</style>