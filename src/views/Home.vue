<template>
  <div class="home poa">
    <div class="bg-wrap">
      <img src="https://img-operation.csdnimg.cn/csdn/silkroad/img/1607000456025.jpg?x-oss-process=image/resize,h_1080,w_1920/format,webp" alt="">
    </div>
    <div class="content poa flex-center">
      <div class="search-main flex-center">
        <div class="search-box por">
          <div style="width: 100%;">
            <div class="flex-center search-select poa">
              <img :src="require('@/mock/images/engines/'+enginesChoose.icon+'.png')">
              <div class="dropdown-icon poa"></div>
            </div>
            <input
              type="text"
              autocomplete="off"
              autofocus="autofocus"
              placeholder="输入并搜索..."
              class="search-input"
              @keyup="fetchSearchPlaceholder"
            />
          </div>
          <div class="search-engines-list poa">
            <div v-for="item in enginesArr" :key="item.icon" class="por flex-center engin-item" @click="selectEnginer(item)">
              <img :src="require('@/mock/images/engines/'+item.icon+'.png')" alt="">
              <p>{{item.title}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import jsonp from 'jsonp'
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
    resizeHandle () {
      console.log(11111)
    },
    fetchSearchPlaceholder: _.debounce((e) => {
      if (!e.target.value) {
        return false
      }
      jsonp(`https://www.baidu.com/sugrec?p=3&ie=utf-8&json=1&prod=pc&from=pc_web&wd=${e.target.value}&callback=call`, {
        prefix: 'call'
      }, (err, data) => {
        if (err) {
          console.log(err)
          return false
        }
        console.log(data)
      })
    }, 300)
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
        z-index 1
        display flex
        width 680px
        outline none
        height 60px
        margin -5px auto 0
        justify-content center
        .search-select
          top 0
          left 0
          width 70px
          border-radius 8px 0 0 8px
          height 60px
          cursor pointer
          img
            width 30px
            height 30px
            margin-right 10px
          .dropdown-icon
            top 50%
            right 10px
            width 0
            margin-top -3px
            border-top solid 8px #999aaa
            border-right solid 5px transparent
            border-left solid 5px transparent
          &::after
            content ''
            display block
            width 0
            height 23px
            position absolute
            top 50%
            right 0px
            transform translateY(-50%)
            border-right 1px solid #999aaa
        input
          font-size 18px
          font-weight 400
          line-height 60px
          box-sizing border-box
          width 100%
          height 60px
          padding-right 20px
          padding-left 80px
          border none
          color #555666
          outline 0
          box-shadow 0px 2px 12px 0px rgba(34,34,38,0.1)
          background rgba(255, 255, 255, 0.804)
          border-radius calc(var(--inputradius) * 1px)
          &:focus
            color #222226
        .search-engines-list
          width 100%
          z-index 2
          top 63px
          display flex
          flex-wrap wrap
          overflow hidden
          background-color #fff
          box-shadow 0px 2px 12px 0px rgba(34,34,38,0.1)
          border-radius 16px
          border 1px solid #f0f0f5
          .engin-item
            width calc(100% / 7)
            height 119px
            margin 0
            padding 0
            flex-direction column
            cursor pointer
            transition all ease 0.2s
            img
              width 40px
              height 40px
              margin-bottom 16px
            p
              height 20px
              font-size 14px
              font-weight 400
              color #222226
              line-height 20px
            &:hover
              background #f7f7fc
</style>
