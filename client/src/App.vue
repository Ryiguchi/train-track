<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from './components/UI/TheHeader.vue';
import TheModals from './components/UI/TheModals.vue';
</script>

<template>
  <TheModals />
  <TheHeader />
  <RouterView />
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap')

*
  box-sizing: border-box
  margin: 0
  padding: 0

html
  font-family: 'Inter'
  font-size: 62.5%

body
  background-color: $c-dk
  padding: 0 $sp_6

main
  margin-top: $sp_6
</style>
