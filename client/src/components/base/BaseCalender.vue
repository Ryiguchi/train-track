<script setup lang="ts">
import CalenderPagination from '@/components/calender/CalenderPagination.vue';
import CalenderComponent from '../calender/CalenderComponent.vue';
import type { PropType } from 'vue';

const { days, legend, displayedDate, changeMonthFn } = defineProps({
  days: {
    type: Array as PropType<ICalenderDay[]>,
    required: true,
  },
  legend: {
    type: Array as PropType<ICalenderLegendItem[]>,
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
