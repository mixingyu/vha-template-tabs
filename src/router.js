import Vue from 'vue'
import Router from 'vue-router'


import tabs from './pages/tabs.vue'
  import tabs_home from './pages/tabs/home.vue'
    import tabs_home_index from './pages/tabs/home/index.vue'
    import tabs_home_subpage from './pages/tabs/home/subpage.vue'
  import tabs_msg from './pages/tabs/msg.vue'
  import tabs_user from './pages/tabs/user.vue'

import newpage from './pages/newpage.vue'


Vue.use(Router)
export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/tabs',
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: tabs,
      redirect: '/tabs/home',
      children: [
        {
          path: 'home',
          name: 'tabshome',
          component: tabs_home,
          children: [
            {
              path: '',
              name: 'tabshomeindex',
              component: tabs_home_index,
              meta: {
                vhaNavbar: {
                  title: 'neoStudioGroup.com',
                  sideButton: 'none'
                }
              }
            },
            {
              path: 'subpage',
              name: 'tabshomesubpage',
              component: tabs_home_subpage,
              meta: {
                vhaNavbar: {
                  title: 'home 子页面'
                }
              }
            }
          ]
        },
        {
          path: 'msg',
          name: 'tabsmsg',
          component: tabs_msg,
          meta: {
            vhaNavbar: {
              title: 'msg',
              sideButton: 'none'
            }
          }
        },
        {
          path: 'user',
          name: 'tabsuser',
          component: tabs_user,
          meta: {
            vhaNavbar: {
              title: 'user',
              sideButton: 'none'
            }
          }
        }
      ]
    },
    
    {
      path: '/newpage',
      name: 'newpage',
      component: newpage,
      meta: {
        vhaNavbar: {
          title: 'newpage'
        }
      }
    }

  ]
})