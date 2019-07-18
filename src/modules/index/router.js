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
    { path: '/', name: 'home', component: Home, meta: { title: '悠聊-Uchat' }},
    { path: '/login', name: 'login', component: Login, meta: { title: '登录-Uchat' }},
]

export default new VueRouter({
    routes: routes
})