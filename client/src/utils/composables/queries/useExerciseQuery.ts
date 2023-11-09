import { useQuery } from '@urql/vue';
import { useUserStore } from '@/stores/user.store';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { EXERCISES_AND_GROUPS_QUERY } from '@/lib/graphQL/queries';
import { useCalenderStore } from '@/stores/calender.store';

export function useExercisesQuery(): TExerciseReturn {
  const { userId } = storeToRefs(useUserStore());
  const { setLegend } = useCalenderStore();

  const { data, error, fetching, executeQuery } = useQuery({
    query: EXERCISES_AND_GROUPS_QUERY,
    variables: { userId: userId.value! },
  });

  const exercises = computed(() => {
    if (fetching.value || error.value || !data.value || !data.value.exercises) {
      return [];
    } else {
      return data.value.exercises;
    }
  });

  const exerciseNames = computed(() => {
    return exercises.value.map(item => {
      return item.name;
    });
  });

  const groups = computed(() => {
    if (fetching.value || error.value || !data.value || !data.value.groups) {
      return [];
    } else {
      setLegend(data.value.groups);
      return data.value.groups;
    }
  });

  const groupNames = computed(() => {
    return groups.value.map(group => group.name);
  });

  const isTodaysGroupSet = computed(() => {
    if (
      fetching.value ||
      error.value ||
      !data.value ||
      !data.value.isTodaysGroupSet
    ) {
      return false;
    }

    return true;
  });

  return {
    data,
    exercises,
    exerciseNames,
    groups,
    groupNames,
    isTodaysGroupSet,
    error,
    fetching,
    executeQuery,
  };
}
