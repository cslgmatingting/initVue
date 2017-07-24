<template>
  <div id="app">
    <!-- <transition name="router-fade" mode="out-in"> -->
  		<router-view></router-view>
  	<!-- </transition  > -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" src="./assets/style/app.scss"></style>
