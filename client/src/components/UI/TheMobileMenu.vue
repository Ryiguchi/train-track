<script setup lang="ts">
import MobileMenuHeader from '../MobileMenu/MobileMenuHeader.vue';
import BaseButton from '../Base/BaseButton.vue';
import MobileMenuList from '../MobileMenu/MobileMenuList.vue';
import IconClose from '../Icon/IconClose.vue';

import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

import { useUserStore } from '@/stores/user.store';
import { useAxios } from '@/utils/composables/useAxios';
import { useToastStore } from '@/stores/toast.store';
import {
  signOutSuccessToast,
  signOutFailedToast,
} from '@/utils/helpers/toasts.helpers';

// PROPS
defineProps<{
  isMenuOpen: boolean;
}>();

// EMITS
const emits = defineEmits<{
  closeMenu: [];
}>();

// STORE
const { user, isSignedIn } = storeToRefs(useUserStore());
const { setUser } = useUserStore();
const { showToast } = useToastStore();

// COMPOSABLES
const { axios, pending, success, error } = useAxios();
const router = useRouter();

// FUNCTIONS
async function handleOnClick() {
  const url = `${import.meta.env.VITE_SERVER_BASE_URL}/auth/signout`;

  try {
    await axios(url);

    if (success.value) {
      setUser(null);
      emits('closeMenu');
      showToast(signOutSuccessToast);
      router.replace('/signin');
    }

    if (error.value) {
      throw error.value;
    }
  } catch (error: any) {
    showToast(signOutFailedToast(error));
  }
}
</script>

<template>
  <aside v-if="isMenuOpen" class="menu">
    <div class="icon-close center" @click="emits('closeMenu')">
      <IconClose color="primary" />
    </div>
    <MobileMenuHeader />
    <MobileMenuList @closeMenu="emits('closeMenu')" />

    <div class="button-wrapper">
      <BaseButton v-if="isSignedIn" color="primary" @click="handleOnClick">
        sign out
      </BaseButton>
    </div>
  </aside>
</template>

<style scoped lang="sass">
.menu
  position: absolute
  top: 0
  right: 0
  z-index: 100
  width: 100vw
  height: 100vh
  background: $c-dk
  display: flex
  flex-direction: column
  gap: $sp_6
  padding: $sp-10 0

  .icon-close
    position: absolute
    top: $sp_4
    right: $sp_4
    width: 6rem
    height: 6rem

  .button-wrapper
    padding: $sp_8 $sp_4
</style>
