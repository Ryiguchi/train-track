<script setup lang="ts">
import IconLeftArrow from '../icons/IconLeftArrow.vue';
import IconCalender from '../icons/IconCalender.vue';
import IconCalenderSearch from '../icons/IconCalenderSearch.vue';
import IconHome from '../icons/IconHome.vue';

import { useRouter, useRoute } from 'vue-router';
import { computed, ref } from 'vue';

import { useModalsStore } from '@/stores/modals.store';

// ROUTER
const router = useRouter();
const route = ref(useRoute());

const calenderExercisePath = computed(() => {
  return `/calender/${route.value.params ? route.value.params.id : ''}`;
});

const showIconLeftArrow = computed(() => {
  return route.value.name !== 'select' && route.value.name !== 'signin';
});

const showIconPlus = computed(() => {
  return route.value.name === 'select';
});

const showIconCalender = computed(() => {
  return (
    route.value.name !== 'signin' &&
    route.value.name !== 'calenderMonth' &&
    route.value.name !== 'exercise'
  );
});

const showIconCalenderSearch = computed(() => {
  return route.value.name === 'exercise';
});

function goBack() {
  router.go(-1);
}
</script>

<template>
  <header>
    <div><IconLeftArrow @click="goBack" v-if="showIconLeftArrow" /></div>
    <div class="left-side">
      <nav>
        <RouterLink to="/calender" v-if="showIconCalender">
          <IconCalender />
        </RouterLink>
        <RouterLink :to="calenderExercisePath" v-if="showIconCalenderSearch">
          <IconCalenderSearch />
        </RouterLink>
        <RouterLink to="/">
          <IconHome />
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="sass">
header
  width: 100%
  height: 6.6rem
  padding: $sp_1 0
  display: flex
  align-content: center
  justify-content: space-between

  div
    display: flex
    align-content: center

  .left-side
    gap: $sp_2

  nav
    display: flex
    align-content: center
    gap: $sp_2
</style>
