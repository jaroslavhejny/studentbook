import Vue from 'vue'
import Router from 'vue-router'
import StudentDetail from '../views/StudentDetail'

import ItemList from '../views/ItemList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/students',
      name: 'StudentsList',
      components: {default: ItemList},
      props: {default: true},
      meta: {
        type: 'students',
        hasDetail: true
      }
    },
    {
      path: '/subjects',
      name: 'SubjectsList',
      components: {default: ItemList},
      props: {default: true},
      meta: {
        type: 'subjects',
        hasDetail: false
      }
    },
    {
      path: '/students/:id',
      name: 'StudentDetail',
      components: {default: StudentDetail},
      props: {default: true}
    },
    {
      path: '*',
      redirect: {name: 'StudentsList'}
    }
  ]
})
