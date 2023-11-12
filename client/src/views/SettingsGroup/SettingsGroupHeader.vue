<script setup lang="ts">
const { title } = defineProps<{
  title: string;
}>();
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
  border-bottom: 1px solid $c1
  padding-bottom: $sp_7
  text-align: center
</style>
