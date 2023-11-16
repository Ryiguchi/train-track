<script setup lang="ts">
import BaseModal from './BaseModal.vue';
import BaseModalButtons from './BaseModalButtons.vue';
import IconToastLoading from '../Icon/IconToastLoading.vue';

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
  <Teleport to="body">
    <Transition name="modal">
      <div>
        <BaseModal>
          <div class="wrapper">
            <IconToastLoading />
            <div>
              <h2 v-if="title">{{ title }}</h2>
              <p>{{ text }}</p>
            </div>
            <BaseModalButtons
              @cancel="emits('cancel')"
              @accept="emits('confirm')"
            >
              Confirm
            </BaseModalButtons>
          </div>
        </BaseModal>
      </div>
    </Transition>
  </Teleport>
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
    text-align: center
    margin-bottom: $sp_4

  p
    @include text-xsm
    text-align: center
</style>
