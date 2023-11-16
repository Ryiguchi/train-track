<script setup lang="ts">
import IconCaretRight from '../Icon/IconCaretRight.vue';

const { text } = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="left-side">
      <div class="center">
        <slot></slot>
      </div>
      <div class="center">
        <p>{{ text }}</p>
      </div>
    </div>
    <div class="center">
      <IconCaretRight />
    </div>
  </div>
</template>

<style scoped lang="sass">
.wrapper
  display: flex
  align-content: center
  justify-content: space-between
  padding: $sp_2 0

  .left-side
    display: flex
    gap: $sp_6

  p
    font-size: $fs_3
    color: $c-lt
</style>
