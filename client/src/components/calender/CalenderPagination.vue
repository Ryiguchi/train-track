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
});
</script>

<template>
  <div class="wrapper">
    <IconCaretLeft @click="changeMonthFn('back')" />
    <h1>{{ displayedDate }}</h1>
    <IconCaretRight @click="changeMonthFn('forward')" />
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
    color: $c2-lt
</style>
