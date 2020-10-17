import { API_ROUTES } from './api-routes';
import { BASE_URL } from './base-url';

const UNAUTHORIZED_ROUTES: string[] = [
    `${BASE_URL}/${API_ROUTES.signup}`,
    `${BASE_URL}/${API_ROUTES.management.category}`,
    `${BASE_URL}/${API_ROUTES.management.product}`,
    `${BASE_URL}/${API_ROUTES.management.menu}`,
];

export const getUnauthorizedRoutes = () => {
    return UNAUTHORIZED_ROUTES;
}