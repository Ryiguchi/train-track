import { SCEDULE_QUERY } from '@/lib/graphQL/queries';
import { useCalenderStore } from '@/stores/calender.store';
import { useQuery } from '@urql/vue';
import { watch } from 'vue';
import { computed } from 'vue';

export function useScheduleQuery(): TUseScheduleQueryReturn {
  const { setSchedule } = useCalenderStore();

  const { data, error, fetching } = useQuery({
    query: SCEDULE_QUERY,
  });

  watch(data, value => {
    if (value?.schedule) {
      setSchedule(value.schedule);
    }
  });

  const schedule = computed(() => {
    if (fetching.value || error.value || !data.value || !data.value.schedule) {
      return [];
    }

    return data.value.schedule;
  });

  return {
    schedule,
  };
}
