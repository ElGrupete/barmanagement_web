import { API_ROUTES } from './api-routes';
import { BASE_URL } from './base-url';

const UNAUTHORIZED_ROUTES: string[] = [
    `${BASE_URL}/${API_ROUTES.signup}`,
    `${BASE_URL}/${API_ROUTES.role}`,
    `${BASE_URL}/${API_ROUTES.management.category}`,
    `${BASE_URL}/${API_ROUTES.management.product}`,
    `${BASE_URL}/${API_ROUTES.management.menu}`,
    `${BASE_URL}/${API_ROUTES.management.order}`,
    `${BASE_URL}/${API_ROUTES.config.table}`,
    `${BASE_URL}/${API_ROUTES.config.sector}`,
];

export const getUnauthorizedRoutes = () => {
    return UNAUTHORIZED_ROUTES;
}