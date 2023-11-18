<script setup lang="ts">
import BaseInput from '@/components/Base/BaseInput.vue';
import SettingsAccountHeading from './SettingsUserHeading.vue';
import { ref } from 'vue';
import BaseButton from '@/components/Base/BaseButton.vue';
import { useMutation } from '@urql/vue';
import { UPDATE_USER_NAME } from '@/lib/graphQL/queries';
import { z } from 'zod';
import { useUserStore } from '@/stores/user.store';
import {
  userReturnTypeValidator,
  updateNameInputValidator,
} from '@/lib/types/zod';
import { useToastStore } from '@/stores/toast.store';
import {
  updateUserSuccessToast,
  updateUserFailedToast,
} from '@/utils/helpers/toasts.helpers';
import { useRouter } from 'vue-router';

// QUERY
const {
  executeMutation: updateName,
  data,
  error,
} = useMutation(UPDATE_USER_NAME);

// STORE
const { setUser, userId } = useUserStore();
const { showToast } = useToastStore();

// HOOKS
const router = useRouter();

// REFS
const nameInputValue = ref('');

// FUNCTIONS
function handleChangeNameValue(value: string) {
  nameInputValue.value = value;
}

async function handleSubmit() {
  try {
    const validUpdateNameData = updateNameInputValidator.parse(
      nameInputValue.value
    );

    await updateName({ name: validUpdateNameData, userId });

    if (error.value) {
      throw error.value;
    }

    if (data.value) {
      const validUpdatedUser = userReturnTypeValidator.parse(
        data.value.updateName
      );

      setUser(validUpdatedUser);
      showToast(updateUserSuccessToast('name'));
      router.push('/');
    }
  } catch (error: any) {
    showToast(updateUserFailedToast(error));
  }
}
</script>

<template>
  <SettingsAccountHeading>Change your username:</SettingsAccountHeading>
  <form @submit.prevent="handleSubmit">
    <BaseInput name="name" @change-value="handleChangeNameValue"
      >New username:</BaseInput
    >
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

  button
    margin-top: $sp_12
</style>
