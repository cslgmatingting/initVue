<template lang="html">
  <div class="head-search">
    <div class="location" @click="selectAddress">
      <svg class="location-icon">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#home-location"></use>
      </svg>
      <p>{{positionInfo.name}}</p>
      <i class="forward"></i>
    </div>
    <div class="search-input" @click="linkTo">
      <svg class="search-icon">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#home-search"></use>
      </svg>
      <input type="text" placeholder="输入商家或商品名称" name="" value="">
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'head-search',
  computed:{
    ...mapGetters([
      // 'positionInfo'
    ])
  },
  data() {
    return {
      positionInfo: {
        name: 'init'
      }
    }
  },
  methods:{
    linkTo() {
      this.$router.push({name: 'example'})
    },
    selectAddress() {
      //this.$router.push({name: 'home-address'})
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../../assets/style/common/index.scss";

.head-search {
  height: 58px;
  width:100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 10px 20px 0;

  .location {
    width: 232px;
    float: left;
    border-radius: 28px;
    border: 1px solid #fff;
    height: 58px;
    margin-right: 18px;
    background-color: rgba(0,0,0,.2);
    position: relative;
    .location-icon{
      width: 20px;
      height: 27px;
      fill: $white;
      position: absolute;
      top: 15px;
      left: 14px;
    }
    p{
      line-height: 58px;
      padding:0 44px;
      color: $white;
      @include clamp1;
    }
    .forward{
        width: 20px;
        height:20px;
        right: 20px;
        position: absolute;
        top: 19px;
        &::after{
          content: "";
          width: 10px;
          height: 10px;
          border-left: 3px solid #fff;
          border-bottom: 3px solid #fff;
          transform: rotate(225deg);
          -webkit-transform: rotate(225deg);
          position: absolute;
          top: 2px;
        }
      }
  }
  .search-input {
    width: 460px;
    height: 58px;
    float: left;
    border-radius: 28px;
    background-color: $white;
    line-height: 58px;
    position: relative;
    .search-icon{
      width: 24px;
      height: 24px;
      position: absolute;
      left: 24px;
      top: 18px;
    }
    input {
      vertical-align: middle;
      height: 100%;
      width: 100%;
      padding: 5px 20px 5px 50px;
      font-size: 28px;
    }
  }
}
</style>
