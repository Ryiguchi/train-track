<script setup lang="ts">
import { ref, watch } from 'vue';

// PROPS
const { type, name, value, inputId } = defineProps({
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
    default: 'default-input',
  },
  value: {
    type: String,
    required: false,
    default: '',
  },
});

// EMITS
const emits = defineEmits<{
  changeValue: [value: string];
}>();

// REFS
const enteredValue = ref(value);
const hasFocus = ref(false);

// WATCH
watch(enteredValue, newValue => {
  emits('changeValue', newValue);
});

// FUNCTIONS
function handleOnFocus() {
  const input = document.getElementById(inputId)?.focus();
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
      color: $c1

  input
    height: 5rem
    width: 100%
    max-width: 50rem
    background-color: transparent
    padding: $sp_2
    border-radius: $br_md
    border: 1px solid $c1
    @include text-dt
    &:focus
      outline-offset: 2px
      outline: 1px solid $c-outline
</style>
