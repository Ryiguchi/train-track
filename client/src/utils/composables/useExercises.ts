import type { Exercise } from '@/lib/graphQL/gql/graphql';
import { useExercisesQuery } from './queries/useExerciseQuery';

export function useExercises() {
  const { exercises } = useExercisesQuery();

  function filterByGroup(group: string) {
    return exercises.value.filter(item => item.group.name === group);
  }

  function getSlugFromName(exerciseName: string) {
    const exercise = exercises.value.find(item => item.name === exerciseName);
    return exercise?.slug;
  }

  function getExerciseFromSlug(slug: string) {
    return exercises.value.find(item => item.slug === slug) as Exercise;
  }

  function getIdFromSlug(slug: string) {
    return exercises.value.find(item => item.slug === slug)?.id;
  }

  return {
    filterByGroup,
    getSlugFromName,
    getExerciseFromSlug,
    getIdFromSlug,
  };
}
