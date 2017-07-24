/*
 data：代表的依然是页面传递过来的值S 和mutations里的data代表的是同一个值
 increaseCount：代表页面里需要调用的方法    this.$store.dispatch('increaseCount',9）
 INCREASE_COUNT：对应的mutations里的方法
    --SuperJ
 */
export const increaseCount = ({ commit }, data) => {
  commit('INCREASE_COUNT', data);
};
export const address = ({ commit }, data) => {
    commit('INCREASE_ADDRESS', data);
};