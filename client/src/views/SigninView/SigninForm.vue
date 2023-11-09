<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import { isZodError } from '@/lib/types/predicates';
import { credentialsValidator } from '@/lib/types/zod';
import { useToastStore } from '@/stores/toast.store';
import { signInFailedToast } from '@/utils/helpers/toasts.helpers';
import { capitalize, computed, ref } from 'vue';

// EMITS
const emits = defineEmits<{
  submit: [formData: ILoginFormData];
}>();

// STORE
const { showToast } = useToastStore();

// REFS
const mode = ref('signin');
const enteredEmail = ref('');
const enteredPassword = ref('');

const switchText = computed(() => {
  return mode.value === 'signin'
    ? "Don't have an account?"
    : 'Already have an account?';
});

const switchMode = computed(() => {
  return mode.value === 'signin' ? 'signup' : 'signin';
});

// VARIABLES
const googleUrl = `${import.meta.env.VITE_SERVER_BASE_URL}/auth/google`;

// FUNCTIONS
function toggleMode() {
  mode.value = mode.value === 'signin' ? 'signup' : 'signin';
}

function handleChangeEmail(value: string) {
  enteredEmail.value = value;
}

function handleChangePassword(value: string) {
  enteredPassword.value = value;
}

function handleSubmit() {
  const formData = {
    email: enteredEmail.value,
    password: enteredPassword.value,
    mode: mode.value,
  };

  try {
    const validatedCredentials = credentialsValidator.parse(formData);
    emits('submit', validatedCredentials);
  } catch (error: any) {
    showToast(signInFailedToast(error));
    if (isZodError(error) && error.errors[0].path[0] === 'password') {
      console.log('PASSWORD ERROR');

      document.getElementById('password-input')?.focus();
    } else if (isZodError(error) && error.errors[0].path[0] === 'email') {
      console.log('EMAIL ERROR');

      document.getElementById('email-input')?.focus();
    }
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-wrapper">
      <BaseInput
        class="email-input"
        name="email"
        inputId="email-input"
        type="email"
        color="light"
        @change-value="handleChangeEmail"
        >Email</BaseInput
      >
      <BaseInput
        class="password-input"
        name="password"
        inputId="password-input"
        type="password"
        color="light"
        @change-value="handleChangePassword"
        >Password</BaseInput
      >
      <div class="forgot-container">
        <button type="button" class="text-buttons">Forgot Password?</button>
      </div>
    </div>
    <div class="button-wrapper">
      <BaseButton>{{ mode }}</BaseButton>
      <a :href="googleUrl">
        <BaseButton type="button" color="secondary"
          >{{ mode }} with google
        </BaseButton>
      </a>
    </div>
    <button type="button" class="text-buttons" @click="toggleMode">
      <span> {{ switchText + ' ' }} </span>
      <span> {{ capitalize(switchMode) }} </span>
    </button>
  </form>
</template>

<style scoped lang="sass">
form
  display: flex
  flex-direction: column
  align-items: center
  gap: $sp_8

.input-wrapper
  width: 100%

  .email-input
    margin-bottom: $sp_8

  .password-input
    margin-bottom: $sp_2

  .forgot-container
    text-align: right

.button-wrapper
  display: flex
  flex-direction: column
  gap: $sp_4
  width: 100%

.text-buttons
  @include text-xsm
  border: none
  background-color: transparent

  span:nth-child(2)
    color: $c1
    font-weight: 600
</style>
