<template>
  <div class="container">
    <div class="circle"></div>
  </div>
</template>

<style scoped lang="sass">
.loaders-container
  padding: 20px
  margin: 0 auto
  width: 700px
  text-align: center
  font-size: 0
.container
  display: inline-block
  padding: 30px
  width: 25%
  height: 140px

  .circle
    box-sizing: border-box
    width: 80px
    height: 80px
    border-radius: 100%
    border: 10px solid rgba(255, 255, 255, 0.2)
    border-top-color: #FFF
    animation: spin 1s infinite linear
</style>
