import { PREVIOUS_WORKOUT_QUERY } from '@/lib/graphQL/queries';
import { useQuery } from '@urql/vue';
import { computed } from 'vue';

export function usePreviousWorkoutQuery(
  exerciseId: number
): TUsePreviosQueryReturn {
  const { data, error, fetching } = useQuery({
    query: PREVIOUS_WORKOUT_QUERY,
    variables: { exerciseId },
  });

  const previousWorkoutSets = computed(() => {
    if (
      fetching.value ||
      error.value ||
      !data.value ||
      !data.value?.previousWorkout
    )
      return [];
    return data.value.previousWorkout.sets;
  });

  return {
    previousWorkoutSets,
  };
}
