<script setup lang="ts">
const { color } = defineProps({
  color: {
    type: String,
    required: false,
    default: 'blue',
  },
});
</script>

<template>
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.5547 0H10.4632C3.90795 0 0 3.906 0 10.458V25.524C0 32.094 3.90795 36 10.4632 36H25.5367C32.092 36 35.9999 32.094 35.9999 25.542V10.458C36.0179 3.906 32.11 0 25.5547 0ZM21.2326 23.4C21.7548 23.922 21.7548 24.786 21.2326 25.308C20.9624 25.578 20.6203 25.704 20.2781 25.704C19.9359 25.704 19.5938 25.578 19.3236 25.308L12.9665 18.954C12.4442 18.432 12.4442 17.568 12.9665 17.046L19.3236 10.692C19.8459 10.17 20.7103 10.17 21.2326 10.692C21.7548 11.214 21.7548 12.078 21.2326 12.6L15.8299 18L21.2326 23.4Z"
      :class="color"
    />
  </svg>
</template>

<style scoped lang="sass">
path
  &.orange
    fill: $c1-lt

  &.blue
    fill: $c2-lt

  &.green
    fill: $c3
</style>
