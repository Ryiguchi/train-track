<script setup lang="ts">
import SettingsUserName from '@/components/Settings/SettingsUser/SettingsUserName.vue';
import SettingsUserEmail from '@/components/Settings/SettingsUser/SettingsUserEmail.vue';
import SettingsUserPassword from '@/components/Settings/SettingsUser/SettingsUserPassword.vue';
import SettingsTabNav from '@/components/Settings/SettingsUser/SettingsUserTabNav.vue';
import { NavItem } from '@/lib/types/enums';
import { ref } from 'vue';

// REFS
const selectedItem = ref<NavItem>(NavItem.NAME);

// FUNCTIONS
function handleSelectItem(item: NavItem) {
  selectedItem.value = item;
}
</script>

<template>
  <div class="wrapper">
    <SettingsTabNav
      :navItems="Object.values(NavItem)"
      :selectedItem="selectedItem"
      @selectItem="handleSelectItem"
    />
    <main>
      <SettingsUserName v-if="selectedItem === NavItem.NAME" />
      <SettingsUserEmail v-if="selectedItem === NavItem.EMAIL" />
      <SettingsUserPassword v-if="selectedItem === NavItem.PASS" />
    </main>
  </div>
</template>

<style scoped lang="sass">
main
  height: 40rem
</style>
