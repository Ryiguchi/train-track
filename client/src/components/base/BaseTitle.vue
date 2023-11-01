<script setup lang="ts">
const { color } = defineProps({
  color: {
    type: String,
    required: false,
    default: 'ghost',
  },
});
</script>

<template>
  <h1 :class="color">
    <slot></slot>
  </h1>
</template>

<style scoped lang="sass">
h1
  padding: $sp_1 $sp_4
  border-radius: $br_md
  width: fit-content
  text-align: center
  @include text-h1

  &.primary
    background-color: $c1-lt

  &.secondary
    background-color: $c2-lt

  &.ghost
    background: transparent
    color: $c-lt
    border-bottom:  1px solid $c2-lt
    border-radius: 0
    padding: $sp_1 $sp_7
</style>
