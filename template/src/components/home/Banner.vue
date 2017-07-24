<template lang="html">
  <div class="banner">
    <swiper class="swipe">
      <swiper-slide class="slide" :key="index" v-for="(item,index) in swiperSlides">
        <img :src="item.image" alt="item.name">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { queryAllAdverInfo } from 'Api'
export default {
  name: 'banner',
  components:{
    swiper,
    swiperSlide
  },
  data() {
    return {
        swiperSlides: [

      ]
    }
  },
  methods:{
    queryAllAdverInfo() {
      queryAllAdverInfo().then((data)=>{
        const res = data;
        if(res.code === 1000){
          this.swiperSlides = res.data.adver;
        }
      })
    }
  },
  mounted() {
    this.queryAllAdverInfo();
     }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/common/_variables.scss";
.banner{
  height: 400px;
  background-color: $light-gray;
  .swipe {
      height: 100%;
      color: #fff;
      font-size: 32px;
      .slide {
        img {
          display: block;
          //height: 100%;
          width: 100%;
        }
      }
    }
}
</style>
