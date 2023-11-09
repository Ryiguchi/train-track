<script setup lang="ts">
import { capitalize, type PropType } from 'vue';

const daysOfWeek = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su'];

const { days } = defineProps({
  days: {
    type: Array as PropType<ICalenderDay[]>,
    required: true,
  },
  legend: {
    type: Array as PropType<{ name: string; color: string }[]>,
  },
  onClickFn: {
    type: Function as PropType<(date: string) => void>,
    required: true,
  },
});

function getClasses(day: ICalenderDay) {
  return `${day.color} ${day.currentMonth ? '' : 'grayscale'}`;
}

function isToday(date: string) {
  const today = new Date().setHours(0, 0, 0, 0);
  const givenDate = new Date(date).setHours(0, 0, 0, 0);
  return today === givenDate;
}
</script>

<template>
  <div class="grid">
    <div v-for="day in daysOfWeek" class="days-of-week" :key="day">
      {{ day }}
    </div>
    <div
      v-for="day in days"
      :class="[getClasses(day), { today: isToday(day.date) }]"
      class="calender-day"
      @click="onClickFn(day.date)"
      :key="day.date"
    >
      <span>
        {{ day.dayNum }}
      </span>
    </div>
  </div>
  <legend>
    <div v-for="item in legend" class="legend-item-wrapper">
      <div class="legend-item-box" :class="item.color"></div>
      <label> {{ capitalize(item.name) }}</label>
    </div>
  </legend>
</template>

<style scoped lang="sass">
.grid
  display: grid
  grid-template-columns: repeat(7, 1fr)
  grid-template-rows: repeat(7, 60px)
  width: 100%
  gap: 1px
  margin-bottom: $sp_4

  div
    padding: $sp_0
    width: 100%
    height: 100%
    text-align: end

    &:nth-child(8)
      border-radius: $br_sm 0 0 0
    &:nth-child(14)
      border-radius: 0 $br_sm 0 0
    &:nth-child(43)
      border-radius: 0 0 0 $br_sm
    &:nth-child(49)
      border-radius: 0 0 $br_sm 0

    &.days-of-week
      display: flex
      align-items: end
      justify-content: center
      padding-bottom: $sp_3
      color: $c-lt
      font-weight: 600
      letter-spacing: 1.2px

    &.calender-day
      background-color: $c-lt

    &.orange
      background-color: $c1-lt
    &.blue
      background-color: $c2-lt
    &.green
      background-color: $c3
    &.grayscale
      opacity: 45%
      color: #555

    &.today
      padding: 3px
      span
        display: inline-flex
        align-items: center
        justify-content: center
        color: #ccc
        background-color: $c-dk
        width: 1.6rem
        height: 1.6rem
        border-radius: 50%
        text-align: end

legend
  display: flex
  align-items: center
  justify-content: center
  gap: $sp_8
  font-size: $fs_1
  color: $c-lt

  .legend-item-wrapper
    display: flex
    align-items: center
    gap: $sp_3

  .legend-item-box
    width: 1.6rem
    height: 1.6rem
    border-radius: 3px

    &.orange
      background-color: $c1-lt
    &.blue
      background-color: $c2-lt
    &.green
      background-color: $c3
</style>
