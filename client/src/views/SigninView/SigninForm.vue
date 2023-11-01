<script setup lang="ts">
import { preview } from 'vite';
import { capitalize, computed, ref } from 'vue';

const emits = defineEmits<{
  submit: [formData: ILoginFormData];
}>();

const mode = ref('signin');
const enteredEmail = ref('');
const enteredPassword = ref('');

const switchText = computed(() => {
  return mode.value === 'signin'
    ? "Don't have an account?"
    : 'Already have an account?';
});

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

  emits('submit', formData);
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-wrapper">
      <base-input
        class="email-input"
        name="email"
        type="email"
        color="light"
        @change-value="handleChangeEmail"
        >Email</base-input
      >
      <base-input
        class="password-input"
        name="password"
        type="password"
        color="light"
        @change-value="handleChangePassword"
        >Password</base-input
      >
      <div class="forgot-container">
        <button type="button" class="text-buttons">Forgot Password?</button>
      </div>
    </div>
    <div class="button-wrapper">
      <base-button>{{ mode }}</base-button>
      <base-button type="button" color="secondary"
        >{{ mode }} with google</base-button
      >
    </div>
    <button type="button" class="text-buttons" @click="toggleMode">
      <span> {{ switchText + ' ' }} </span>
      <span> {{ capitalize(mode) }} </span>
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
