# 聚兔外卖微信端

> A Vue.js project
## 搭建

```
npm install -g vue-cli
vue init webpack-simple dispatch-manage
```

## 运行

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9060
npm run dev

# build for production with minification
npm run build
```

## 规范

1. [规范链接1](http://www.jianshu.com/p/8d291d823cc0#)

2. [规范链接2](http://zhibimo.com/read/Ashu/front-end-style-guide/css/less.html)

## 使用

### 相关文档
[-----vue.js----](https://cn.vuejs.org/v2/api/)

[-----vue-router地址----](https://router.vuejs.org/zh-cn/index.html)

[-----sass----](http://www.w3cplus.com/sassguide/syntax.html)

[-----flex----](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)

[-----es6----](http://es6.ruanyifeng.com/#docs/symbol)

#### Sass使用
 1.  `@import './_variables.scss';` 后面一定要有分号
 2.  变量用 `color: $blue`;
 3.  引用_mixins.scss  文件中的时候用 `@include clear-fix;`


#### 添加route   


  * 在`src/config/router-config.js`中添加对应的路由，对应的组件
  * 使用代码分割的写法引入页面，实现路由懒加载

```javascript
const Home = r => require.ensure([], () => r(require('../views/home/Home')), 'js/Home')//代码分割写法

export default [{
  path: '/',
  component: App,
  children:[
    { path: '',redirect: '/home' },//地址为空时跳转home页面
    { path: 'home',name: 'home', component: Home }
  ]
}]
```
#### 路由命名

![路由命名](http://rainagain.github.io/images/Wx/66522A47-F8EF-4B6E-AAE2-33257D7C7793.png)

### 组件使用

#### TopTitile顶部标题使用

* 接受参数titleConfig,可添加属性`isShowForward`和`title`,`isShowForward`默认显示，即titleConfig中不写或者传`isShowForward: false`

* 接收slot内容分发，具体内容见[vue.js-slot部分](https://cn.vuejs.org/v2/guide/components.html#使用-Slot-分发内容)

* slot中可以在父组件写class样式，和使用事件方法

html:
 ```html

 <top-title :title-config="titleConfig">
   <a href="tel:8888888888" class="tel-icon">
     <img src="http://www.easyicon.net/api/resizeApi.php?id=1136892&size=24" alt="">
   </a>
 </top-title>
 ```
 js:
 ```javascript
 data() {
   return {
     titleConfig: {
       title:'店铺名称'
     }
   }
 }
 ```


#### 组件命名
![组件命名](http://rainagain.github.io/images/Wx/0F6C36EB-CDE6-4C29-BE86-F6448521617C.png)

#### 组件方法书写顺序
![组件方法书写顺序](http://rainagain.github.io/images/Wx/5880B93D-3811-456B-82BE-DE0E39E457C1.png)

#### 组件方法命名规范
![组件方法命名规范](http://rainagain.github.io/images/Wx/CE5F212B-5974-4346-964A-634B25739758.png)
