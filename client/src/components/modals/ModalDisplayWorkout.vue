<script setup lang="ts">
import type { Workout } from '@/lib/graphQL/gql/graphql';
import WorkoutHeader from '../workout/WorkoutHeader.vue';
import { ref, type PropType } from 'vue';
import { useGroups } from '@/utils/composables/useGroups';
import BaseWorkoutTable from '../base/BaseWorkoutTable.vue';
import BaseButton from '../base/BaseButton.vue';

const { date, workout, color } = defineProps({
  date: {
    type: String,
    required: true,
  },

  workout: {
    type: Object as PropType<Workout | null>,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: 'blue',
  },
});

const emits = defineEmits<{ close: [] }>();
</script>

<template>
  <section v-if="workout">
    <WorkoutHeader class="header" :color="color">{{ date }}</WorkoutHeader>
    <BaseWorkoutTable :sets="workout.sets" :color="color" />
    <BaseButton color="ghost" size="sm" @click="emits('close')"
      >close</BaseButton
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
@/config/gql/graphql
