import querystring from 'querystring';

function fetchApi({
  url,
  method = 'POST',
  params,
  json = false,
  customHeaders = {}
}) {
  const headers = new Headers();
  if (json) {
    headers.append('Content-Type', 'application/json');
  } else {
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
  }
  Object.keys(customHeaders).forEach((k) => {
    headers.append(k, customHeaders[k]);
  });


  const fetch_optins = {
    method,
    headers,
    credentials: 'omit',
    mode:'cors'
  };

  if (params) {
    const body = json ? JSON.stringify(params) : querystring.stringify(params);
    fetch_optins.body = body;
  }

  return fetch(url, fetch_optins).then((response) => {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then((data) => {
    return Promise.resolve(data);
  }).catch((err) => {
    return Promise.reject(err);
  });
}
/*opts {
  url,  地址
  method, 方法
  params, 参数
  json, 是否是json
  customHeaders, 自定义头部字段
  isCache 是否缓存该数据
  cacheName 是否缓存名字
}*/
// export default (opts) => {
//   return fetchApi(opts).then((data) => {
//     return Promise.resolve(data);
//   }).catch((err) => {
//     return Promise.reject(err);
//   });
// };
export default fetchApi
