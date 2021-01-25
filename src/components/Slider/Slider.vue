<template>
<div class="sp-slider-compair flex">
  <div class="sp-slider por" ref="outer">
    <div class="sp-slider-rail poa"></div>
    <div class="sp-slider-track poa" style="left: 0%;right: auto;width: 0%;"></div>
    <div class="sp-slider-step poa"></div>
    <div role="slider" class="sp-slider-handle poa" ref="handle" style="left: 0%;"></div>
    <div class="sp-slider-mark poa"></div>
  </div>
  <span class="iblock"><i class="fr">{{percent}}%</i></span>
</div>
</template>

<script>
export default {
  name: 'Slider',
  data () {
    return {
      dataX: 0,
      dataY: 0,
      canDray: false,
      percent: 0
    }
  },
  methods: {
    mouseDownFn (e) {
      this.canDray = true
    },
    mouseMoveFn (e) {
      if (this.canDray) {
        const outerWidth = parseInt(this.$refs.outer.offsetWidth)
        const outerLeft = this.$refs.outer.offsetParent.offsetLeft + this.$refs.outer.offsetLeft
        const ev = e || event
        const lastClientX = ev.clientX
        let sliderWidth = lastClientX - outerLeft
        if (sliderWidth >= outerWidth) {
          sliderWidth = outerWidth
        }
        if (sliderWidth <= 0) {
          sliderWidth = 0
        }
        this.percent = (sliderWidth / outerWidth * 100).toFixed(0)
        let initValue = Math.floor(sliderWidth / outerWidth * 100)
        this.$refs.handle.style.left = initValue + '%'
        this.$emit('change', initValue)
      }
    },
    mouseUpFn (e) {
      this.canDray = false
    }
  },
  mounted () {
    this.$refs.handle.addEventListener('mousedown', this.mouseDownFn, false)
    document.body.addEventListener('mousemove', this.mouseMoveFn, false)
    document.body.addEventListener('mouseup', this.mouseUpFn, false)
  }
}
</script>

<style lang="stylus" scoped>
.sp-slider-compair
  span
    margin-top: 7px;
    width: 50px;
    height: 26px;
    background-image: url(./slider-content.png);
    background-repeat: no-repeat;
    background-size: cover;
    i
      margin-right: 4px;
      width: 34px;
      line-height: 26px;
      font-size: 12px;
      text-align: center;
      color: #222226;
      font-style normal
.sp-slider
  flex: 1;
  color: rgba(0,0,0,.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: "tnum";
  height: 12px;
  margin: 14px 6px 10px;
  padding: 4px 0;
  cursor: pointer;
  touch-action: none;
  &-rail
    width: 100%;
    background-color: #f5f5f5;
    border-radius: 2px;
    height: 4px;
    transition: background-color .3s;
  &-track
    height: 4px;
    transition: background-color .3s;
    background-color: #91d5ff;
    border-radius: 4px;
  &-step
    width: 100%;
    height: 4px;
    background: transparent;
  &-handle
    width: 14px;
    height: 14px;
    margin-top: -5px;
    background-color: #fff;
    border: 2px solid #91d5ff;
    border-radius: 50%;
    cursor: pointer;
    transition: border-color .3s,box-shadow .6s;
  &-mark
    top: 14px;
    left: 0;
    width: 100%;
    font-size: 14px;
</style>
