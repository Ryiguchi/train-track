<script setup lang="ts">
import BaseCalender from '@/components/Base/BaseCalender.vue';

import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

import { useCalenderStore } from '@/stores/calender.store';
import { useModalsStore } from '@/stores/modals.store';

import { useExercisesQuery } from '@/utils/composables/queries/useExerciseQuery';
import { useScheduleQuery } from '@/utils/composables/queries/useScheduleQuery';
import { legendValidator } from '@/lib/types/zod';

// STORE
const { displayedDate } = storeToRefs(useCalenderStore());
const { changeMonth, getCalenderDaysArray } = useCalenderStore();
const { openSetDailyGroupModal } = useModalsStore();

// QUERY
useScheduleQuery();
const { isTodaysGroupSet, groups } = useExercisesQuery();

// COMPOSABLES
const router = useRouter();

//FUNCTIONS
function handleClickDay(date: string) {
  router.push(`/workout/${date}`);
}
</script>

<template>
  <main>
    <BaseCalender
      :displayedDate="displayedDate"
      :changeMonthFn="changeMonth"
      :days="getCalenderDaysArray()"
      :legend="legendValidator.parse(groups)"
      :onClickFn="handleClickDay"
    />
    <base-button
      v-if="!isTodaysGroupSet"
      @click="openSetDailyGroupModal()"
      color="secondary"
      >Set Today's group</base-button
    >
  </main>
</template>

<style scoped lang="sass">
main
  margin-top: $sp_12

  button
    margin-top: $sp_12
</style>
