import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/post',
    name: 'post',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/PostView.vue')
  },
  {
    path: '/note',
    name: 'note',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/NoteMain.vue'),
    children: [
      {
        path: 'java',
        name: 'java',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Note/JavaLearn.vue')
      },
      {
        path: 'frontend',
        name: 'frontend',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Note/FrontEnd.vue')
      },
      {
        path: 'cpp',
        name: 'cpp',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Note/CppLearn.vue')
      },
      {
        path: 'Algorithm',
        name: 'Algorithm',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/Note/AlgorithmMain.vue'
          ),
        children: [
          {
            path: 'sortLearn',
            name: 'sortLearn',
            component: () =>
              import(
                /* webpackChunkName: "about" */ '../views/Note/Algorithm/SortLearn.vue'
              )
          },
          {
            path: 'searchLearn',
            name: 'searchLearn',
            component: () =>
              import(
                /* webpackChunkName: "about" */ '../views/Note/Algorithm/SearchLearn.vue'
              )
          },
          {
            path: 'dp',
            name: 'dp',
            component: () =>
              import(
                /* webpackChunkName: "about" */ '../views/Note/Algorithm/DpLearn.vue'
              )
          },
          {
            path: 'HighPrecision',
            name: 'HighPrecision',
            component: () =>
              import(
                /* webpackChunkName: "about" */ '../views/Note/Algorithm/HighPrecision.vue'
              )
          },
          {
            path: 'Simulation',
            name: 'Simulation',
            component: () =>
              import(
                /* webpackChunkName: "about" */ '../views/Note/Algorithm/SimulationLearn.vue'
              )
          }
        ]
      }
    ]
  },
  {
    path: '/experience',
    name: 'experience',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ExperienceView.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/MessageView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
