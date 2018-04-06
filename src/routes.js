import Login from './views/Login.vue'
import NotFound from './404.vue'
import Home from './views/Home.vue'
import Page1 from './views/nav1/Page1.vue'
import Page2 from './views/nav1/Page2.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import AssertData from './views/LingHuData/AssertData.vue'
import User from './views/nav1/user.vue'
let routes = [
  {
    path: '/login',
    component:Login,
    name:'',
    hidden:true
  },
  {
    path:'/404',
    component:NotFound,
    hidden: true
  },
 {
  path:'/',
  component:Home,
  name:'灵狐系统',
  children:[
    {
      path:'/assertdata',
      component:AssertData,
      name:'灵狐数据'
    }
  ]
 },
 {
   path:'/',
   component:Home,
   name:'导航一',
   children:[
    {
      path:'/page1',
      component:Page1,
      name:'页面1'
    },
    {
      path:'/page2',
      component:Page2,
      name:'页面2'
    },
    {
      path:'/user',
      component:User,
      name:'测试User'
    }
   ]
 },
  {
    path:'/',
    component:Home,
    name:'导航二',
    children:[
      {
        path:'/page4/:id/:userName',
        component:Page4,
        name:'page4'
      },
      {
        path:'/page5', 
        component:Page5, 
        name:'page5'       
      }
    ]
  },
  {
    path: '/',
    component: Home,
    name: '',
    iconCls: 'fa fa-address-card',
    leaf: true,//只有一个节点
    children: [
        { path: '/page6', component: Page6, name: '导航三' }
    ]
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
} 
 
]

export default routes;