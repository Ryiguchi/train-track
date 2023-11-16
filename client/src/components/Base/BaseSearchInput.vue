<script setup lang="ts">
import IconSearch from '@/components/Icon/IconSearch.vue';

import { ref, computed, toRefs } from 'vue';

// PROPS
const props = defineProps<{
  items: string[];
  placeholder?: string;
}>();

// EMIT
const emit = defineEmits<{
  'selected-item': [item: string];
  focused: [];
}>();

// REFS
const { items, placeholder } = toRefs(props);
const searchTerm = ref('');
const isFocused = ref(false);

const filteredItems = computed(() => {
  if (searchTerm.value === '') return items.value;
  return items.value.filter(item =>
    item.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

// FUNCTIONS
function selectItem(item: string) {
  searchTerm.value = item;
  emit('selected-item', item);
}

function handleFocus() {
  isFocused.value = true;
  emit('focused');
}

function handleBlur() {
  setTimeout(() => {
    isFocused.value = false;
  }, 100);
}
</script>

<template>
  <div class="wrapper">
    <div class="search-bar">
      <input
        type="search"
        :placeholder="placeholder"
        v-model.trim="searchTerm"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <IconSearch class="icon-search" />
    </div>
    <ul v-if="isFocused">
      <li v-for="item in filteredItems" :key="item" @click="selectItem(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="sass">
.wrapper
  position: relative

  .search-bar
    position: relative

    input
      border: none
      border-radius: 10px
      height: 5rem
      width: 100%
      padding: 0 $sp_4
      color: $c-lt
      font-size:  $fs_3
      background-color: transparent
      border: 1px solid $c1
      color: $c-lt
      &:focus
        border-radius: 10px 10px 0 0

    svg
      position: absolute
      right: $sp_4
      top: 50%
      transform: translateY(-50%)


  ul
    position: absolute
    top: 5.3rem
    list-style: none
    width: 100%
    background-color: $c-dk
    border: 1px solid $c1
    border-radius: 0 0 5px 5px

    li
      font-size: $fs_3
      padding: $sp_2 $sp_4
      color: $c1
</style>
