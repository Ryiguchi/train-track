<script setup lang="ts">
import SigninForm from './SigninForm.vue';

import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user.store';

import { useRouter } from 'vue-router';
import { useAxios } from '@/utils/composables/useAxios';
import { useToastStore } from '@/stores/toast.store';
import {
  signInSuccessToast,
  signInFailedToast,
} from '@/utils/helpers/toasts.helpers';
import { credentialsValidator } from '@/lib/types/zod';

// ROUTER
const router = useRouter();

// STORE
const { setUser } = useUserStore();
const { isSignedIn, user } = storeToRefs(useUserStore());
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

  try {
    const user = await axios(url, credentials);

    setUser(user);

    showToast(signInSuccessToast);

    router.replace('/exercises');
  } catch (error: any) {
    showToast(signInFailedToast(error));
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
  margin-top: $sp_12
</style>
@/lib/composables/axios.composables @/lib/helpers/toasts.helpers
