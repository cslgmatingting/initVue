<template lang="html">
  <div class="top-title">
    <div v-if="titleInfo.isShowForward" class="forward" :class="{white: !titleInfo.isBlack}" @click="forward">
    </div>
    <div class="title" :class="{twhite: !titleInfo.isTitleBlack}">
      {{titleInfo.title}}
    </div>
    <div class="facility">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { JSONString } from "../../helper/index.js"

  export default {
    name: 'top-title',
    props:{
      titleConfig:{
        type: Object
      }
    },
    data() {
      return {
        titleInfo:{}
      }
    },
    methods:{
      forward() {
        this.$router.go(-1);
      },
      /**
       * [init description]
       * @param {[isShowForward]} [是否显示向前按钮] [不传则默认显示]
       * @param {[isBlack]} [显示向前按钮是否为白色] [不传则默认显示黑或者传1,传0显示白]
       * @param {[isTitleBlack]} [title是否为白色] [不传则默认显示黑或者传1,传0显示白]
       * @param {[title]} [标题] [必传]
       */
      init() {
        let titleInfo = JSONString(this.titleConfig)||{};
        titleInfo.isShowForward = titleInfo.isShowForward === 0 ? !!titleInfo.isShowForward: true;
        titleInfo.isBlack = titleInfo.isBlack === 0 ? !!titleInfo.isBlack: true;
        titleInfo.isTitleBlack = titleInfo.isTitleBlack === 0 ? !!titleInfo.isTitleBlack: true;
        this.titleInfo = titleInfo;
      }
    },
    mounted() {
      this.init()
    }
  }
</script>

<style lang="scss">
@import '../../assets/style/common/index.scss';
.top-title{
  position: relative;
  .forward{
    width: 126px;
    height: 44px;
    top: 22px;
    left: 18px;
    //background-color: #ccc;
    position: absolute;
    &::after{
      content: "";
      width: 24px;
      height: 24px;
      border-left: 3px solid $gray-75;
      border-bottom: 3px solid $gray-75;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      position: absolute;
      left: 15px;
      top: 8px;
    }
  }
  .white{
    &::after{
      border-left: 3px solid $white;
      border-bottom: 3px solid $white;
    }
  }
  .title{
    height: 88px;
    text-align: center;
    line-height: 88px;
    color: $dart-black;
    font-size: 36px;
  }
  .twhite{
    color: $white;
  }
  .facility{
    position: absolute;
    right:30px;
    top: 22px;
    min-width: 44px;
    height: 44px;
    text-align: center;
    vertical-align: middle;
    line-height: 44px;
  }
}
</style>
