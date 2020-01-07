<template>
  <div v-if="Object.keys(rate).length !== 0" class="comment bg-fff">
    <div class="head flex flex-between">
      <div class="head-rate">买家评价  {{rate.cRate}}</div>
      <van-icon name="arrow" size="16"/>
    </div>
    <div class="content" v-if="rate.commentInfo">
      <div class="user flex">
        <div class="avatar">
          <img :src="rate.commentInfo.user.avatar" alt="" style="width: 100%;">
        </div>
        <span class="user-name">
          {{rate.commentInfo.user.uname}}
        </span>
      </div>
      <div class="comment-con">{{rate.commentInfo.content}}</div>
      <div class="atts">
        <span class="atts-create">{{rate.commentInfo.created | showDate}}</span>
        <span style="margin-left: 8px;">{{rate.commentInfo.style}}</span>
      </div>
      <div class="images flex" v-if="rate.commentInfo.images">
        <div class="img" v-for="item in rate.commentInfo.images">
          <img :src="item" alt="" style="width: 100%;height: 100%;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {formatDate} from 'common/utils.js'

  export default {
    props: {
      rate: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    filters: {
      showDate(value){
        //1.将时间戳转成Date对象
        const date = new Date(value * 1000)

        //2.将date进行格式化
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped="scoped">
  .comment{
    padding: 0 15px;
    margin: 10px 0;
  }
  .head{
    height: 50px;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .head-rate{
    font-size: 12px;
    color: #999999;
  }
  .content{
    padding: 15px 0;
  }
  .user{
    align-items: center;
    padding-bottom: 15px;
  }
  .user .avatar{
    overflow: hidden;
    width: 30px;
    height: 30px;
    border: 1px solid #efefef;
    border-radius: 50%;
  }
  .user .user-name {
    margin-left: 10px;
    color: #424242;
    font-size: 15px;
  }
  .comment-con{
    color: #727272;
    font-size: 14px;
    line-height: 17px;
  }
  .atts{
    margin-top: 7.5px;
    font-size: 12px;
    color: #999;
  }
  .images{
     margin-top: 7.5px;
  }
  .images .img{
    width: 70px;
    height: 70px;
    overflow: hidden;
    margin-left: 4px;
  }
  .images .img:first-child{
    margin-left: 0;
  }
</style>
