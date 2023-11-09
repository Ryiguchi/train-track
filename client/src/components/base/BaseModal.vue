<script setup lang="ts">
const emits = defineEmits<{
  overlay: [];
}>();

function handleOverlay() {
  emits('overlay');
}
</script>

<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped lang="sass">


dialog
  position: absolute
  top: 40%
  left: 50%
  transform: translate(-50%, -50%)
  z-index: 100
  width: calc( 100% - 4.8rem )
  max-width: 40rem
  height: fit-content
  background-color: $c-dkst
  border: 1px solid $c-lt
  border-radius: $br_lg
  padding: $sp_7 $sp_6
</style>
