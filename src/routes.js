import Login from './views/Login.vue'
import NotFound from './views/Login.vue'
import Home from './views/Home.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'

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
    path:'/home',
    component:Home,
    name:'home' 
  },
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

export default routes;