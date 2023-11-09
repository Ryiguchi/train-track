<script setup lang="ts">
import CalenderPagination from '@/components/calender/CalenderPagination.vue';
import CalenderComponent from '../calender/CalenderComponent.vue';
import type { PropType } from 'vue';

const { days, displayedDate, changeMonthFn } = defineProps({
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
  color: {
    type: String,
    required: false,
    default: 'blue',
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
      :color="color"
      :displayedDate="displayedDate"
      :changeMonthFn="changeMonthFn"
    />
    <CalenderComponent :days="days" :legend="legend" :onClickFn="onClickFn" />
  </div>
</template>

<style scoped lang="sass"></style>
