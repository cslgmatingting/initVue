//export const domain = (process.env.NODE_ENV === 'production') ?'':'http://192.168.199.251:8080';
export const actionUrl = (process.env.NODE_ENV==='production')?'/fileUpload/files':'http://192.168.199.251:8080/fileUpload/files';
export const iconUrl = (process.env.NODE_ENV==='production')?'/fileUpload/headImg':'http://192.168.199.251:8080/fileUpload/headImg';
//export const domain = (process.env.NODE_ENV === 'production') ?'':'http://www.ju2c.com';
export const domain = (process.env.NODE_ENV === 'production') ?'':'/mock';
export const yuntuapiList = 'http://yuntuapi.amap.com/datamanage/data/list';//条件检索
export const yuntuapiAround = 'http://yuntuapi.amap.com/datasearch/around';//周边检索
export const tableid = '58da36437bbf195ae852b87c'; //高德地图tableid
export const key = '86738ff91846836d479d9d9d1a5780c4'; //高德地图 key
export const distance = 10000; //默认检索附近10公里的商户
/**
 * [userIcon 用户头像]
 * @param  {[type]} userId [用户id]
 * @return {[type]}        [头像链接]
 */
export function userIcon (userId){
  return `http://jutu-app.oss-cn-shanghai.aliyuncs.com/ICON/${userId}.jpg`
}
