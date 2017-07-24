export const fetchSuccess = ({ commit }, data) => {
  commit('FETCH_SUCCESS', {
    data:data.data,
    cacheName: data.cacheName
  });
};