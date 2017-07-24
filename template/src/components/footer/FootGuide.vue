<template lang="html">
  <section class="foot-guide">
    <nav>
      <li @click="linkTo('home')">
        <p>
          <svg class="icon-size-home" :class="{active: route=='home'}">
           <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#footer-home"></use>
          </svg>
        </p>
        <p>主页</p>
      </li>
      <li @click="linkTo('order')">
        <p>
          <svg class="icon-size-order" :class="{active: route=='order'}">
           <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#footer-order"></use>
          </svg>
        </p>
        <p>订单</p>
      </li>
      <li @click="linkTo('user')">
        <p>
          <svg class="icon-size-user" :class="{active: route=='user'}">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#footer-user"></use>
          </svg>
        </p>
        <p>我的</p>

      </li>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'foot-guide',
  data() {
    return {
      route:'home'
    }
  },
  methods:{
    linkTo(name) {
      this.$router.push({name:name});
    }
  },
  mounted() {
    this.route = this.$route.name;
  }

}
</script>

<style lang="scss" scoped>
.foot-guide{
  position: fixed;
  bottom: 0;
  left: 0;
  right:0;
  z-index: 100;
  width: 100%;
  height: 98px;
  border-top: 1px solid #BBBBBB;
  box-shadow: 0 -.05px .05px rgba(0,0,0,.1);
  background-color: #fff;
  nav{
    display: flex;
    height: 100%;
    li{
      flex: 1;
      align-items: center;
      flex-direction: column;
      text-align: center;
      vertical-align: middle;
      font-size: 20px;
      color: #666;
      line-height: 98px;
      padding-top: 10px;
      .icon-size-home{
        width: 50px;
        height: 48px;
        fill:rgb(77, 77, 77);
        &.active{
          fill:rgb(255,89,89);
        }
      }
      .icon-size-order{
        width: 36px;
        height: 46px;
        fill:rgb(117, 117, 117);
        &.active{
          fill:rgb(255,89,89);
        }
      }
      .icon-size-user{
        width: 40px;
        height: 47px;
        fill:rgb(117, 117, 117);
        &.active{
          fill:rgb(255,89,89);
        }
      }
    }
  }
}
</style>
