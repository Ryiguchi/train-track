<script setup lang="ts">
import BaseButton from '../base/BaseButton.vue';

const emits = defineEmits<{
  cancel: [];
  accept: [];
}>();
</script>

<template>
  <div class="button-wrapper">
    <BaseButton color="primary" size="small" @click="emits('cancel')"
      >Cancel</BaseButton
    >
    <BaseButton color="ghost" size="small" @click="emits('accept')">
      <slot></slot>
    </BaseButton>
  </div>
</template>

<style scoped lang="sass">
.button-wrapper
  display: flex
  justify-content: space-between
  width: 100%
</style>
