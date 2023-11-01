<script setup lang="ts">
const emits = defineEmits<{
  overlay: [];
}>();

function handleOverlay() {
  emits('overlay');
}
</script>

<template>
  <div class="overlay" @click="handleOverlay"></div>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped lang="sass">
.overlay
  position: absolute
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  background-color: rgba(0, 0, 0, .1)
  z-index: 50
  backdrop-filter:  blur(2px)

dialog
  position: absolute
  top: 40%
  left: 50%
  transform: translate(-50%, -50%)
  z-index: 100
  width: calc( 100% - 4.8rem )
  height: fit-content
  background-color: $c-dkst
  border: 1px solid $c-lt
  border-radius: $br_lg
  padding: $sp_7 $sp_6
</style>
