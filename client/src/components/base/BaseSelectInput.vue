<script setup lang="ts">
import { type PropType, ref, computed } from 'vue';
import IconSearch from '@/components/icons/IconSearch.vue';

const emit = defineEmits<{
  'selected-item': [item: string];
  focused: [];
}>();

const { items } = defineProps({
  items: {
    type: Array as PropType<string[]>,
    required: true,
  },

  color: {
    type: String,
    required: false,
    default: 'ghost',
  },
});

const searchTerm = ref('');
const isFocused = ref(false);

const filteredItems = computed(() => {
  if (searchTerm.value === '') return [];
  return items.filter(item =>
    item.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

function selectItem(item: string) {
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
        placeholder="Search for an exercise..."
        v-model.trim="searchTerm"
        :class="color"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <IconSearch class="icon-search" :color="color" />
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
      border-radius: 10px 10px 0 0
      height: 5rem
      width: 100%
      padding: 0 $sp_4
      color: $c-dk
      font-size:  $fs_3
      &.ghost
        background-color: transparent
        border: 1px solid $c-lt
        color: $c-lt
      &.secondary
        background-color: $c2-lt
      &.primary
        background-color: $c1-lt


      &:focus
        outline-color: $c2

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
    background-color: $c2-lt
    border-radius: 0 0 5px 5px

    li
      font-size: $fs_4
      padding: $sp_2 $sp_4
      color: $c-dk
</style>
