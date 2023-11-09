<script setup lang="ts">
import type { Exercise } from '@/lib/graphQL/gql/graphql';
import { type PropType } from 'vue';

const { items } = defineProps({
  items: {
    type: Array as PropType<Exercise[]>,
    required: true,
  },
});

const emits = defineEmits<{
  selectItem: [item: string];
}>();

function handleSelectItem(slug: string) {
  emits('selectItem', slug);
}
</script>

<template>
  <ul :class="items[0].group.color">
    <li
      v-for="item in items"
      :key="item.id"
      @click="handleSelectItem(item.slug)"
    >
      {{ item.name }}
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

  &.orange
    background-color: $c1-lt
  &.blue
    background-color: $c2-lt

  &.green
    background-color: $c3

  li
    height: 5rem
    display: flex
    align-items: center
</style>
