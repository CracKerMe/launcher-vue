<template>
  <div class="home">
    <div class="bg-wrap">
      <img src="https://img-operation.csdnimg.cn/csdn/silkroad/img/1607000456025.jpg?x-oss-process=image/resize,h_1080,w_1920/format,webp" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  background rgb(102, 102, 102)
  overflow hidden
  .bg-wrap
    user-select none
    img
      position absolute
      display block
      object-fit cover
      opacity 1
      top 0
      left 0
      width 100vw
      height 100%
      transition all 0.4s
      filter blur(calc(var(--bgblur) * 1px))
</style>
