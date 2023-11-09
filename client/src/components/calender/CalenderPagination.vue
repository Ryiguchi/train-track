<script setup lang="ts">
import type { PropType } from 'vue';
import IconCaretLeft from '../icons/IconCaretLeft.vue';
import IconCaretRight from '../icons/IconCaretRight.vue';

const { displayedDate, changeMonthFn } = defineProps({
  displayedDate: {
    type: String,
    required: true,
  },
  changeMonthFn: {
    type: Function as PropType<TChangeMonthFn>,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: 'blue',
  },
});
</script>

<template>
  <div class="wrapper">
    <IconCaretLeft :color="color" @click="changeMonthFn('back')" />
    <h1 :class="color">{{ displayedDate }}</h1>
    <IconCaretRight :color="color" @click="changeMonthFn('forward')" />
  </div>
</template>

<style scoped lang="sass">
.wrapper
  display: flex
  align-items: center
  justify-content: space-between
  width: 100%

  h1
    @include text-calender-header

    &.orange
      color: $c1-lt

    &.blue
      color: $c2-lt

    &.green
      color: $c3
</style>
