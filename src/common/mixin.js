import {debounce} from './utils.js'
import BackTop from 'components/content/backTop/BackTop'
import {POP, SELL, NEW} from "common/const";

export const itemListenerMixin = {
  data(){
    return {
      itemImgListener: null
    }
  },
  mounted(){
    // 这个地方img标签确实被挂载，但是其中的图片还没有占据高度

    // this.$refs.scroll.refresh对这个函数进行防抖操作
    let refresh = debounce(this.$refs.scroll.refresh, 200)
    // 对监听事件进行保存
    this.itemImgListener = function() {
      refresh()
    }
    //监听item中图片加载完成
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data(){
    return {
      isShowBackTop: false
    }
  },
  methods: {
    //返回顶部
    backClick(){
     this.$refs.scroll.scrollTop(0, 0, 200)
    },
    listenShowBackTop(positionY){
      this.isShowBackTop = positionY > 1000;
    }
  }
}
