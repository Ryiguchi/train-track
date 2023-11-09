<script setup lang="ts">
import IconCaretUp from '../icons/IconCaretUp.vue';
import IconCaretDown from '../icons/IconCaretDown.vue';

const emit = defineEmits<{
  selectedItem: [item: string];
  toggleIsOpen: [];
}>();

const { title, isOpen, color } = defineProps({
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
    required: false,
    default: 'primary',
  },
});

function handleToggleIsOpen() {
  emit('toggleIsOpen');
}
</script>

<template>
  <div
    class="title-bar"
    :class="[{ open: isOpen }, color]"
    @click="handleToggleIsOpen"
  >
    <h2>
      {{ title }}
    </h2>
    <div>
      <IconCaretUp v-if="isOpen" :color="color" />
      <IconCaretDown v-else />
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
.accordian-wrapper
  overflow: hidden
.title-bar
  display: flex
  align-items: center
  justify-content: space-between
  height: 6rem
  padding: 0 $sp_2
  border: 1px solid $c-dk
  border-bottom: none

  h2
    @include text-dt

.open
  &.orange
    border: 1px solid $c1-lt
    border-bottom: none
    h2
      color: $c1-lt
  &.blue
    border: 1px solid $c2-lt
    border-bottom: none
    h2
      color: $c2-lt

  &.green
    border: 1px solid $c3
    border-bottom: none
    h2
      color: $c3

  border-radius: 10px 10px 0 0

.accordian-list-enter-from,
.accordian-list-leave-to
  transform: translateY(-100%)
.accordian-list-enter-to,
.accordian-list-leave-from
  transform: translateY(0)
.accordian-list-enter-active
  transition: all .3s
</style>
