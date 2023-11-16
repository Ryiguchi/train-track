<script setup lang="ts">
import type { Exercise } from '@/lib/graphQL/gql/graphql';

// PROPS
const { items, color } = defineProps<{
  items: Exercise[];
  color: string;
}>();

// EMITS
const emits = defineEmits<{
  selectItem: [item: string];
}>();
</script>

<template>
  <ul v-if="items.length" :class="color">
    <li
      v-for="item in items"
      :key="item.id"
      @click="emits('selectItem', item.slug)"
    >
      {{ item.name }}
    </li>
  </ul>
  <ul v-else :class="color">
    <li class="no-items">No exercises for this group...</li>
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

  @each $class-name, $color in $colors
    @include color-fill($class-name, $color)

  li
    height: 5rem
    display: flex
    align-items: center

    &.no-items
      font-style: italic
</style>
