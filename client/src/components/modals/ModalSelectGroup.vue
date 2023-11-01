<script setup lang="ts">
import { useCalenderStore } from '@/stores/calender.store';
import { useModalsStore } from '@/stores/modals.store';
import uniqid from 'uniqid';

const { addSchedule } = useCalenderStore();
const { closeSetDailyGroupModal } = useModalsStore();

const options = ['push', 'pull', 'legs'];

function handleSubmit(option: string) {
  const scheduleData = {
    id: uniqid(),
    group: option,
    date: new Date().toISOString().slice(0, 10),
  };
  addSchedule(scheduleData);
  closeSetDailyGroupModal();
}

function handleCancel() {
  closeSetDailyGroupModal();
}
</script>

<template>
  <base-radio-buttons
    :options="options"
    @submit="handleSubmit"
    @cancel="handleCancel"
  >
    Choose a workout group for today:
    <template v-slot:button>Set workout</template>
  </base-radio-buttons>
</template>

<style scoped lang="sass"></style>
