<script setup lang="ts">
import CalenderPagination from '@/components/Calender/CalenderPagination.vue';
import CalenderComponent from '../Calender/CalenderComponent.vue';

import type { PropType } from 'vue';

// PROPS
const { days, displayedDate, changeMonthFn, legend, onClickFn } = defineProps({
  days: {
    type: Array as PropType<ICalenderDay[]>,
    required: true,
  },
  displayedDate: {
    type: String,
    required: true,
  },
  changeMonthFn: {
    type: Function as PropType<TChangeMonthFn>,
    required: true,
  },
  legend: {
    type: Array as PropType<{ name: string; color: string }[]>,
    required: true,
  },
  onClickFn: {
    type: Function as PropType<(date: string) => void>,
    required: true,
  },
});
</script>

<template>
  <div class="w-full">
    <CalenderPagination
      :displayedDate="displayedDate"
      :changeMonthFn="changeMonthFn"
    />
    <CalenderComponent :days="days" :legend="legend" :onClickFn="onClickFn" />
  </div>
</template>

<style scoped lang="sass"></style>
