<template>
  <div class="sp-drawer sp-drawer-open pof" ref="drawer">
    <div class="sp-drawer-mask pof" @click="hide" v-show="visibleVar"></div>
    <div class="sp-drawer-content poa" ref="content" style="width: 388px">
      <div class="sp-drawer-header por clearfix">
        <p class="fl">{{title}}</p>
        <div class="sp-drawer-close fr" @click="hide"><img class="iblock" :src="require('@/mock/images/close.png')"></div>
      </div>
      <div class="sp-drawer-wrap">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { addClass, removeClass } from '~base/dom.js'
export default {
  name: 'Drawer',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      visibleVar: this.visible
    }
  },
  watch: {
    visible (newValue) {
      this.visibleVar = newValue
    }
  },
  methods: {
    hide () {
      this.visibleVar = false
      this.$refs.drawer.style.zIndex = -1
      removeClass(this.$refs.content, 'show')
    },
    show () {
      this.visibleVar = true
      this.$refs.drawer.style.zIndex = 3
      addClass(this.$refs.content, 'show')
    },
    toggle () {
      this.visibleVar = !this.visibleVar
      this.$refs.drawer.style.zIndex = (!this.visibleVar ? -1 : 3)
      if (!this.visibleVar) {
        removeClass(this.$refs.content, 'show')
      } else {
        addClass(this.$refs.content, 'show')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.sp-drawer
  width 100%
  height 100%
  transition transform .3s cubic-bezier(.7,.3,.1,1)
  top 0
  right 0
  z-index -1
  > *
    transition transform .3s cubic-bezier(.7,.3,.1,1),box-shadow .3s cubic-bezier(.7,.3,.1,1)
  &-mask
    top 0
    left 0
    width 100%
    height 100%
    background-color rgba(0,0,0,.45)
  &-content
    background #ffffff
    width 0
    height 100%
    right 0
    top 0
    transform translateX(100%)
    &.show
      transform translateX(0)
    .sp-drawer-header
      line-height 45px
      padding 0 15px
      color rgba(0,0,0,0.85)
      border-bottom 1px solid #e8e8e8
      border-radius 4px 4px 0 0
      font-weight 500
      font-size 16px
      background #f0f0f5
      p
        line-height 45px
        padding 0 15px
        border-bottom 1px solid #eee
        height 44px
        background #f0f0f5
        font-size 16px
        font-weight bold
        color #222226
      .sp-drawer-close
        cursor pointer
        user-select none
        img
          width 26px
          height 26px
          padding 5px
          transition opacity 0.2s
          opacity 0.85
          vertical-align middle
    .sp-drawer-wrap
      padding 16px 10px 16px 16px
</style>
