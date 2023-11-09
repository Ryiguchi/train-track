<script setup lang="ts">
const { color } = defineProps({
  color: {
    type: String,
    required: false,
    default: 'dark',
  },
});
</script>

<template>
  <div :class="color">
    <header>
      <h2>
        <slot></slot>
      </h2>
    </header>
  </div>
</template>

<style scoped lang="sass">
header
  display: flex
  align-items: center
  justify-content: center
  padding-bottom: $sp_1

  h2
    @include text-md("bold")
.orange header
  color: $c1-lt
  border-bottom:  1px solid $c1-lt

.blue header
  color: $c2-lt
  border-bottom:  1px solid $c2-lt

.green header
  color: $c3
  border-bottom:  1px solid $c3

.dark header
  color: $c-dk
  border-bottom:  1px solid $c-dk
</style>
