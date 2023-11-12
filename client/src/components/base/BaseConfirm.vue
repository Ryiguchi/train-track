<script setup lang="ts">
import BaseModal from './BaseModal.vue';
import IconToastLoading from '../icons/IconToastLoading.vue';
import TheModalButtons from '../UI/TheModalButtons.vue';

//PROPS
const { title, text } = defineProps<{
  title: string | null;
  text: string;
}>();

// EMITS
const emits = defineEmits<{
  cancel: [];
  confirm: [];
}>();
</script>

<template>
  <BaseModal>
    <div class="wrapper">
      <IconToastLoading />
      <div>
        <h2 v-if="title">{{ title }}</h2>
        <p>{{ text }}</p>
      </div>
      <TheModalButtons @cancel="emits('cancel')" @accept="emits('confirm')">
        Confirm
      </TheModalButtons>
    </div>
  </BaseModal>
</template>

<style scoped lang="sass">
.wrapper
  display: flex
  flex-direction: column
  align-items: center
  gap: $sp_8

h2
  @include text-md(bold)
  color: $c-lt
  margin-bottom: $sp_4
  text-align: center

p
  @include text-xsm
  text-align: center
  line-height: 1.5
  letter-spacing: .2px
</style>
