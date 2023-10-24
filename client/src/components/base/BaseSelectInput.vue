<script setup lang="ts">
import { type PropType, ref, computed } from 'vue';

const emits = defineEmits<{
  selectedItem: [item: string];
}>();

const { items } = defineProps({
  items: {
    type: Array as PropType<string[]>,
    required: true,
  },
});

const searchTerm = ref('');

const filteredItems = computed(() => {
  if (searchTerm.value === '') return [];
  return items.filter(item =>
    item.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

function selectItem(item: string) {
  emits('selectedItem', item);
}
</script>

<template>
  <input
    type="search"
    placeholder="Search for an exercise..."
    v-model.trim="searchTerm"
  />
  <ul>
    <li v-for="item in filteredItems" :key="item" @click="selectItem(item)">
      {{ item }}
    </li>
  </ul>
</template>

<style scoped lang="sass">
input
  border: none
  height: 5rem
  width: 100%
  background-color: $color_tertiary_light
  padding: 0 $sp_4

  font-size:  $fs_3
  color: $color_dark

  &:focus
    outline-color: $color_tertiary

ul
  list-style: none
  width: 100%
  background-color: $color_tertiary_light
  border-radius: 0 0 5px 5px

li
  font-size: $fs_4
  padding: $sp_2 $sp_4
  color: $color_dark
</style>
