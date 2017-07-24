<template lang="html">
  <div class="store" v-touch-swipe  data-del-width="200">
      <div class="matter" @click="linkTo">
    		  <div class="left">
            <img :src="shopInfo.logo" alt="">
          </div>
    		  <div class="center">
      			 <h3>{{shopInfo._name}}</h3>
      			 <div class="center-mark">
      			      <!-- <i class="marks accept">接受预定</i>-->
                  <i v-if="!!+shopInfo.operatingStatus" class="marks rest">休息中</i>
                  <i class="marks"><five-star :score="shopInfo.comments"></five-star></i>
                  <!-- <span>10:00开始配送</span> -->
      			 </div>
      			 <div class="center-config"><span v-if="shopInfo.startPrice">起送 ￥{{shopInfo.startPrice}}</span><span v-if="shopInfo.cost">|</span><span v-if="shopInfo.cost">配送 ￥{{shopInfo.cost}}</span></div>
    		  </div>
    	  <div class="right">
    	    <div v-if="shopInfo.time">{{shopInfo.time}}分钟</div>
    	    <p>{{(shopInfo._distance/1000).toFixed(2)}}km</p>
    	    <div class="jutu">聚兔专送</div>
    	  </div>
      </div>
      <div class="bottom">
        <div class="number" v-if="list.length>2" @click="showAll">
          {{list.length}}个活动 <i :class="{show: isShowAll}"></i>
        </div>
        <ul>
          <li v-for='(item,index) in list' v-if="index<sum">
            <discount-item :info="item"></discount-item>
          </li>
        </ul>
      </div>
      <div class="delete icon-trash-can" v-if="isShowDel">
        <svg class="order-delete-icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order-delete"></use>
          </svg>
       </div>
  </div>
</template>

<script>

/**
shopInfo:{
 "_name": "东吴面馆（张家港店）",
 "activeAllDiscount": "",
 "activeType": "knockActive,discountActive,fullActivefeeActive,",
 "operatingStatus": "0",
 "ativeKnockId": "75374",
 "activeAllDiscountId": "",
 "activeDiscount": "冰点价格  你还有什么理由不来！",
 "merchantStatus": "4",
 "activeDiscountId": "76895,76895",
 "shopid": "56138",
 "activeFeedSend": "满15元，免配送费；",
 "distributionCost": 30,
 "logo": "http://jutu-app.oss-cn-shanghai.aliyuncs.com/20170509124858796597.jpg",
 "latLng": "",
 "activeFull": "满15元，赠 饮料 1份；",
 "activeFullId": "97258",
 "startPrice": 20,
 "radius": "3000;20.0,3.0,30",
 "ativeKnock": " 满10减8",
 "comments": 5,
 "_distance": "265"
}
 */
import DiscountItem from './DiscountItem.vue';
import FiveStar from 'FiveStar'
import { touchSwipe } from 'mixin'
export default {
  name: 'store',
  components:{
    DiscountItem,
    FiveStar
  },
  props: {
    shopInfo: {
      type: Object
    },
    isShowDel:{
      type: Boolean
    }
  },
  mixins: [touchSwipe],
  data() {
    return {
      isShowAll:false,
      src:'https://fuss10.elemecdn.com/9/d9/5763287027bc10902e11952558278jpeg.jpeg',
      list:[
        // {
        //   typeName:'赠',
        //   type:0,
        //   content:'新用户进店第一次消费，立减15元'
        // },
        // {
        //   typeName:'减',
        //   type:1,
        //   content:'满25减3，满35减5'
        // },
        // {
        //   typeName:'免',
        //   type:2,
        //   content:'满25减3，满35减5'
        // },
        // {
        //   typeName:'折',
        //   type:3,
        //   content:'新用户进店第一次消费，立减15元'
        // },
        // {
        //   typeName:'特',
        //   type:4,
        //   content:'新用户进店第一次消费，立减15元'
        // }
      ],
      sum: 2,
      score:4.4,
      cost: '', //配送费
      time: ''//配送时间
    }
  },
  methods:{
    showAll() {
      this.isShowAll = !this.isShowAll;
      if(this.isShowAll){
        this.sum = this.list.length;
      } else {
        this.sum = 2
      }
    },
    linkTo() {
      this.$router.push({name:'shop',query:{id: this.shopInfo.shopid}});
    },
    init() {
      if(!!this.shopInfo.radius){
        let data = this.shopInfo.radius.split(';')[1].split(',');
        this.cost = data[1];
        this.time = data[2];
      }
    },
    handleActivity() {
      let newArr = [];
      if(this.shopInfo.activeDiscount) newArr.push({typeName:'特',type:4,content:this.shopInfo.activeDiscount});
      if(this.shopInfo.activeAllDiscount) newArr.push({typeName:'折',type:3,content:this.shopInfo.activeAllDiscount});
      if(this.shopInfo.ativeKnock) newArr.push({typeName:'减',type:1,content:this.shopInfo.ativeKnock});
      if(this.shopInfo.activeFull) newArr.push({typeName:'赠',type:0,content:this.shopInfo.activeFull});
      if(this.shopInfo.activeFeedSend) newArr.push({typeName:'免',type:2,content:this.shopInfo.activeFeedSend});
      this.list = newArr;
    }
  },
  mounted() {
    this.init();
    this.handleActivity();
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/style/common/index.scss";
  .store {
      padding: 30px 20px;
      border-bottom: 1px solid #ccc;
      position: relative;
      @include clear-fix;
      .delete{
        position:absolute;
        right: -200px;
        top:0;
        width:200px;
        height:100%;
        background-color:$red-5959;
        font-size:60px;
        text-align:center;
        line-height:1;
        float: left;
        color:#fff;
        display: flex;
        justify-content: center;
        align-items:center;
        .order-delete-icon{
          width: 65px;
          height: 65px;
          fill:rgb(255, 255, 255)
        }
      }
      .matter {
          width: 100%;
          display: inline-block;
          display: flex;
          .left {
              border: 1px solid #DDDDDD;
              width: 168px;
              height: 126px;
              float: left;
              img{
                width: 100%;
                height: 100%;
                display: inline-block;
              }
          }
          .center {
              float: left;
              flex: 1;
              //width: 356px;
              // height:126px;
              font-size: 22px;
              color: #333333;
              padding-left: 20px;
              h3 {
                  font-size: 32px;
                  color: #333333;
                  line-height: 36px;
                  width: 100%;
              }
              .center-mark {
                  padding-top: 18px;
                  @include clear-fix;
                  display: flex;
                  .marks {
                      float: left;
                      font-size: 20px;
                      color: #ffffff;
                      display: inline-block;
                      border-radius: 5px;
                      padding: 0 4px;
                      height: 26px;
                      line-height: 26px;
                      text-align: center;
                      margin-right: 10px;
                      display: flex;
                      align-items:center;
                  }
                  .accept{
                    background: #5ad0e0;
                  }
                  .rest{
                    background: $gray-ccc;
                  }
                  span{
                    float: left;
                    height: 26px;
                    line-height: 26px;
                  }
              }
              span{
                color: $gray-666;
              }
              .center-config{
                  color: $gray-666;
                  padding-top: 12px;
                  span {
                      padding-left: 10px;
                  }
              }
          }
          .right {
              float: right;
              padding-top: 2px;
              font-size: 22px;
              color: #ff5959;
              text-align: right;
              p {
                  color: $gray-666;
                  padding: 18px 0 20px;
              }
              .jutu {
                  font-size: 20px;
                  color: #ffffff;
                  background: #ff5959;
                  border-radius: 8px 0 8px 0;
                  padding: 0 4px;
                  line-height: 26px;
                  text-align: center;
              }
          }
      }
      .bottom {
          padding-top: 20px;
          position: relative;
          padding-left: 188px;
          span {
              font-size: 22px;
              color: #999999;
          }
          .number{
            position: absolute;
            right: 30px;
            top: 30px;
            color: #999;
            i{
             content: "";
              width: 10px;
              height: 10px;
              border-left: 2px solid #999;
              border-bottom: 2px solid #999;
              transform: rotate(-45deg);
              -webkit-transform: rotate(-45deg);
              position: absolute;
              right: -20px;
              top: 10px;
              &.show{
                transform: rotate(135deg);
                -webkit-transform: rotate(135deg);
              }
            }
          }
          ul{
            padding-right: 130px;
            li{
              padding-top: 10px;
              @include clamp1;
            }

          }


      }
  }
</style>
