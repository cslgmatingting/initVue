<template>
  <div id="user">
    <top-title :title-config="titleConfig"></top-title>
    <section>
      这是个人中心
    </section>
    <foot-guide></foot-guide>
  </div>
</template>
<script>
  import TopTitle from 'TopTitle'
  import FootGuide from 'FootGuide'
  export default {
    name: "user",
    data: () => ({
      titleConfig: {
        title: '个人中心',
        isTitleBlack: 1
      }
    }),
    components: {
      TopTitle,
      FootGuide
    }
  }
</script>
<style lang="scss" scoped>
  #user {
    height: 100%;
    background-color: #fff;
  }
</style>
