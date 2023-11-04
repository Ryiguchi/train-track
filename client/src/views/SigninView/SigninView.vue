<script setup lang="ts">
import SigninForm from './SigninForm.vue';

function handleSubmit(formData: ILoginFormData) {
  console.log(formData);
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
