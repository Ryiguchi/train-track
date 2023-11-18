<script setup lang="ts">
import BaseInput from '@/components/Base/BaseInput.vue';
import SettingsAccountHeading from './SettingsUserHeading.vue';
import { ref } from 'vue';
import BaseButton from '@/components/Base/BaseButton.vue';
import { useMutation } from '@urql/vue';
import { UPDATE_USER_EMAIL } from '@/lib/graphQL/queries';
import { useUserStore } from '@/stores/user.store';
import { useToastStore } from '@/stores/toast.store';
import { useRouter } from 'vue-router';
import {
  updateEmailInputValidator,
  userReturnTypeValidator,
} from '@/lib/types/zod';
import {
  updateUserSuccessToast,
  updateUserFailedToast,
} from '@/utils/helpers/toasts.helpers';

// QUERY
const {
  executeMutation: updateEmail,
  data,
  error,
} = useMutation(UPDATE_USER_EMAIL);

// STORE
const { setUser, userId } = useUserStore();
const { showToast } = useToastStore();

// HOOKS
const router = useRouter();

// REFS
const emailInputValue = ref('');
const passwordInputValue = ref('');

// FUNCTIONS
function handleChangeEmailValue(value: string) {
  emailInputValue.value = value;
}

function handleChangePasswordValue(value: string) {
  passwordInputValue.value = value;
}

async function handleSubmit() {
  const input = {
    email: emailInputValue.value,
    password: passwordInputValue.value,
  };

  try {
    const validInput = updateEmailInputValidator.parse(input);

    await updateEmail({ updateEmailData: validInput, userId });

    if (error.value) {
      throw error.value;
    }

    if (data.value) {
      const validUpdatedUser = userReturnTypeValidator.parse(
        data.value.updateEmail
      );

      setUser(validUpdatedUser);
      showToast(updateUserSuccessToast('email'));
      router.push('/');
    }
  } catch (error: any) {
    showToast(updateUserFailedToast(error));
  }
}
</script>

<template>
  <SettingsAccountHeading>Change your email:</SettingsAccountHeading>
  <form @submit.prevent="handleSubmit">
    <div>
      <BaseInput
        class="input"
        name="email"
        inputId="settings-email-email"
        @change-value="handleChangeEmailValue"
        >New email:</BaseInput
      >
      <BaseInput
        name="password"
        type="password"
        inputId="settings-email-password"
        @change-value="handleChangePasswordValue"
        >Password:</BaseInput
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
