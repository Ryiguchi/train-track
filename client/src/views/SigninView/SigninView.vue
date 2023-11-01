<script setup lang="ts">
import LoginForm from '@/components/login/LoginForm.vue';

function handleSubmit(formData: ILoginFormData) {
  console.log(formData);
}
</script>

<template>
  <main>
    <LoginForm @submit="handleSubmit" />
  </main>
</template>

<style scoped lang="sass">
main
  margin-top: $sp_12
</style>
