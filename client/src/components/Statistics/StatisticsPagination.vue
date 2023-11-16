<script setup lang="ts">
import IconCaretLeft from '../Icon/IconCaretLeft.vue';
import IconCaretRight from '../Icon/IconCaretRight.vue';

// PROPS
const { displayedDate } = defineProps<{ displayedDate: string }>();

// EMITS
const emits = defineEmits<{
  changeDate: [direction: number];
}>();
</script>

<template>
  <div class="wrapper">
    <IconCaretLeft @click="emits('changeDate', -1)" />
    <h1>{{ displayedDate }}</h1>
    <IconCaretRight @click="emits('changeDate', 1)" />
  </div>
</template>

<style scoped lang="sass">
.wrapper
  display: flex
  align-items: center
  justify-content: space-between
  width: 100%

  h1
    @include text-calender-header
    color: $c1
</style>
