import { validateAuthToken } from "@/utils/validateAuthToken";

export async function authGuard(to, from, next) {
    const isAuthenticated = await validateAuthToken(localStorage.getItem('auth-token'));

    if(!isAuthenticated) {
        return next('/login');
    }

    next();
}

export async function unauthGuard(to, from, next) {
    const isAuthenticated = await validateAuthToken(localStorage.getItem('auth-token'));

    if(isAuthenticated) {
        return next('/');
    }

    next();
}