<script setup lang="ts">
import { ref, watch } from 'vue';

const { type, name, color, value } = defineProps({
  type: {
    type: String,
    required: false,
    default: 'text',
  },
  name: {
    type: String,
    required: true,
  },
  inputId: {
    type: String,
    required: false,
    default: '',
  },
  color: {
    type: String,
    required: false,
    default: 'dark',
  },
  value: {
    type: String,
    required: false,
    default: '',
  },
});

const emits = defineEmits<{
  changeValue: [value: string];
}>();

const enteredValue = ref(value);
const hasFocus = ref(false);

watch(enteredValue, newValue => {
  emits('changeValue', newValue);
});

function handleOnFocus() {
  hasFocus.value = true;
}

function handleOnBlur() {
  hasFocus.value = false;
}
</script>

<template>
  <div class="input-wrapper" @click="handleOnFocus">
    <label :for="name" :class="{ above: enteredValue !== '' || hasFocus }">
      <slot></slot>
    </label>
    <input
      :type="type"
      :name="name"
      :class="color"
      :id="inputId"
      v-model.trim="enteredValue"
      @focus="handleOnFocus"
      @blur="handleOnBlur"
    />
  </div>
</template>

<style scoped lang="sass">
.input-wrapper
  position: relative
  width: 100%

  label
    position: absolute
    @include text-placeholder
    top: 50%
    left: $sp_4
    transform: translateY(-50%)
    transition: all .3s

    &.above
      top: -2rem
      left: $sp_0
      font-size: 1.4rem
      color: $c-lt


  input
    border: 1px solid $c-lt
    border-radius: $br_md
    height: 4rem
    width: 100%
    max-width: 50rem
    padding: $sp_2

    @include text-sm

    &.dark
      background-color: $c-dkst

    &.light
      background-color: $c-dk

    &.ghost
      background-color: transparent
      border: 1px solid $c1

    &:focus
      outline: 1px solid $c1
</style>
