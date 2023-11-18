import { SCHEDULE_QUERY } from '@/lib/graphQL/queries';
import { useCalenderStore } from '@/stores/calender.store';
import { useUserStore } from '@/stores/user.store';
import { useQuery } from '@urql/vue';
import { watch } from 'vue';
import { computed } from 'vue';

export function useScheduleQuery(): TUseScheduleQueryReturn {
  const { setSchedule } = useCalenderStore();
  const { user } = useUserStore();

  const { data, error, fetching } = useQuery({
    query: SCHEDULE_QUERY,
    variables: { userId: user!.id },
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
