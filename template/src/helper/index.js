/**
 * [JSONString 拷贝对象]
 * @param {[type]} data [obj对象]
 */
export function JSONString(data) {
    return JSON.parse(JSON.stringify(data));
}

/**
 * [accAdd 加法函数]
 * @param  {[type]} arg1 [第一个参数]
 * @param  {[type]} arg2 [第二个参数]
 * @return {[type]}      [值]
 */
//加法函数
export function accAdd(arg1, arg2) {
    var r1, r2, m;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
}
//给Number类型增加一个add方法，，使用时直接用 .add 即可完成计算。
Number.prototype.add = function (arg) {
    return accAdd(arg, this);
};


//减法函数
export function Subtr(arg1, arg2) {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    //last modify by deeka
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

//给Number类型增加一个add方法，，使用时直接用 .sub 即可完成计算。
Number.prototype.sub = function (arg) {
    return Subtr(this, arg);
};


//乘法函数
export function accMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    }
    catch (e) {
    }
    try {
        m += s2.split(".")[1].length;
    }
    catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}
//给Number类型增加一个mul方法，使用时直接用 .mul 即可完成计算。
Number.prototype.mul = function (arg) {
    return accMul(arg, this);
};


//除法函数
export function accDiv(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try {
        t1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
    }
    try {
        t2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
    }
    // with (Math) {
    //     r1 = Number(arg1.toString().replace(".", ""));
    //     r2 = Number(arg2.toString().replace(".", ""));
    //     return (r1 / r2) * pow(10, t2 - t1);
    // }

    r1 = Math.Number(arg1.toString().replace(".", ""));
    r2 = Math.Number(arg2.toString().replace(".", ""));
    return (r1 / r2) * pow(10, t2 - t1);
}
//给Number类型增加一个div方法，，使用时直接用 .div 即可完成计算。
Number.prototype.div = function (arg) {
    return accDiv(this, arg);
};

/*
 *获取时间
 *standTime(timeStrap,'yyyy-MM-dd hh:mm:ss')
 *timeStrap 可以是UTC格式数据，也可以是时间戳
 ＊注意：时间戳需要传number类型
 *
 */
export function standTime(date,format){
    Date.prototype.format = function(format) {
        var date = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes() < 10 ? ('0' + this.getMinutes()) : this.getMinutes(),
            "s+": this.getSeconds() < 10 ? ('0' + this.getSeconds()) : this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
        }
        return format;
    };
    return new Date(date).format(format);
}

/**
 * [handleString 处理字符串结尾为逗号或者其他符号的情况]
 * @param  {[type]} str  [字符串]
 * @param  {[type]} sign [默认不传为逗号，传的话可以是其他符号]
 * @return {[type]}      [返回字符串]
 */
export function handleString(str,sign){
  let outStr = '';
  if(!!str){
    sign = !sign ? ',':sign;
    outStr = str.substr(-1,1)==sign ? str.substring(0, str.lastIndexOf(sign)) : str;
  }
  return outStr;
}
/*
  尝试写公共方法
  superj
  lng  经度
                  例：               lng=116.169465
  lat  纬度
                  例：               lat=39.924492
  arr  代表数组
                  例：               arr = [
                                     [116.169465,39.932670],
                                     [116.160260,39.924492],
                                     [116.186138,39.879817],
                                            ]
 */
//计算点到点的距离 返回距离（米）
export function getDistance(poi1={lng,lat},poi2={lng2,lat2}) {
    let distance=''
    // $script.ready('mapScript', function() {
        let lnglat = new AMap.LngLat(+poi1.lng,+poi1.lat)
            distance = lnglat.distance([+poi2.lng,+poi2.lat])
    // })
    return distance
}
//计算点是否在多边形内   返回真/假
export function isPolygon(lng,lat,arr) {
    let distance =null
    let path=arr
    // $script.ready('mapScript', function() {
        var polygon = new AMap.Polygon({
            path: path
        });
        distance = polygon.contains([lng,lat])
    // })
    return distance
}
/*后台给过来的字符串转成可识别的数组
  格式为：[
            {
                distributionCost:'',
                distributionTime:'',
                startPrice:'',
                distributionScope:[]  已修改为经度在前纬度在后
            }
         ]
 */
export function formatPolygonStr(str) {
    let arr=str.split('b')
    let newArr=[]
    arr.forEach(function (el,index) {
        arr[index]=el.split('a')
        arr[index][1]=arr[index][1].split(',')
        arr[index]['distributionScope']= arr[index][0].split(';')
        // arr[index]['distributionCost']=arr[index][1][0]
        // arr[index]['distributionTime']=arr[index][1][1]
        // arr[index]['startPrice']=arr[index][1][2]

        arr[index]['distributionScope'].forEach(function (lnglat,num) {
            let val=lnglat.split(',')
            arr[index]['distributionScope'][num]=[val[1],val[0]]
        })
        newArr.push({
            distributionCost:+arr[index][1][0],
            distributionTime:+arr[index][1][1],
            startPrice: +arr[index][1][2],
            distributionScope:arr[index]['distributionScope'],

        })
        delete arr[index][0]
        delete arr[index][1]
    })
    return newArr
}
export function formatCircleStr(str) {
    let arr=str.split('a')
    let newArr = [];
    arr.forEach(function (el,index) {
        arr[index]=el.split(';')
        arr[index][1]=arr[index][1].split(',')
        newArr.push({
          radius:+arr[index][0],
          distributionCost:+arr[index][1][0],
          distributionTime:+arr[index][1][1],
          startPrice:+arr[index][1][2]
        })
    })
    return newArr;
}
