<script setup lang="ts">
import BaseInput from '@/components/Base/BaseInput.vue';
import SettingsAccountHeading from './SettingsUserHeading.vue';
import { ref } from 'vue';
import BaseButton from '@/components/Base/BaseButton.vue';
import { useMutation } from '@urql/vue';
import { UPDATE_USER_PASSWORD } from '@/lib/graphQL/queries';
import { useToastStore } from '@/stores/toast.store';
import { useRouter } from 'vue-router';
import { updatePasswordInputValidator } from '@/lib/types/zod';
import {
  updateUserFailedToast,
  updateUserSuccessToast,
} from '@/utils/helpers/toasts.helpers';

// QUERY
const {
  executeMutation: updatePassword,
  data,
  error,
} = useMutation(UPDATE_USER_PASSWORD);

// STORE
const { showToast } = useToastStore();

// HOOKS
const router = useRouter();

// REFS
const newPassValue = ref('');
const confirmPassValue = ref('');
const oldPassValue = ref('');

// FUNCTIONS
function handleChangeNewPassValue(value: string) {
  newPassValue.value = value;
}

function handleChangeConfirmPassValue(value: string) {
  confirmPassValue.value = value;
}

function handleChangeOldPassValue(value: string) {
  oldPassValue.value = value;
}

async function handleSubmit() {
  const input = {
    newPassword: newPassValue.value,
    confirmPassword: confirmPassValue.value,
    oldPassword: oldPassValue.value,
  };

  try {
    const validInput = updatePasswordInputValidator.parse(input);
    const { newPassword, oldPassword, confirmPassword } = validInput;

    if (newPassword !== confirmPassword) {
      throw new Error('The passwords do not match!');
    }

    await updatePassword({ userData: { newPassword, oldPassword } });

    if (error.value) {
      throw error.value;
    }

    if (data.value) {
      showToast(updateUserSuccessToast('password'));
      router.push('/');
    }
  } catch (error: any) {
    showToast(updateUserFailedToast(error));
  }
}
</script>

<template>
  <SettingsAccountHeading>Change your password:</SettingsAccountHeading>
  <form @submit.prevent="handleSubmit">
    <div>
      <BaseInput
        class="input"
        name="new-pass"
        type="password"
        inputId="settings-password-new"
        @change-value="handleChangeNewPassValue"
        >New password:</BaseInput
      >
      <BaseInput
        class="input"
        name="confirm-pass"
        type="password"
        inputId="settings-password-confirm"
        @change-value="handleChangeConfirmPassValue"
        >Repeat new password:</BaseInput
      >
      <BaseInput
        name="old-pass"
        type="password"
        inputId="settings-password-old"
        @change-value="handleChangeOldPassValue"
        >Old password:</BaseInput
      >
    </div>

    <BaseButton color="secondary">Save</BaseButton>
  </form>
</template>

<style scoped lang="sass">
form
  margin-top: $sp_12
  height: 100%
  display: flex
  flex-direction: column
  justify-content: space-between

  .input
    margin-bottom: $sp_8

  button
    margin-top: $sp_12
</style>
