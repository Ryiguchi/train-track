<script setup lang="ts">
import BaseCalender from '@/components/base/BaseCalender.vue';
import { useCalenderStore } from '@/stores/calender.store';
import { useModalsStore } from '@/stores/modals.store';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();
const { displayedDate, legendItems, isTodaysGroupSet } = storeToRefs(
  useCalenderStore()
);
const { openSetDailyGroupModal } = useModalsStore();

const { changeMonth, getCalenderDaysArray } = useCalenderStore();

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
      :legend="legendItems"
      :onClickFn="handleClickDay"
    />
    <base-button v-if="!isTodaysGroupSet" @click="openSetDailyGroupModal()"
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
