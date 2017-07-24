<template lang="html">
  <div class="five-star">
    <div class="star" >
      <section class="grey-star" ref="greystar">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink"
         class='star-size' v-for="num in 5" :key="num" viewBox="0 0 20 20">
        <path fill-rule="evenodd"  fill="rgb(221, 221, 221)"
         d="M10.000,-0.000 L13.000,6.000 L20.000,8.000 L15.000,13.000 L16.000,20.000 L10.000,17.000 L3.906,20.000 L5.000,13.000 L0.000,8.000 L7.000,6.000 L10.000,-0.000 "/>
        </svg>
      </section>
      <div class="start-overflow" :style="'width:'+score*width/5+'px'" >
        <section class="full-star" >
          <svg
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           class='star-size' v-for="num in 5" :key="num" viewBox="0 0 20 20">
          <path fill-rule="evenodd"  fill="rgb(255, 203, 77)"
           d="M10.000,-0.000 L13.000,6.000 L20.000,8.000 L15.000,13.000 L16.000,20.000 L10.000,17.000 L3.906,20.000 L5.000,13.000 L0.000,8.000 L7.000,6.000 L10.000,-0.000 "/>
          </svg>
        </section>
      </div>
    </div>

      <!-- <svg v-for="num in 5" :key="num" @click="select(num)" class='-star' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :style="'width:'+starConfig.width+'px'"viewBox="0 0 60 60">
      <path fill-rule="evenodd"  fill="rgb(221, 221, 221)"
       d="M31.000,0.001 L41.217,18.856 L61.996,22.918 L47.531,38.634 L50.157,59.999 L31.000,50.855 L11.843,59.999 L14.469,38.634 L0.004,22.918 L20.783,18.856 L31.000,0.001 "/>
      </svg> -->
      <!-- <svg v-for="num in starConfig.score" :key="num" class="-star" @click="select(num)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :style="'width:'+starConfig.width+'px'" viewBox="0 0 60 60">
      <path fill-rule="evenodd"  fill="rgb(255, 203, 77)"
       d="M31.000,0.001 L41.217,18.856 L61.996,22.918 L47.531,38.634 L50.157,59.999 L31.000,50.855 L11.843,59.999 L14.469,38.634 L0.004,22.918 L20.783,18.856 L31.000,0.001 "/>
      </svg> -->

  </div>
</template>

<script>
/**
 * [五角星显示评分]
 * @score {Number}
 * 可为一位小数
 */
export default {
  name: 'five-star',
  // props:['score'],
  data() {
    return {
      score: 5,
      width:0
    }
  },
  ready() {
    this.score = + this.score;
  },
  mounted() {
    this.$nextTick( () => {
      this.width = this.$refs.greystar.clientWidth
    })
  }
}
</script>

<style scoped lang="scss">
  .five-star{
    width: 100px;
    display: inline-block;
    .star{
      position: relative;
      width: 100px;
      height: 20px;
      .start-overflow{
        overflow: hidden;
        position: relative;
        height: 100%;
      }
      .grey-star,.full-star{
        position: absolute;
        display: flex;
        width: 100px;
        height: 20px;
        top: 0;
        left: 0;
        .star-size{
          width: 20px;
          height: 20px;
        }
      }
    }
  }
</style>
