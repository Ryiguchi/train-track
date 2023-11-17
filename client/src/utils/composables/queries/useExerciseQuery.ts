import { useQuery } from '@urql/vue';
import { computed } from 'vue';
import { EXERCISES_AND_GROUPS_QUERY } from '@/lib/graphQL/queries';
import { useCalenderStore } from '@/stores/calender.store';

export function useExercisesQuery(): TExerciseReturn {
  const { setLegend } = useCalenderStore();

  const { data, error, fetching, executeQuery, stale } = useQuery({
    query: EXERCISES_AND_GROUPS_QUERY,
  });

  const exercises = computed(() => {
    if (fetching.value || error.value || !data.value || !data.value.exercises) {
      return [];
    } else {
      return data.value.exercises;
    }
  });

  const exerciseNames = computed(() => {
    return exercises.value
      .map(item => {
        return item.name;
      })
      .sort();
  });

  const groups = computed(() => {
    if (fetching.value || error.value || !data.value || !data.value.groups) {
      return [];
    } else {
      setLegend(data.value.groups);
      return data.value.groups as IGroupWithEnum[];
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

  function refreshExercises() {
    executeQuery({
      requestPolicy: 'network-only',
    });
  }

  return {
    data,
    exercises,
    exerciseNames,
    groups,
    groupNames,
    isTodaysGroupSet,
    error,
    fetching,
    refreshExercises,
  };
}
