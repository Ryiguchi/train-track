import type { Workout } from '@/lib/graphQL/gql/graphql';
import { WORKOUTS_QUERY } from '@/lib/graphQL/queries';
import { useSavedWorkoutsStore } from '@/stores/savedWorkouts.store';
import { useQuery } from '@urql/vue';
import { watch } from 'vue';

export function useWorkoutsQuery() {
  const { setWorkouts } = useSavedWorkoutsStore();

  const { data, error, fetching } = useQuery({
    query: WORKOUTS_QUERY,
  });

  watch(data, value => {
    if (!value) return;

    setWorkouts(value.workouts as Workout[]);
  });
}
