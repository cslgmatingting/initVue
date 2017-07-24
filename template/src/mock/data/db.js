var Mock = require('mockjs');

module.exports = {
  getComment: Mock.mock({
    "error": 0,
    "message": "success",
    "result|40": [{
      "author": "@name",
      "comment": "@cparagraph",
      "date": "@datetime"
    }]
  }),
  addComment: Mock.mock({
    "error": 0,
    "message": "success",
    "result": []
  }),
  'apiAdverQueryAdverImg': Mock.mock({
    "code":1000,
    "data":{
      "adver|4":[
        {"id|+1":9000,"createTimestamp":1491810139000,"updateTimestamp":1495457257000,"name":"@ctitle(3,8)","image":"@image('750x448', '@color', '#FFF', 'png', '@increment')","url":"","status":"1","type":"2","shopId":"@id","order":"1"}
      ]
    },
    "message":"成功",
    "list":[]
  }),
  queryFavorableZone: Mock.mock({"code":1000,"data":{"adver":[{"image":"http://jutu-app.oss-cn-shanghai.aliyuncs.com/20170428173702675164.jpg","ruleRemark":"1.活动时间：1879年1月1日至2100年12月12日\n2.活动范围：全国\n3.活动内容：活动\n4.优惠仅限聚兔外卖App下单且选择在线支付的订单享受","favorableType":1,"name":"悠闲下午茶","orderNum":1,"pId":53450},{"image":"http://jutu-app.oss-cn-shanghai.aliyuncs.com/20170428173453656924.jpg","ruleRemark":"1.活动时间：1879年1月1日至2100年12月12日\n2.活动范围：全国\n3.活动内容：活动\n4.优惠仅限聚兔外卖App下单且选择在线支付的订单享受","favorableType":2,"name":"超值特价菜","orderNum":2,"pId":53510},{"image":"http://jutu-app.oss-cn-shanghai.aliyuncs.com/20170428173450609870.jpg","ruleRemark":"1.活动时间：1879年1月1日至2100年12月12日\n2.活动范围：全国\n3.活动内容：活动\n4.优惠仅限聚兔外卖App下单且选择在线支付的订单享受","favorableType":1,"name":"超值优惠","orderNum":3,"pId":53514},{"image":"http://jutu-app.oss-cn-shanghai.aliyuncs.com/20170428173447097350.png","ruleRemark":"1.活动时间：1879年1月1日至2100年12月12日\n2.活动范围：全国\n3.活动内容：活动\n4.优惠仅限聚兔外卖App下单且选择在线支付的订单享受","favorableType":2,"name":"精选套餐","orderNum":5,"pId":53518},{"image":"http://jutu-app.oss-cn-shanghai.aliyuncs.com/20170428173444381197.png","ruleRemark":"1.活动时间：1879年1月1日至2100年12月12日\n2.活动范围：全国\n3.活动内容：活动\n4.优惠仅限聚兔外卖App下单且选择在线支付的订单享受","favorableType":1,"name":"水果派对","orderNum":5,"pId":54288}]},"message":"成功","list":[]}),
  aroundDatasearch: Mock.mock({
    "count": "105",
    "info": "OK",
    "infocode": "10000",
    "status": 1,
    "datas|10": [
      {
        "_id": "@id",
        "_location": "120.54285,31.838227",
        "_name": "@name(4,20)",
        "_address": "江苏省苏州市张家港市杨舍镇江苏帝伦时尚酒店",
        "speeds": 0,
        "activeAllDiscount": "",
        "activeType": "discountActive,",
        "operatingStatus": "0",
        "activeAllDiscountId": "",
        "ativeKnockId": "",
        "activeDiscount": "鲜榨果汁提供数量有限！抓紧时间享优惠吧！",
        "activeFeedSendId": "",
        "merchantStatus": "4",
        "activeDiscountId": "75296",
        "shopid": "56329",
        "sales": 0,
        "isBannerShop": 1,
        "activeFeedSend": "",
        "distributionCost": 30,
        "logo": "@image('166x124', '@color')",
        "latLng": "",
        "activeFull": "",
        "shipMethod": 1,
        "activeFullId": "",
        "isBill": 1,
        "categoryId": "a2,a1,a5,a7,",
        "startPrice": 20,
        "sign": 0,
        "contactStatus": "1",
        "radius": "3000;20.0,3.0,30",
        "isNewShop": 1,
        "comments": 5,
        "ativeKnock": "",
        "_createtime": "2017-04-30 09:43:29",
        "_updatetime": "2017-07-16 11:30:06",
        "_province": "江苏省",
        "_city": "苏州市",
        "_district": "张家港市",
        "_distance": "291",
        "_image": []
      }
    ]
  })
};
