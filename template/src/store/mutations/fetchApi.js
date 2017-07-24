export const FETCH_SUCCESS = (state, data) => {
  state[data.cacheName] = data.data;
};

export const FETCH_FAIL = (state, data) => {
  state[data.cacheName] = data.err;
};
