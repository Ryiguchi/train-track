<script setup lang="ts">
import { computed } from 'vue';

const { color } = defineProps({
  color: {
    type: String,
    required: true,
  },
});

function getColorHex() {
  if (color === 'primary') {
    return '#FFB376';
  } else if (color === 'secondary') {
    return '#B5A3EF';
  } else {
    return '#AAAAAA';
  }
}
</script>

<template>
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.9001 18.8125L16.7501 10.6625C15.7876 9.70005 14.2126 9.70005 13.2501 10.6625L5.1001 18.8125"
      :stroke="getColorHex()"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
