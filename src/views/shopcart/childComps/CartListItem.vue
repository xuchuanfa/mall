<template>
  <div class="product flex">
    <div class="check-box flex flex-ac" style="padding-left: 4px;">
      <check-button :isChecked="product.checked" @click.native="checkClick"/>
    </div>
    <div class="item flex flex-1">
      <div class="img-box">
        <img :src="product.image" alt="">
      </div>
      <div class="content flex flex-1">
        <div class="title">
          {{product.title}}
        </div>
        <div class="desc">
          {{product.desc}}
        </div>
        <div class="bottom flex-between">
          <div class="price">{{'￥' + product.price}}</div>
          <div class="num">{{'x ' + product.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import checkButton from 'components/common/checkButton/checkButton'

  export default {
    name: 'CartListItem',
    props: {
      product: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      checkClick(){
        this.product.checked = !this.product.checked
      }
    },
    components: {
      checkButton
    }
  }
</script>

<style scoped="scoped">
  .product {
    background-color: #FFFFFF;
    padding: 8px 0;
    color: #323233;
    font-size: 12px;
    box-sizing: border-box;
  }

  .check-box {
    /* width: 50px; */
  }
  .item{
    padding-right: 14px;
    box-sizing: border-box;
  }
  .img-box {
    width: 80px;
    height: 90px;
  }

  .img-box img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }

  .content {
    flex-direction: column;
    width: 0;
    min-height: 90px;
  }

  .content .title {
    max-height: 32px;
    font-weight: 500;
    line-height: 16px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .content .desc{
    line-height: 20px;
    max-height: 20px;
    color: #7d7e80;
    word-wrap: break-word;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .content .bottom{
    line-height: 20px;
    display: flex;
  }
  .bottom .price{
    color: #ee0a24;
    font-weight: 500;
  }
</style>
