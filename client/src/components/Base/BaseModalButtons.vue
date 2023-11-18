<script setup lang="ts">
import BaseButton from '../Base/BaseButton.vue';

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
    <BaseButton color="secondary" size="small" @click="emits('accept')">
      <slot></slot>
    </BaseButton>
  </div>
</template>

<style scoped lang="sass">
.button-wrapper
  display: flex
  justify-content: space-between
  gap: $sp_4
  width: 100%
</style>
