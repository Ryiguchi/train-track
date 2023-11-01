<script setup lang="ts">
const { color } = defineProps({
  color: {
    type: String,
    required: false,
    default: 'dark',
  },
});
</script>

<template>
  <div class="heading" :class="color">
    <span>weight</span>
    <span>reps</span>
  </div>
</template>

<style scoped lang="sass">
.heading
  display: flex
  justify-content: center
  gap: $sp_8
  padding:  $sp_1 0
  @include text-dt
  &.dark
    color: $c-dk
  &.primary
    color: $c1-lt
  &.secondary
    color: $c2-lt
</style>
