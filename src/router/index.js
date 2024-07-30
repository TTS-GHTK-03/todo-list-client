import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/index.vue';
import Author from '../views/Author/index.vue';
import Mainpage from '../views/Mainpage/index.vue';

import Login from '../components/auth/Login/index.vue';
import Register from '../components/auth/regis/Register/index.vue';
import Valid from '../components/auth/regis/Valid/index.vue';
import Regisform from '../components/auth/regis/Regisform/index.vue';
import Forgot from '../components/auth/forgotPassword/Forgot/index.vue';
import ValidForgot from '../components/auth/forgotPassword/ValidForgot/index.vue';
import ForgotForm from '../components/auth/forgotPassword/ForgotForm/index.vue';

import AllProject from '../views/AllProject/index.vue';
import Project from '../views/Project/index.vue';
import Board from '../components/board/index.vue'
import CreateProject from '../components/project/CreateProject/index.vue'
// import Loading from '../views/LoadingPage/index.vue';

import { useAuthStore } from '../stores/authStores/authStore';
import { useForgotPasswordStore, useValidateOtpStore} from '../stores/authStores/forgotStore';
import { useRegisAccountStore, useValidateOtpRegisStore} from '../stores/authStores/regisStore';

const routes = [
  {
    path: '/',  
    component: Home,
  },
  {
    path: '/author',
    component: Author,
    children: [
      {
        path: '',
        name: 'login',
        component: Login,
      },
      {
        path: 'register',
        name: 'register',
        component: Register,
      },
      {
        path: 'validate',
        name: 'validate',
        component: Valid,
        // beforeEnter: (to, from, next) => {
        //   const regisAccountStore = useRegisAccountStore();
        //   if (!regisAccountStore.email) {
        //     next({ name: 'register' });
        //   } else {
        //     next();
        //   }
        // },
      },
      {
        path: 'regisform',
        name: 'regisform',
        component: Regisform,
        // beforeEnter: (to, from, next) => {
        //   const validateStoreRegis = useValidateOtpRegisStore();
        //   if (!validateStoreRegis.registerKey) {
        //     next({ name: 'validate' });
        //   } else {
        //     next();
        //   }
        // },
      },
      {
        path: 'forgot',
        name: 'forgot',
        component: Forgot,
        
      },
      {
        path: 'validforgot',
        name: 'validforgot',
        component: ValidForgot,
        // beforeEnter: (to, from, next) => {
        //   const forgotPasswordStore = useForgotPasswordStore();
        //   if (!forgotPasswordStore.email) {
        //     next({ name: 'forgot' });
        //   } else {
        //     next();
        //   }
        // },
      },
      {
        path: 'forgotform',
        name: 'forgotform',
        // beforeEnter: (to, from, next) => {
        //   const validateStoreForgot = useValidateOtpStore();
        //   if (!validateStoreForgot.resetPasswordKey) {
        //     next({ name: 'validforgot' });
        //   } else {
        //     next();
        //   }
        // },
        component: ForgotForm,
      },
    ],
  },
  {
    path: '/mainpage',
    component: Mainpage,
    children: [
      {
        path: '/allproject',
        component: AllProject,  
      },
      {
        path: '',
        component: Project,
        children: [
          {
            path: '',
            component: Board,
          }
        ]
      },
      
    ],
    // meta: { requiresAuth: true },
  },
  {
    path: '/project-create',
    component: CreateProject,
  },

  {
    path: '/:pathMatch(.*)*', 
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.matched.some(record => record.meta.requiresAuth) && !authStore.isLoggedIn()) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
