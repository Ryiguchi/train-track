<script setup lang="ts"></script>

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
  background: $gradient
  border: 1px solid $c1
  border-radius: $br-lg
  padding: $sp_7 $sp_6
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4)
</style>
