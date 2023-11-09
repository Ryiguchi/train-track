<script setup lang="ts">
const { color, size } = defineProps({
  color: {
    type: String,
    required: false,
    default: 'primary',
  },
  size: {
    type: String,
    required: false,
    default: 'lg',
  },
});
const sizeClass = size === 'lg' ? 'button-lg' : 'button-sm';
</script>

<template>
  <button :class="[color, sizeClass]">
    <slot></slot>
  </button>
</template>

<style scoped lang="sass">
button
  @include text-button
  border: none
  border-radius: $br_md
  padding: 0 $sp_8

  &.primary
    background-color: $c1

  &.secondary
    background-color: $c2

  &.ghost
    background-color: transparent
    border: 1px solid $c-lt
    color: $c-lt

  &.ghost-dark
    background-color: rgba(0,0,0,.1)
    border: 1px solid $c-dk
    color: $c-dk

  &.button-sm
    width: fit-content
    min-width: 21rem
    height: 4rem

  &.button-lg
    width: 100%
    height:  5rem
</style>
