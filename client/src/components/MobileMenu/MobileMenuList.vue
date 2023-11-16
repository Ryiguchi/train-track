<script setup lang="ts">
import IconAccount from '../Icon/IconAccount.vue';
import IconExercise from '../Icon/IconExercise.vue';
import IconGroups from '../Icon/IconGroups.vue';
import MobileMenuListItem from './MobileMenuListItem.vue';

// EMITS
const emits = defineEmits<{
  closeMenu: [];
}>();
</script>

<template>
  <section>
    <nav>
      <ul>
        <li @click="emits('closeMenu')">
          <RouterLink to="/settings/group">
            <MobileMenuListItem text="Manage Groups">
              <IconGroups />
            </MobileMenuListItem>
          </RouterLink>
        </li>
        <li @click="emits('closeMenu')">
          <RouterLink to="/settings/exercise">
            <MobileMenuListItem text="Manage Exercises">
              <IconExercise />
            </MobileMenuListItem>
          </RouterLink>
        </li>
        <li @click="emits('closeMenu')">
          <RouterLink to="/settings/user">
            <MobileMenuListItem text="Manage Account">
              <IconAccount />
            </MobileMenuListItem>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style scoped lang="sass">
section
  padding: $sp_4

  ul
    border-radius: $br_md
    background-color: rgba(255,255,255,.04)

    li
      padding: 0 $sp_4
      border: 1px solid $c-dk
</style>
