import * as config from 'config'

export default {
  testMock: `${config.domain}/comment/get`,
  queryAllAdverInfo: `${config.domain}/api/adver/queryAdverImg`,             //广告查询
  findActivity: `${config.domain}/sys/activity/activity/findActivity`,                 //查询活动----测试
  nearShop: `${config.yuntuapiAround}?tableid=${config.tableid}&key=${config.key}`,                   //附近商户
  queryMerchantInRedis: `${config.domain}/api/sys/subOrder/queryMerchantInRedis`,      //根据商户Id查询商户信息，菜品信息
  
  iconUrl:`${config.iconUrl}`,//头像上传
  actionUrl:`${config.actionUrl}`,//图片上传

};
