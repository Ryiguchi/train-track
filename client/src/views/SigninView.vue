<script setup lang="ts">
import SigninForm from '@/components/SignIn/SigninForm.vue';

import { useUserStore } from '@/stores/user.store';

import { useRouter } from 'vue-router';
import { useAxios } from '@/utils/composables/useAxios';
import { useToastStore } from '@/stores/toast.store';
import {
  signInSuccessToast,
  signInFailedToast,
} from '@/utils/helpers/toasts.helpers';

// ROUTER
const router = useRouter();

// STORE
const { setUser } = useUserStore();
const { showToast } = useToastStore();

// COMPOSABLES
const { axios, pending, success, error } = useAxios();

//FUNCTIONS
async function handleSubmit(formData: ILoginFormData) {
  const url = `${import.meta.env.VITE_SERVER_BASE_URL}/auth/${formData.mode}`;

  const credentials = {
    email: formData.email,
    password: formData.password,
  };

  const user = await axios(url, credentials);

  if (error.value) {
    showToast(signInFailedToast(error.value));
  }

  if (success.value) {
    setUser(user);

    showToast(signInSuccessToast);

    router.replace('/exercises');
  }
}
</script>

<template>
  <main>
    <SigninForm @submit="handleSubmit" />
  </main>
</template>

<style scoped lang="sass">
main
  margin-top: 20rem
</style>
@/lib/composables/axios.composables @/lib/helpers/toasts.helpers
