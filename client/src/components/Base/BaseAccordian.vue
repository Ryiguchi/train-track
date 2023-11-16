<script setup lang="ts">
import IconCaretUp from '../Icon/IconCaretUp.vue';
import IconCaretDown from '../Icon/IconCaretDown.vue';

import { capitalize } from 'vue';

// PROPS
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: false,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

// EMITS
const emits = defineEmits<{
  selectedItem: [item: string];
  toggleIsOpen: [];
}>();

// FUNCTIONS
function handleToggleIsOpen() {
  emits('toggleIsOpen');
}
</script>

<template>
  <div
    class="header"
    :class="[{ open: isOpen }, color]"
    @click="handleToggleIsOpen"
  >
    <h2 :class="color">
      {{ capitalize(title) }}
    </h2>
    <div>
      <IconCaretUp v-if="isOpen" :color="color" />
      <IconCaretDown v-else :color="color" />
    </div>
  </div>
  <div class="accordian-wrapper">
    <Transition name="accordian-list">
      <div v-if="isOpen">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="sass">
.header
  display: flex
  align-items: center
  justify-content: space-between
  height: 6rem
  padding: 0 $sp_4
  border: 2px solid $c-dk
  border-bottom: none
  border-radius: 10px 10px 0 0
  &.open
    @each $class-name, $color in $colors
      @include color-accordian($class-name, $color)

  h2
    @include text-dt
    @each $class-name, $color in $colors
      @include color-text($class-name, $color)


.accordian-wrapper
  overflow: hidden

// TRANSITION
.accordian-list-enter-from,
.accordian-list-leave-to
  transform: translateY(-100%)
.accordian-list-enter-to,
.accordian-list-leave-from
  transform: translateY(0)
.accordian-list-enter-active
  transition: all .3s
</style>
