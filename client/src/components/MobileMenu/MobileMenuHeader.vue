<script setup lang="ts">
import { useUserStore } from '@/stores/user.store';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

// STORE
const { user } = storeToRefs(useUserStore());

// REFS
const initials = computed(() => {
  if (!user.value?.name) return;
  const initialsArray = user.value.name
    .split(' ')
    .map(name => name.slice(0, 1).toUpperCase());

  const initials =
    initialsArray.length > 1
      ? initialsArray[0] + initialsArray[initialsArray.length - 1]
      : initialsArray[0];

  return initials;
});
</script>

<template>
  <section v-if="user">
    <div class="user-wrapper">
      <div class="user-initials center">
        <span>{{ initials }}</span>
      </div>
      <div class="user-details">
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
section
  padding: $sp_8 $sp_4 0 $sp_4
  border-bottom: 1px solid $c-dk
  width: 100%
  .user-wrapper
    display: flex
    align-items: center
    gap: $sp_6
    padding:  $sp_4 $sp_4
    border-radius: $br_md
    background-color: rgba(255,255,255,.04)
    width: 100%
    .user-initials
      width: 3.6rem
      height: 3.6rem
      background-color: $c2
      border-radius: $br_sm

      span
        font-size: $fs_3
        font-weight: 700
        color: $gradient

    .user-details
      display: flex
      flex-direction: column

      p
        font-size: $fs_1
        color: $c1
</style>
