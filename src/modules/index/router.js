import store from '../../store'
const Home=(resolve) => {
    import('./components/home').then((module) => {
        resolve(module)
    })
}
const Login=(resolve) => {
    import('./components/login').then((module) => {
        resolve(module)
    })
}

const routes = [
    { path: '/', name: 'home', component: Home, meta: {requiresAuth:true, title: '悠聊-Uchat' }},
    { path: '/login', name: 'login', component: Login, meta: { title: '登录-Uchat' }},
]

const router=new VueRouter({
    routes: routes
})
/*路由全局拦截*/
router.beforeEach((to,from,next)=>{
    if(to.meta.requiresAuth){
      if(store.state.token){
        next()
      }else{
         next({name:'login'})
      }
    }else{
      next();
    }
  })


export default router