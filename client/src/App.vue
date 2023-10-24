<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from './components/UI/TheHeader.vue';
</script>

<template>
  <TheHeader />
  <RouterView />
</template>

<style lang="sass">
*
  box-sizing: border-box
  margin: 0
  padding: 0

html
  font-size: 62.5%

body
  background-color: $color_dark
  padding: 0 $sp_6
</style>
