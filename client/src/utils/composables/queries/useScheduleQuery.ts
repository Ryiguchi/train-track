import { SCEDULE_QUERY } from '@/lib/graphQL/queries';
import { useCalenderStore } from '@/stores/calender.store';
import { useUserStore } from '@/stores/user.store';
import { useQuery } from '@urql/vue';
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

export function useScheduleQuery(): TUseScheduleQueryReturn {
  const { userId } = storeToRefs(useUserStore());
  const { setSchedule } = useCalenderStore();

  const { data, error, fetching } = useQuery({
    query: SCEDULE_QUERY,
    variables: { userId: userId.value! },
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
