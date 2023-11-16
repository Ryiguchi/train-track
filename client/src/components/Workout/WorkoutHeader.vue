<template>
  <div>
    <header>
      <h2>
        <slot></slot>
      </h2>
    </header>
  </div>
</template>

<style scoped lang="sass">
header
  display: flex
  align-items: center
  justify-content: center
  padding: $sp_4
  color: $c1
  border-bottom:  2px solid $c-dk

  h2
    @include text-md("bold")
</style>
