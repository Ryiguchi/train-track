<script setup lang="ts">
import type { PropType } from 'vue';
import WorkoutTableSet from '../workout/WorkoutTableSet.vue';
import type { Set } from '@/lib/graphQL/gql/graphql';

// PROPS
const { sets } = defineProps({
  sets: {
    type: Array as PropType<Set[]>,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: 'dark',
  },
});
</script>

<template>
  <ul>
    <WorkoutTableSet
      v-for="set in sets"
      :set="set"
      :key="set.id"
      :color="color"
    />
  </ul>
</template>

<style scoped lang="sass">
ul
  display: flex
  flex-direction: column
  justify-content: center
  list-style: none
  @include text-sm
</style>
@/config/gql/graphql
