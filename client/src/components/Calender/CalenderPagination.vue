<script setup lang="ts">
import IconCaretLeft from '../Icon/IconCaretLeft.vue';
import IconCaretRight from '../Icon/IconCaretRight.vue';

// PROPS
const { displayedDate, changeMonthFn } = defineProps<{
  displayedDate: string;
  changeMonthFn: TChangeMonthFn;
}>();
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
    color: $c1
</style>
