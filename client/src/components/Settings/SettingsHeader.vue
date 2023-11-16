<script setup lang="ts">
// PROPS
const { title } = defineProps<{ title: string }>();
</script>

<template>
  <h1>
    {{ title }}
  </h1>
</template>

<style scoped lang="sass">
h1
  @include settings-header
  color: $c1
  font-size: 3rem
  text-align: center
</style>
