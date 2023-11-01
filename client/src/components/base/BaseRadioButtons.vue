<script setup lang="ts">
import { capitalize, ref, type PropType } from 'vue';

const { options } = defineProps({
  options: {
    type: Array as PropType<string[]>,
    required: true,
  },
});

const emits = defineEmits<{
  submit: [option: string];
  cancel: [];
}>();

const selectedOption = ref(options[0]);

function handleSelectOption(option: string) {
  selectedOption.value = option;
}

function handleSubmit() {
  emits('submit', selectedOption.value);
}

function handleCancel() {
  emits('cancel');
}
</script>

<template>
  <fieldset>
    <legend>
      <slot></slot>
    </legend>

    <div class="options-wrapper">
      <div
        class="option-wrapper"
        v-for="(option, i) in options"
        @click="handleSelectOption(option)"
        :key="option"
      >
        <div class="radio-wrapper">
          <div class="radio-outer"></div>
          <div v-if="selectedOption === option" class="radio-inner"></div>
        </div>
        <label :for="option">{{ capitalize(option) }}</label>
      </div>
    </div>
    <div class="button-wrapper">
      <base-button size="sm" @click="handleSubmit">
        <slot name="button"></slot>
      </base-button>
      <base-button size="sm" color="ghost" @click="handleCancel">
        <slot name="cancel">Cancel</slot>
      </base-button>
    </div>
  </fieldset>
</template>

<style scoped lang="sass">
fieldset
  border: none
  display: flex
  flex-direction: column
  align-items: center
  gap: $sp_10

  legend
    @include text-sm
    margin-bottom: $sp_5
    text-align: center

  .options-wrapper
    display: flex
    align-items: center
    justify-content: space-between
    height: 3rem
    width: 100%

  .option-wrapper
    display: flex
    align-items: center
    gap: $sp_4
    height: 100%

  label
    @include text-dt("bold")

  .radio-wrapper
    position: relative
    display: flex
    align-items: center
    justify-content: center

  .radio-outer
    width: 1.8rem
    height: 1.8rem
    border-radius: 50%
    border: 1px solid $c-lt


  .radio-inner
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 1rem
    height: 1rem
    border-radius: 50%
    background-color: $c1

  .button-wrapper
    display: flex
    flex-direction: column
    align-items: center
    gap: $sp_5
</style>
