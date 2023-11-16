<script setup lang="ts">
import type { PropType } from 'vue';

const { set, color } = defineProps({
  set: {
    type: Object as PropType<IWorkoutSetData>,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: 'dark',
  },
});

const formattedSet = `Set ${set.setNum}:`;
const formattedWeight = `${set.weight} kg`;
const formattedReps = `${set.reps} reps`;
</script>

<template>
  <li :class="color">
    <span class="set">{{ formattedSet }}</span>
    <span>{{ formattedWeight }}</span>
    <span class="reps">{{ formattedReps }}</span>
  </li>
</template>

<style scoped lang="sass">
li
  display: flex
  align-items: center
  height: 4rem

  span
    width: 7rem
    text-align: end
    // color: $c1
    &.set
      text-align: start
    &.reps
      margin-left: $sp_6

  &.primary
    color: $c1
  &.dark
    color: $c-dk
</style>
