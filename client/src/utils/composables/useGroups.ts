import { createSlug } from '../helpers/general.helpers';
import { useExercisesQuery } from './queries/useExerciseQuery';

export function useGroups() {
  const { groups, exercises } = useExercisesQuery();

  function getIdFromName(name: string) {
    return groups.value.find(group => group.name === name)?.id;
  }

  function getGroupColorBySlug(slug: string) {
    const convertedSlug = createSlug(slug);

    const exercise = exercises.value.find(
      exercise => exercise.slug === convertedSlug
    );

    if (!exercise) return;

    const color = groups.value.find(
      group => group.name === exercise.group.name
    )?.color;

    return color;
  }

  return {
    getIdFromName,
    getGroupColorBySlug,
  };
}
