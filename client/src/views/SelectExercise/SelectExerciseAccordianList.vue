<script setup lang="ts">
import { type PropType } from 'vue';

const { items } = defineProps({
  items: {
    type: Array as PropType<string[]>,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: 'primary',
  },
});

const emits = defineEmits<{
  selectItem: [item: string];
}>();

function handleSelectItem(item: string) {
  emits('selectItem', item);
}
</script>

<template>
  <ul :class="color">
    <li v-for="item in items" :key="item" @click="handleSelectItem(item)">
      {{ item }}
    </li>
  </ul>
</template>

<style scoped lang="sass">
ul
  list-style: none
  display: flex
  flex-direction: column
  justify-content:  center
  @include text-dt
  color: $c-dk
  padding: 0 $sp_2
  border-radius: 0  0 $br_md $br_md

  &.primary
    background-color: $c1-lt
  &.secondary
    background-color: $c2-lt

  li
    height: 5rem
    display: flex
    align-items: center
</style>
