<template lang="html">
  <div class="home-address">
    <div class="">
       <header>
        <top-title :title-config="titleConfig">
          <div class="add" @click="linkTo">
            {{addName}}
          </div>
        </top-title>
      </header>
      <section>
        <h5><img src="../../assets/imgages/icon_address_2.png">当前提供服务的城市</h5>
        <div class="service">
          <span>无锡</span>
          <span>苏州</span>
        </div>
        <div class="location" @click="getLocation">
          <img src="../../assets/imgages/icon_Placeholder.png">点击定位当前地址
        </div>
        <h5 v-if="addAddress.length"><img src="../../assets/imgages/icon_myaddress.png">我的收货地址</h5>
        <ul class="receipt" v-if="addAddress.length">
            <li v-for="(item,index) in addAddress" @click="selectAddress(item.lagatY,item.lagatX,item.address)">
              <div>
                  {{item.address}}
              </div>
              <div class="user-info">
                <div>
                    {{item.contact}}
                </div>
                <div class="pl-68">
                    {{item.mobile}}
                </div>
              </div>
            </li>
        </ul>
        <h5><img src="../../assets/imgages/icon_nearby.png">附近地址</h5>
        <ul class="near-address">
          <li v-for="(item,index) in poisList" @click="selectAddress(item.location.lng,item.location.lat,item.name)">{{item.name}}</li>
        </ul>
      </section>
    </div>
    <transition name="router-slid" mode="out-in">
        <router-view></router-view>
    </transition>
    <div class="address-animate" v-if="locationing">
      <div class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import TopTitle from 'TopTitle'
import {
  queryUserInfoInRedis
} from 'Api'


export default {
  name: 'home-address',
  components: {
    TopTitle
  },
  data() => ({
    addName: "新增",
    addAddress: [{
      address: '爱康大厦14楼',
      contact: '李女士',
      mobile: '15298802135'
    }],
    titleConfig: {
      title: '选择收货地址'
    },
    poisList: [],
    locationing: false,
    userId: ''
  }),
  methods: {
    linkTo() {
      this.$router.push({
        name: 'add-address'
      });
    },
    queryUserInfoInRedis() {
      const userId = this.userId;
      queryUserInfoInRedis({
        userId
      }).then((data) => {
        const res = data;
        if (res.code === 1000) {
          this.addAddress = res.data.adver.deliveryAddress
        }
      })
    },
    selectAddress(lng, lat, name) {
      console.log(lng, lat, name)
      this.$store.dispatch('recordAddress', {
        lng,
        lat,
        name
      });
      this.$store.dispatch('recordAddressAuto', 2);
      this.$router.push({
        name: 'home'
      });
    },
    getLocation() {
      //console.log(poisList);
      this.locationing = true;
      let _this = this;
      //$script.ready('mapScript', function() {
      let map, geolocation;
      //加载地图，调用浏览器定位服务
      map = new AMap.Map('container', {
        resizeEnable: true
      });
      map.plugin('AMap.Geolocation', function() {
        geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：无穷大
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          buttonPosition: 'RB',
          extensions: 'all'
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', _this.onComplete); //返回定位信息
        AMap.event.addListener(geolocation, 'error', _this.onError); //返回定位出错信息
      });
      //});
    },
    onComplete(data) {
      const _lng = data.position.getLng();
      const _lat = data.position.getLat();
      console.log(data)
      console.log(data.pois);
      this.poisList = data.pois;
      this.locationing = false;
    },
    onError(data) {
      alert('定位失败');
    }

  },
  mounted() {
    if (sessionStorage.i_u_id) {
      this.userId = sessionStorage.i_u_id;
    }
    this.queryUserInfoInRedis();
    this.getLocation();
  }
}
</script>

<style scoped lang="scss" src="../../assets/style/home/home-address.scss"></style>
