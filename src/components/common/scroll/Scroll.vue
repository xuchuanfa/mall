<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Bscroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'

  Bscroll.use(Pullup)

  export default {
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      },
      observeDom: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll: null
      }
    },
    mounted() {
      //1.创建Bscroll对象
      this.scroll = new Bscroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      //2.监听滚动的位置
      if(this.probeType == 2 || this.probeType == 3){
        this.scroll.on('scroll', position => {
          // console.log(position)
          this.$emit('scroll', position)
        })
      }

      //3.监听上拉加载更多
      if(this.pullUpLoad){
        this.scroll.on('pullingUp', () => {
          this.$emit('pullUpLoad')
        })
      }
    },
    methods: {
      //回到顶部
      scrollTop(x, y, time=300){
       this.scroll && this.scroll.scrollTo(x, y, time)
      },
      //重新刷一下事件
      finishPullUp() {
       this.scroll && this.scroll.finishPullUp()
      },
      refresh() {
       this.scroll && this.scroll.refresh()
      },
      getScrollY(){
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>
 
</style>
