import Main from '../views/Main'

const Home = r => require.ensure([], () => r(require('../views/home/Home')), 'js/Home')
const Order = r => require.ensure([], () => r(require('../views/order/Order')), 'js/Order')
const User = r => require.ensure([], () => r(require('../views/user/User')), 'js/User')
const Example = r => require.ensure([], () => r(require('../views/example/Example')), 'js/Example')

export default [{
    path: '/',
    component: Main,
    children: [
        {path: '', redirect: '/home'},//地址为空时跳转home页面
        {path: 'home', name: 'home', component: Home},//主页
        {path: 'order', name: 'order', component: Order},//订单页
        {path: 'user', name: 'user', component: User},//个人中心
        {path: 'example', name: 'example', component: Example}//栗子
    ]
}]
