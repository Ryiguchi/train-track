<script setup lang="ts">
import IconLeftArrow from '../icons/IconLeftArrow.vue';
import IconCalender from '../icons/IconCalender.vue';
import IconCalenderSearch from '../icons/IconCalenderSearch.vue';
import IconHome from '../icons/IconHome.vue';

import { useRouter, useRoute } from 'vue-router';
import { computed, ref } from 'vue';

import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user.store';

import { useHeaderButton, useShowIcons } from '@/utils/composables/useHeader';
import { useAxios } from '@/utils/composables/useAxios';

// USER STORE
const { isSignedIn } = storeToRefs(useUserStore());
const { setUser } = useUserStore();

// ROUTER
const router = useRouter();
const route = ref(useRoute());

// COMPOSABLES
const { axios, pending, success, error } = useAxios();

const {
  showIconLeftArrow,
  showIconCalender,
  showIconCalenderSearch,
  showIconHome,
} = useShowIcons(route);

const { buttonColor, buttonText } = useHeaderButton(isSignedIn);

const calenderExercisePath = computed(() => {
  return `/calender/${route.value.params ? route.value.params.slug : ''}`;
});

// FUNCTIONS
function goBack() {
  router.go(-1);
}

async function handleOnClick() {
  const url = `${import.meta.env.VITE_SERVER_BASE_URL}/auth/signout`;
  await axios(url);

  if (success.value) {
    setUser(null);
    router.replace('/signin');
  }

  if (error.value) {
    console.log(error);
  }
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
        <RouterLink to="/" v-if="showIconHome">
          <IconHome />
        </RouterLink>
        <base-button v-if="isSignedIn" color="ghost" @click="handleOnClick"
          >sign out</base-button
        >
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
@/lib/composables/header.composables@/lib/composables/axios.composables
