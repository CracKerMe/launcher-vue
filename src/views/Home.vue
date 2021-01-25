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
        <button @click="toggleDrawer">展开侧边栏</button>
    </div>
    <Drawer ref="drawer" :title="'页面配置'" >
      <p>背景模糊</p>
      <Slider @change="sliderChange($event, 'blur')" />
      <p>图标圆角</p>
      <Slider @change="sliderChange($event, 'icon')" />
      <p>输入框圆角</p>
      <Slider @change="sliderChange($event, 'input')" />
    </Drawer>
  </div>
</template>

<script>
import Drawer from '~components/Drawer/Drawer'
import Slider from '~components/Slider/Slider'
import { localhostStorageFn } from '~base/storage'
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
    sliderChange (value, sign) {
      console.log(value)
      if (sign === 'blur') {
        document.documentElement.style.setProperty('--bgblur', value / 100 * 40)
      } else if (sign === 'icon') {
        document.documentElement.style.setProperty('--iconradius', value)
      } else if (sign === 'input') {
        document.documentElement.style.setProperty('--inputradius', value)
      }
    },
    toggleDrawer () {
      this.$refs.drawer.toggle()
    },
    selectEnginer (engin) {
      this.enginesChoose = engin
      localhostStorageFn.set('engin', JSON.stringify(engin))
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
    if (localhostStorageFn.get('engin')) {
      this.enginesChoose = JSON.parse(localhostStorageFn.get('engin'))
    } else {
      this.enginesChoose = this.enginesArr[0]
    }
  },
  mounted () {
    window.addEventListener('resize', _.debounce(this.resizeHandle, 300))
  },
  components: {
    Drawer,
    Slider
  }
}
</script>

<style lang="stylus" scoped>
@import './index.styl'
</style>
