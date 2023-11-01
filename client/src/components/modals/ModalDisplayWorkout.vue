<script setup lang="ts">
import WorkoutHeader from '../workout/WorkoutHeader.vue';
import type { PropType } from 'vue';

const { date } = defineProps({
  date: {
    type: String,
    required: true,
  },

  workout: {
    type: Object as PropType<IWorkout | null>,
    required: true,
  },
});

const emits = defineEmits<{ close: [] }>();
</script>

<template>
  <section>
    <WorkoutHeader class="header" color="secondary">{{ date }}</WorkoutHeader>
    <base-workout-table :workout="workout?.sets" color="secondary" />
    <base-button color="ghost" size="sm" @click="emits('close')"
      >close</base-button
    >
  </section>
</template>

<style scoped lang="sass">
section
  display: flex
  flex-direction: column
  align-items: center
  gap: $sp_6

button
  margin-top: $sp_4
</style>
