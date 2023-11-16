<script setup lang="ts">
import WorkoutForm from '@/components/Workout/WorkoutForm.vue';
import WorkoutPrevious from '@/components/Workout/WorkoutPrevious.vue';
import BaseTitle from '@/components/Base/BaseTitle.vue';

import { computed } from 'vue';

import { useExercises } from '@/utils/composables/useExercises';

// PROPS
const { slug } = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

// COMPOSABLES
const { getExerciseFromSlug } = useExercises();

// REFS
const title = computed(() => getExerciseFromSlug(slug).name);
const color = computed(() => getExerciseFromSlug(slug).group.color);
</script>

<template>
  <main>
    <BaseTitle>{{ title }}</BaseTitle>
    <WorkoutForm />
    <WorkoutPrevious :id="getExerciseFromSlug(slug).id" />
  </main>
</template>

<style scoped lang="sass">
main
  display: flex
  flex-direction: column
  gap: $sp_6
  align-items: center
  margin-top: $sp_10
</style>
