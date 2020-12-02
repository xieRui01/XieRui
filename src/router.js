import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/one',
            name: 'one',
            component: () =>
                import ('./views/one.vue'),
            children: [{
                    path: 'one-child1',
                    name: 'one-child1',
                    component: () =>
                        import ('./components/one-child1.vue')
                },
                {
                    path: 'one-child2',
                    name: 'one-child2',
                    component: () =>
                        import ('./components/one-child2.vue')
                },
                {
                    path: 'one-child3',
                    name: 'one-child3',
                    component: () =>
                        import ('./components/one-child3.vue')
                },
                {
                    path: 'one-child4',
                    name: 'one-child4',
                    component: () =>
                        import ('./components/one-child4.vue')
                },
                {
                    path: '/',
                    redirect: '/one/one-child1'
                }
            ]
        },
        {
            path: '/',
            redirect: '/one'
        },
        {
            path: '/two',
            name: 'two',
            component: () =>
                import ('./views/two.vue')
        },
        {
            path: '/three',
            name: 'three',
            component: () =>
                import ('./views/three.vue')
        }

    ]
})