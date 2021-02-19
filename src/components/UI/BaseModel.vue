<template>
   <div>
    <div class="backdrop" @click="$emit('close')"></div>
    <transition name="modal">
        <dialog open>
           <slot></slot>
        </dialog>
    </transition>
   </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.425);
  /* background-color: white; */
}

dialog {
  position: fixed;
  /* overflow: hidden; */
  width: 70%;
  height: 65vh;
  top: calc(50vh - 30vh);
  margin: 0 auto;
  z-index: 701;
  border: none;
  
  /* animation: modal 0.3s ease-out forwards; */
}

@media(max-width: 1660px){
  dialog {
    top: 17%;
  }
}

@media(max-width: 1330px){
    dialog {
    top: 12%;
  }
}


@media (max-width: 1280px){
      dialog {
    top: 12%;
  }
}

</style>
