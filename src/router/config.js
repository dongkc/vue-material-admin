import { LayoutAuth, LayoutDefault, LayoutChat } from '@/components/layouts'

export const publicRoute = [
  {
    path: '*',
    component: LayoutAuth,
    meta: {
      title: 'Login'
    },
    redirect: '/auth/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        meta: {
          title: 'Login'
        },
        component: () => import('@/views/auth/Login.vue')
      }
    ]
  },

  {
    path: '/404',
    name: '404',
    meta: {
      title: 'Not Found'
    },
    component: () => import('@/views/error/NotFound.vue')
  },

  {
    path: '/500',
    name: '500',
    meta: {
      title: 'Server Error'
    },
    component: () => import('@/views/error/Error.vue')
  }
]

export const protectedRoute = [
  {
    path: '/ww',
    component: LayoutDefault,
    meta: {
      title: 'Home',
      group: 'apps',
      icon: ''
    },
    redirect: '/listsss',
    children: [
      {
        path: '/listwww',
        name: 'Dashboard',
        meta: {
          title: 'www',
          group: 'apps',
          icon: 'dashboard'
        },
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: '/403',
        name: 'Forbidden',
        meta: {
          title: 'Access Denied',
          hiddenInMenu: true
        },
        component: () => import('@/views/error/Deny.vue')
      }
    ]
  },
  {
    path: '/',
    component: LayoutDefault,
    meta: {
      title: '主页',
      group: 'apps',
      icon: ''
    },
    redirect: '/list',
    children: [
      {
        path: '/list',
        name: 'list',
        meta: {
          title: '工程列表',
          group: 'apps',
          icon: 'dashboard'
        },
        component: () => import('@/views/ProjectsList.vue')
      },
      {
        path: '/403',
        name: 'Forbidden',
        meta: {
          title: 'Access Denied',
          hiddenInMenu: true
        },
        component: () => import('@/views/error/Deny.vue')
      }
    ]
  },

  //list
  {
    path: '/cms',
    component: LayoutDefault,
    redirect: '/cms/table',
    meta: {
      title: 'CMS',
      icon: 'view_compact',
      group: 'cms'
    },
    children: [
      {
        path: '/cms/table',
        name: 'ListTable',
        meta: {
          title: 'CMS Table'
        },
        component: () => import('@/views/list/Table.vue')
      }
    ]
  },

  //widgets
  {
    path: '/widgets',
    component: LayoutDefault,
    meta: {
      title: 'Widget',
      icon: 'widgets',
      group: 'advance'
    },
    redirect: '/widgets/chart',
    children: [
      {
        path: '/widgets/chart',
        name: 'ChartWidget',
        meta: {
          title: 'Chart Widget'
        },
        component: () => import('@/views/widgets/Chart.vue')
      },
      {
        path: '/widgets/list',
        name: 'ListWidget',
        meta: {
          title: 'List Widget'
        },
        component: () => import('@/views/widgets/List.vue')
      },
      {
        path: '/widgets/social',
        name: 'SocialWidget',
        meta: {
          title: 'Social Widget'
        },
        component: () => import('@/views/widgets/Social.vue')
      },
      {
        path: '/widgets/statistic',
        name: 'StatisticWidget',
        meta: {
          title: 'Statistic Widget'
        },
        component: () => import('@/views/widgets/Statistic.vue')
      }
    ]
  },

  // chat app
  {
    path: '/chat',
    name: 'Chat',
    component: LayoutChat,
    redirect: {
      path: '/chat/messaging'
    },
    meta: {
      title: 'Chat',
      group: 'apps',
      icon: 'chat_bubble'
    },
    children: [
      {
        path: '/chat/messaging/:uuid?',
        name: 'ChatMessaging',
        props: true,
        component: () => import('@/views/chat/ChatMessaging.vue')
      },
      {
        path: '/chat/contact/:uuid?',
        meta: {
          public: true
        },
        name: 'ChatContact',
        component: () => import('@/views/chat/ChatContact.vue')
      }
    ]
  },

  //mail app
  {
    path: '/mail',
    name: 'Mail',
    component: () => import('@/components/email/Layout.vue'),
    redirect: {
      path: '/mail/all'
    },
    children: [
      {
        path: '/mail/:mailType',
        name: 'MailIndex',
        component: () => import('@/components/email/List.vue')
      },
      {
        path: '/mail/0/:uuid',
        name: 'MailDetail',
        component: () => import('@/components/email/Reply.vue')
      }
    ]
  }
]
