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
</script>

<template>
  <button :class="[color, size]">
    <slot></slot>
  </button>
</template>

<style scoped lang="sass">
button
  @include text-button
  border: none
  border-radius: $br_md

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

  &.small
    width: 13.5rem
    height: 4rem
    font-size: $fs_1

  &.sm
    width: fit-content
    min-width: 21rem
    padding: 0 $sp_8
    height: 4rem

  &.lg
    width: 100%
    height:  5rem
    padding: 0 $sp_8
</style>
