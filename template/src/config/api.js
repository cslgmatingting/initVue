import Vuex from 'vuex';
import store from '../store/index.js'
import config from './api-config.js'
import fetchApi from './fetchApi.js'
import { distance } from 'config'

/**
 * [commonFetch fetchApi公共方法]
 * @param  {[type]} opts [对象参数]
 * opts {
   url,           地址            必传
   method,        方法           不传默认post
   params,        参数           没参数就不传
   json,          是否是json     不传默认false
   customHeaders  自定义头部字段  默认不传
 }
 */

function commonFetch(opts) {
  return fetchApi(opts).then((data)=>{
    if(opts.isCache){
      store.dispatch('fetchSuccess',{
        data:data,
        cacheName: opts.cacheName
      });
    }
    return Promise.resolve(data);
  }).catch((err) => {
    return Promise.reject(err);
  });
}

/* es5 写法 这里不推荐es5写法了*/
// export function queryAllAdverInfo(params) {
//   return commonFetch({
//     url: config.queryAllAdverInfo
//   })
// }

/* es6 写法 */
//无参数照这个写
//获取广告
var queryAllAdverInfo = () => commonFetch({
  url: config.queryAllAdverInfo
})

var  testMock = () => commonFetch({
  url: config.testMock
})

//有参数就按这个写
var findActivity = (params) => commonFetch({
  url: config.findActivity,
  params:params
})
//附近商户
var getNearShop = ({keywords = '', center = '', filter = '', radius = distance, limit = 15, page = 1,sortrule=''}) => commonFetch({
  url: `${config.nearShop}&limit=${limit}&page=${page}&keywords=${keywords}&center=${center}&radius=${radius}&filter=${filter}&sortrule=${sortrule}`,
  method: 'GET',
})
//缓存接口请求的栗子，把请求的参数设置为cacheName,组件中还是正常请求
var test = ({keywords = '', center = '', filter = '', radius = distance, limit = 15, page = 1}) => commonFetch({
  url: `${config.nearShop}&limit=${limit}&page=${page}&keywords=${keywords}&center=${center}&radius=${radius}&filter%20=${filter}`,
  method: 'GET',
  isCache: true,  //是否需要缓存到store中
  cacheName: `test${limit}_${page}_${center}_${keywords}_${radius}_${filter}`  //缓存的名字
})
//根据商户Id查询商户信息，菜品信息
var queryMerchantInRedis = (params) => commonFetch({
  url: config.queryMerchantInRedis,
  params: params
})


//图片上传
export const actionUrl = config.actionUrl//头像上传
export const iconUrl = config.iconUrl//头像上传

export {
  queryAllAdverInfo,
  findActivity,
  getNearShop,
  queryMerchantInRedis,
  test,
  testMock
}
