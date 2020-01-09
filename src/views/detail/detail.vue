<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" ref="nav" @titleClick="titleClick"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images='topImages' @imageLoad="imageLoad"/>
      <detail-base-info :goods="goods"/>
      <detail-service :services="goods.services" @serviceClick="serviceClick"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @goodsImgLoad="goodsImgLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :rate="rate"/>
      <goods-list ref="recommend" :goods="recommends" class="recomm" />
    </scroll>
    <detail-bottom-nav @addToCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <detail-service-prop :services="goods.services" ref="prop" />
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailService from './childComps/DetailService'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailServiceProp from './childComps/DetailServiceProp'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailBottomNav from './childComps/DetailBottomNav'

  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'

  import {
    getDetail,
    Goods,
    Shop,
    GoodsParam,
    getRecommend
  } from 'network/detail'

  import {
    itemListenerMixin,
    backTopMixin
  } from 'common/mixin'

  import {
    mapActions
  } from 'vuex'

  export default {
    name: 'detail',
    mixins: [itemListenerMixin, backTopMixin],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        isShow: false,
        rate: {
          cRate: 0,
          commentInfo: null
        },
        recommends: [],
        themTopYs: [],
        currentIndex: 0
      }
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid

      //2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
        //获取顶部的图片轮播数据
        const data = res.result;
        this.topImages = data.itemInfo.topImages;

        //3.创建商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        //4.创建店铺信息对象
        this.shop = new Shop(data.shopInfo)

        //5.保存商品的详情数据
        this.detailInfo = data.detailInfo;

        //6.获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        //7.获取评论信息
        if (data.rate.cRate !== 0) {
          this.rate.cRate = data.rate.cRate;
          this.rate.commentInfo = data.rate.list[0];
        }

        // this.$nextTick(() => {
        //   // 根据最新的数据，对应的DOM是已经被渲染出来
        //   // 但是图片依然是没有加载完(目前获取到offsetTop不包含其中的图片)
        //   // offsetTop值不对都是图片问题

        //   this.themTopYs = [];
        //   this.themTopYs.push(0);
        //   this.themTopYs.push(this.$refs.params.$el.offsetTop);
        //   this.themTopYs.push(this.$refs.comment.$el.offsetTop);
        //   this.themTopYs.push(this.$refs.recommend.$el.offsetTop);
        //   console.log(this.themTopYs)
        // })

      })

      //3.请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list;
      })

    },
    destroyed() {
      //取消全局事件的监听
      this.$bus.$off('itemImageLoad', this.itemImgListener)
    },
    methods: {
      ...mapActions(['addCart']),
      //事件监听相关方法
      imageLoad() {
        this.$refs.scroll.refresh()
      },
      goodsImgLoad() {
        this.$refs.scroll.refresh();

        //这里等图片加载完进行获取offsetTop
        this.themTopYs = [];
        this.themTopYs.push(0);
        this.themTopYs.push(this.$refs.params.$el.offsetTop);
        this.themTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themTopYs.push(this.$refs.recommend.$el.offsetTop);
        this.themTopYs.push(Number.MAX_VALUE);
      },
      serviceClick() {
        this.$refs.prop.changeShow()
      },
      titleClick(index) {
        this.$refs.scroll.scrollTop(0, -this.themTopYs[index], 200)
      },
      contentScroll(position) {
        //1.获取Y值
        let positionY = -position.y;

        let len = this.themTopYs.length;
        for (let i = 0; i < len - 1; i++) {
          if (this.currentIndex !== i && (positionY >= this.themTopYs[i] && positionY <
              this.themTopYs[i + 1])) {
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex;
          }
        }
        this.listenShowBackTop(positionY);
      },
      addToCart() {
        // 1,获取购物车需要展示的信息
        const product = {};
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;

        // 2,将商品加入到购物车里
        // this.$store.commit('addCart', product)
        this.addCart(product).then(res => {
            // this.$toast2.show(res)
          this.$toast.success('添加成功')
        })

        // this.$store.dispatch('addCart', product).then(res => {
        //   console.log(res);
        //   this.$toast.success('加入成功')
        // });

      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailService,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailServiceProp,
      DetailCommentInfo,
      GoodsList,
      DetailBottomNav,
      Scroll
    }
  }
</script>

<style scoped="scoped">
  #detail {
    background-color: #eee;
    position: relative;
    z-index: 9;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
  }

  .content {
    height: calc(100% - 44px - 49px);
  }

  .recomm {
    background-color: #FFFFFF;
  }
</style>
