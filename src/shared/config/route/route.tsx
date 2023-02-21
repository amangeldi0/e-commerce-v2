import { RouteProps } from 'react-router-dom';

import { CartPage, MainPage } from '@pages';

enum appRoutes {
    MAIN = 'main',
    CART = 'cart'
    // PROFILE = 'profile',
    // LOGIN = 'login',
    // REGISTER = 'register',
}

const routePath: Record<appRoutes, string> = {
    [appRoutes.CART]: '/cart',
    // [appRoutes.PROFILE]: '/profile',
    // [appRoutes.LOGIN]: '/login',
    // [appRoutes.REGISTER]: '/register',
    [appRoutes.MAIN]: '/'
};

export const route: Record<appRoutes, RouteProps> = {
    [appRoutes.MAIN]: {
        path: routePath.main,
        element: <MainPage />
    },
    [appRoutes.CART]: {
        path: routePath.cart,
        element: <CartPage />
    }
};
