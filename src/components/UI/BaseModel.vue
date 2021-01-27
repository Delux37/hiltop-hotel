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

<script>
export default {
  props: ['open'],
  emits: ['close'],
};
</script>

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

  width: 70%;
  left: calc(50% - 35%);
  top: 20%;
  margin: 0;
  padding: 0;
  z-index: 101;
  border: none;
  /* animation: modal 0.3s ease-out forwards; */
}
</style>