<script setup lang="ts">
import type { NavItem } from '@/lib/types/enums';

// PROPS
const props = defineProps<{ navItems: NavItem[]; selectedItem: string }>();

// EMITS
const emits = defineEmits<{
  selectItem: [item: NavItem];
}>();
</script>

<template>
  <nav>
    <ul>
      <li
        v-for="item in navItems"
        class="center"
        :class="{ active: selectedItem === item }"
        :style="{ width: `calc(100% / ${navItems.length})` }"
        @click="emits('selectItem', item)"
      >
        <p>{{ item }}</p>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="sass">
nav
  padding: $sp_4 0

  ul
    display: flex
    align-items: center
    justify-content: space-between

    li
      @include text-dt
      border-bottom: 2px solid rgba(255,255,255, .1)
      padding: $sp_3 0
      &.active
        border-bottom: 2px solid $c1
        color: $c1
</style>
