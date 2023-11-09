<script setup lang="ts">
import { useExercises } from '@/utils/composables/useExercises';

import WorkoutForm from './WorkoutForm.vue';
import WorkoutPrevious from './WorkoutPrevious.vue';
import { computed } from 'vue';
import BaseTitle from '@/components/base/BaseTitle.vue';

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
    <BaseTitle :color="color">{{ title }}</BaseTitle>
    <WorkoutForm :color="color" />
    <WorkoutPrevious :color="color" :id="getExerciseFromSlug(slug).id" />
  </main>
</template>

<style scoped lang="sass">
main
  display: flex
  flex-direction: column
  gap: $sp_10
  align-items: center
  margin-top: $sp_10
</style>
