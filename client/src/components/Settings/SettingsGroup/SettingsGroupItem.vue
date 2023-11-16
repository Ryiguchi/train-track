<script setup lang="ts">
import { capitalize } from 'vue';
import IconTrash from '@/components/Icon/IconTrash.vue';
import IconEditSmall from '@/components/Icon/IconEditSmall.vue';

// PROPRS
const { group } = defineProps<{ group: IGroupWithEnum }>();

// EMITS
const emits = defineEmits<{
  deleteGroup: [group: IGroupWithEnum];
  editGroup: [group: IGroupWithEnum];
}>();
</script>

<template>
  <li>
    <div class="text-wrapper">
      <span class="color" :class="group.color"></span>
      <p>{{ capitalize(group.name) }}</p>
    </div>
    <div class="icon-wrapper">
      <IconEditSmall @click="emits('editGroup', group)" />
      <IconTrash @click="emits('deleteGroup', group)" />
    </div>
  </li>
</template>

<style scoped lang="sass">
li
  display: flex
  align-items: center
  justify-content: space-between

  .text-wrapper
    display: flex
    align-items: center
    gap: $sp_6

    span
      width: $sp_6
      height: $sp_6
      border-radius: $br_sm

      @each $class-name, $color in $colors
        @include color-fill($class-name, $color)

    p
      @include settings-item
  .icon-wrapper
    display: flex
    gap: $sp_3
</style>
