<script setup lang="ts">
import IconClose from '../icons/IconClose.vue';
import IconToastFailed from '@/components/icons/IconToastFailed.vue';
import IconToastLoading from '@/components/icons/IconToastLoading.vue';
import IconToastSuccess from '@/components/icons/IconToastSuccess.vue';
import { EToastType } from '@/lib/types/enums';
import { useToastStore } from '@/stores/toast.store';
import { storeToRefs } from 'pinia';

const { toast } = storeToRefs(useToastStore());
</script>

<template>
  <transition name="toast">
    <div v-if="toast" :key="toast.id">
      <div class="outer" :class="[toast.type]"></div>
      <div class="inner">
        <div class="icon-wrapper">
          <IconToastFailed v-if="toast.type === EToastType.FAILED" />
          <IconToastLoading v-if="toast.type === EToastType.LOADING" />
          <IconToastSuccess v-if="toast.type === EToastType.SUCCESS" />
        </div>
        <div class="text-wrapper">
          <h2>{{ toast.title }}</h2>
          <p>{{ toast.message }}</p>
        </div>
        <div class="close-wrapper">
          <IconClose />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="sass">
.outer
  position: absolute
  bottom: 0
  left: 0
  z-index: 50
  height: 10rem
  width: 100%
  display: flex
  align-items: center
  animation: countdown 3s ease-out

  &.success
    border-bottom: .5rem solid $c-t-success

  &.failed
    border-bottom: .5rem solid $c-t-failed

  &.loading
    border-bottom: .5rem solid $c-t-loading

  @keyframes countdown
    from
      width: 100%

    to
      width: 0

.inner
  position: absolute
  bottom: .5rem
  left: 0
  z-index: 51
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  height: 9rem
  background-color: $c-t-light

  .icon-wrapper
    width: 25vw
    height: 100%
    display: flex
    align-items: center
    justify-content: center
    background-color: $c-t-dark

  .text-wrapper
    height: 100%
    width: 100%
    padding: $sp_3 $sp_6
    color: $c-lt

    h2
      font-weight: 400
      font-size: $fs_3
      margin-bottom: $sp_1

    p
      font-size: $fs_0


  .close-wrapper
    position: absolute
    top: $sp_1
    right: $sp_1

.toast-enter-active
  animation: toast .3s ease-in
.toast-leave-active
  animation: toast .3s ease-out reverse

@keyframes toast
  from
    opacity: 0

  to
    opacity: 1
</style>
@/lib/types/enums
