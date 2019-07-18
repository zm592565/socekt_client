const Home=(resolve) => {
    import('./components/home').then((module) => {
        resolve(module)
    })
}

const routes = [
    { path: '/', name: 'home', component: Home, meta: { title: '悠聊-Uchat' }},
]

export default new VueRouter({
    routes: routes
})