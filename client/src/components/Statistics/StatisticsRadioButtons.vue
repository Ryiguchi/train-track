<script setup lang="ts">
import { capitalize, ref } from 'vue';

// PROPS
const { options, initialItem } = defineProps<{
  options: string[];
  initialItem?: string;
}>();

// EMITS
const emits = defineEmits<{
  submit: [option: string];
}>();

// REFS
const selectedOption = ref(initialItem ? initialItem : options[0]);

// FUNCTIONS
function handleSelectOption(option: string) {
  selectedOption.value = option;
  emits('submit', selectedOption.value);
}
</script>

<template>
  <fieldset>
    <legend>
      <slot></slot>
    </legend>

    <div class="options-wrapper">
      <div
        class="option"
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
    margin-bottom: $sp_1

  .options-wrapper
    display: flex
    justify-content: space-between
    gap: $sp_4
    width: 100%

    .option
      display: flex
      align-items: center
      gap: $sp_4
      height: 100%
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

      label
        @include text-sm
</style>
