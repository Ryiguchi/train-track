<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from './components/UI/TheHeader.vue';
import TheModals from './components/UI/TheModals.vue';
import { onMounted } from 'vue';
import { ax } from './config/axios.config';
import { useUserStore } from './stores/user.store';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import TheToast from './components/UI/TheToast.vue';

const router = useRouter();
const route = useRoute();
const { setUser } = useUserStore();

onMounted(async () => {
  const url = `${import.meta.env.VITE_SERVER_BASE_URL}/auth/validateSession`;
  const response = await ax.post(url, {}, { withCredentials: true });

  setUser(response.data.data);

  if (response.data.data && route.name === 'signin') {
    router.replace('/exercises');
  }
});
</script>

<template>
  <TheToast />
  <TheModals />
  <TheHeader />
  <RouterView v-slot="{ Component }">
    <Transition name="route">
      <component :is="Component"></component>
    </Transition>
  </RouterView>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap')

*
  box-sizing: border-box
  margin: 0
  padding: 0

html
  font-family: 'Inter'
  font-size: 62.5%

body
  background-color: $c-dk
  padding: 0 $sp_6
  max-width: 40rem
  margin: 0 auto

main
  margin-top: $sp_6

.route-enter-from
  opacity: 0

.route-leave-to
  display: none

.route-enter-to
  opacity: 1

.route-leave-from
  display: none

.route-enter-active
  transition: all .5s

.modal-enter-from,
.modal-leave-to
  opacity: 0
  transform: scale(.5) translate(-50%, -50%)
  top: 30%
  left: 25%

.modal-enter-to,
.modal-leave-from
  top: 40%
  left: 50%
  opacity: 1
  transform: scale(1) translate(-50%, -50%)

.modal-enter-active
  transition: all .2s ease-in

.modal-leave-active
  transition: all .2s ease-out
</style>
