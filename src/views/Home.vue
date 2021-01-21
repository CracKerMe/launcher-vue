<template>
  <div class="home poa">
    <div class="bg-wrap">
      <img src="https://img-operation.csdnimg.cn/csdn/silkroad/img/1607000456025.jpg?x-oss-process=image/resize,h_1080,w_1920/format,webp" alt="">
    </div>
    <div class="content poa flex-center">
      <div class="search-main flex-center">
        <div class="search-box por">
          <div class="flex-center left-engin poa">
            <img :src="require('@/mock/images/engines/'+enginesChoose.icon+'.png')" alt="">
            <a-icon type="down" />
          </div>
        </div>
        <!-- <a-dropdown>
          <a-avatar :size="64" :src="'@/mock/images/engines/'+enginesChoose.icon+'.png'" /><a-icon type="down" />
          <a-menu slot="overlay" @click="changeEngin">
            <a-menu-item v-for="engin in enginesArr" :key="engin.icon" @click="selectEnginer(engin)">
              <a-avatar :size="64" :src="'@/mock/images/engines/'+engin.icon+'.png'" />
              <p>{{engin.title}}</p>
            </a-menu-item>
          </a-menu>
        </a-dropdown> -->
      </div>
    </div>
  </div>
</template>

<script>
const _ = require('lodash')
export default {
  name: 'Home',
  data () {
    return {
      enginesChoose: []
    }
  },
  computed: {
    enginesArr () {
      return this.$store.getters.enginesArr
    }
  },
  methods: {
    selectEnginer (engin) {
      this.enginesChoose = engin
    },
    changeEngin () {

    },
    resizeHandle () {
      console.log(11111)
    }
  },
  created () {
    this.enginesChoose = this.enginesArr[0]
  },
  mounted () {
    window.addEventListener('resize', _.debounce(this.resizeHandle, 300))
  }
}
</script>

<style lang="stylus" scoped>
.home
  background rgba(0,0,0,0.65)
  overflow hidden
  width 100%
  height 100%
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
  .content
    z-index 1
    top 0
    left 0
    width 100vw
    height 100%
    .search-main
      flex-direction column
      width 1240px
      height 640px
      zoom 1
      transition all ease 0.38s
      transition-delay 0.15s
      transform translateX(0) translate3d(0, 0, 0)
      .search-box
        z-index: 1;
        display: flex;
        width: 680px;
        outline: none;
        height: 60px;
        margin: -5px auto 0;
        justify-content: center;
        .left-engin
          top: 0;
          left: 0;
          width: 70px;
          border-radius: 8px 0 0 8px;
          height: 60px;
          cursor: pointer;
          img
            width: 30px;
            height: 30px;
            margin-right: 10px;
</style>
