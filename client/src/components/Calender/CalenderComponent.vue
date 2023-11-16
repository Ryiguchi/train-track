<script setup lang="ts">
import { capitalize, type PropType } from 'vue';

// PROPS
const { days, legend, onClickFn } = defineProps<{
  days: ICalenderDay[];
  legend: { name: string; color: string }[];
  onClickFn: (date: string) => void;
}>();

// VARIABLES
const daysOfWeek = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su'];

// FUNCTIONS
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
      :class="[day.color, { today: isToday(day.date) }]"
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

  .days-of-week
    display: flex
    align-items: end
    justify-content: center
    padding-bottom: $sp_3
    font-weight: 600
    letter-spacing: 1.2px
    color: $c1

  .calender-day
    background: rgba(255,255,255, .1)
    font-weight: 700
    color: $c-lt
    @each $class-name, $color in $colors
      @include color-fill($class-name, $color)
    &.today
      padding: 3px
      span
        display: inline-flex
        align-items: center
        justify-content: center
        color: #ccc
        background-color: $c-dk
        width: 1.8rem
        height: 1.8rem
        border-radius: 50%
        text-align: end

  .days-of-week,
  .calender-day
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

legend
  display: grid
  grid-template-columns: repeat(3, 1fr)
  row-gap: $sp_4
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
      @each $class-name, $color in $colors
        @include color-fill($class-name, $color)
</style>
