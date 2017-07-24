<template lang="html">
  <div class="example">
    {{msg}}
    <p>{{count}}</p>
    <div class="" @click="add">
      点我啊
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import {queryAllAdverInfo,findActivity} from 'Api'

export default {
  name: 'example',
  data: () => ({
    msg: '这是个vuex的使用栗子',
    test: ''
  }),
  computed:{
    ...mapGetters([
      'count'
    ])
  },
  methods:{
    add() {
      this.$store.dispatch('increaseCount',4);
    },
    queryAllAdverInfo() {
      findActivity({
        activityDay: 1
      }).then((res)=>{
        console.log(res)
        this.test = res.data;
      })
    }
  },
  mounted() {
    this.queryAllAdverInfo();
  }
}
</script>

<style lang="scss" scoped>
  .example{

  }
</style>
