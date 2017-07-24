<template>
  <div id="order">
    <top-title :title-config="titleConfig"></top-title>

    {{msg}}
    <foot-guide></foot-guide>
  </div>
</template>
<script>
  import TopTitle from 'TopTitle'
  import FootGuide from 'FootGuide'
  export default {
    name: "order",
    data: () => ({
      msg: 'hello this is order page',
      titleConfig: {
        title: '个人中心',
        isTitleBlack: 1
      }
    }),
    components: {
      TopTitle,
      FootGuide,
    }
  }
</script>
<style lang="scss" scoped>
  #order {
    height: 100%;
    background-color: #fff;
  }
</style>
