<script setup lang="ts">
import IconLeftArrow from '../Icon/IconLeftArrow.vue';
import IconCalender from '../Icon/IconCalender.vue';
import IconHome from '../Icon/IconHome.vue';
import IconHamburger from '../Icon/IconHamburger.vue';
import IconStatistics from '@/components/Icon/IconStatistics.vue';
import TheMobileMenu from './TheMobileMenu.vue';

import { useRouter, useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useUserStore } from '@/stores/user.store';

// USER STORE
const { isSignedIn } = storeToRefs(useUserStore());

// ROUTER
const router = useRouter();
const route = useRoute();

// REFS
const isMenuOpen = ref(false);

const calenderExercisePath = computed(() => {
  return route.name === 'exercise'
    ? `/calender/${route.params.slug}`
    : '/calender';
});

// FUNCTIONS
function goBack() {
  router.go(-1);
}

function openMenu() {
  isMenuOpen.value = true;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<template>
  <header v-if="isSignedIn">
    <div class="center"><IconLeftArrow @click="goBack" /></div>
    <div class="left-side center">
      <nav class="center">
        <RouterLink to="/">
          <IconHome />
        </RouterLink>
        <RouterLink :to="calenderExercisePath">
          <IconCalender />
        </RouterLink>
        <RouterLink to="/statistics">
          <IconStatistics />
        </RouterLink>
      </nav>
    </div>
    <div class="center" @click="openMenu">
      <IconHamburger />
    </div>
  </header>
  <Transition name="menu">
    <TheMobileMenu :isMenuOpen="isMenuOpen" @closeMenu="closeMenu" />
  </Transition>
</template>

<style scoped lang="sass">
header
  width: 100%
  height: 6.6rem
  padding: $sp_1 0
  display: flex
  align-content: center
  justify-content: space-between

  .left-side
    gap: $sp_2

  nav
    gap: $sp_4

.menu-enter-from,
.menu-leave-to
  transform: translateX(100%)

.menu-enter-to,
.menu-leave-from
  transform: translateX(0)

.menu-enter-active
  transition: all .3s
.menu-leave-active
  transition: all .3s ease-out
</style>
@/lib/composables/header.composables@/lib/composables/axios.composables
