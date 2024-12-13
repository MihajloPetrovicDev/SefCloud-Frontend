import { createRouter, createWebHistory} from 'vue-router';
import { checkAuthToken } from './utils/checkAuthToken';
import { authGuard, unauthGuard } from './guards/gurads';
import HomePage from './views/Home.vue';
import LoginPage from './views/Login.vue';
import MyAccount from './views/MyAccount.vue';
import MyStorage from './views/MyStorage.vue';

const routes = [
    { 
        path: '/', 
        component: HomePage, 
        meta: { 
            title: 'SefCloud - Secure, Reliable and Cheap Cloud Storage' 
        },
    },
    { 
        path: '/login', 
        component: LoginPage, 
        meta: { 
            title: 'Login - SefCloud' 
        },
        beforeEnter: unauthGuard,
    },
    { 
        path: '/my-account', 
        component: MyAccount, 
        meta: { 
            title: 'My Account - SefCloud' 
        },
        beforeEnter: authGuard,
    },
    { 
        path: '/my-storage', 
        component: MyStorage, 
        meta: { 
            title: 'My Storage - SefCloud' 
        },
        beforeEnter: authGuard,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior () {
        return { top: 0 };
    },
});

router.beforeEach(async (to, from, next) => {
    if(to.meta.title) {
        document.title = to.meta.title;
    }
    await checkAuthToken(localStorage.getItem('auth-token'));

    next();
});

export default router;