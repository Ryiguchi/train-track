import type { Workout } from '@/lib/graphQL/gql/graphql';
import { WORKOUTS_QUERY } from '@/lib/graphQL/queries';
import { useSavedWorkoutsStore } from '@/stores/savedWorkouts.store';
import { useUserStore } from '@/stores/user.store';
import { useQuery } from '@urql/vue';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

export function useWorkoutsQuery() {
  const { userId } = storeToRefs(useUserStore());
  const { setWorkouts } = useSavedWorkoutsStore();

  const { data, error, fetching } = useQuery({
    query: WORKOUTS_QUERY,
    variables: { userId: userId.value! },
  });

  watch(data, value => {
    if (!value) return;

    setWorkouts(value.workouts as Workout[]);
  });
}
