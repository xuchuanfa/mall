<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"/>
      <scroll ref="scroll" class="detail flex-1">
        <category-data :subcategories="showSubcategory" @imageLoad="cateimageLoad" />
        <tab-control :titles="['综合', '新品', '销量']" @itemClick="tabClick" />
        <goods-list :goods="showCategoryDetail"/>
      </scroll>
    </div>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/common/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import TabMenu from './childComps/TabMenu'
  import CategoryData from './childComps/CategoryData'

  import {itemListenerMixin} from 'common/mixin'

  import {
    getCategory,
    getSubcategory,
    getCategoryDetail
  } from "network/category";

  export default {
    name: 'profile',
    mixins: [itemListenerMixin],
    data(){
      return {
        categories: [],
        categoryData: {},
        currentIndex: -1,
        currentType: 'pop',
        saveY: 0
      }
    },
    created(){
      this._getCategory()
    },
    activated() {
      this.$refs.scroll.scrollTop(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      //1.保存Y值
      this.saveY = this.$refs.scroll.getScrollY()

      //2.取消全局事件的监听
      this.$bus.$off('itemImageLoad', this.itemImgListener)
    },
    computed: {
      showSubcategory() {
        if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
      showCategoryDetail() {
        if (this.currentIndex === -1) return []
        return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    methods: {
      _getCategory(){
        getCategory().then(res => {
          // 1.获取分类数据
          this.categories = res.data.category.list;
          // 2.初始化每个类别的子数据
          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          // 3.请求第一个分类的数据
          this._getSubcategories(0)
        })
      },
      _getSubcategories(index) {
        this.currentIndex = index;
        const mailKey = this.categories[index].maitKey;
        getSubcategory(mailKey).then(res => {
          this.categoryData[index].subcategories = res.data
          this.categoryData = { ...this.categoryData
          }
          this._getCategoryDetail('pop')
          this._getCategoryDetail('sell')
          this._getCategoryDetail('new')
        })
      },
      _getCategoryDetail(type) {
        // 1.获取请求的miniWallkey
        const miniWallkey = this.categories[this.currentIndex].miniWallkey;
        // 2.发送请求,传入miniWallkey和type
        getCategoryDetail(miniWallkey, type).then(res => {
          // 3.将获取的数据保存下来
          this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = { ...this.categoryData}
        })
      },
      selectItem(index){
        this._getSubcategories(index)
      },
      cateimageLoad(){
        this.$refs.scroll.refresh()
      },
      tabClick(index){
        switch(index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      }
    },
    components: {
      NavBar,
      Scroll,
      TabMenu,
      CategoryData,
      TabControl,
      GoodsList
    }
  }
</script>

<style scoped="scoped">
  .category{
    height: calc(100vh - 49px);
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .content{
    display: flex;
    height: calc(100% - 44px);
  }
  .detail{
    height: 100%;
    overflow: hidden;
  }
</style>
