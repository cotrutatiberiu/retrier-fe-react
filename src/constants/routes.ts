import { type FileRoutesByPath } from '@tanstack/react-router';

export const ROUTES = {
  INDEX: '/' as keyof FileRoutesByPath,
  REGISTER: '/register' as keyof FileRoutesByPath,
  LOGIN: '/login' as keyof FileRoutesByPath,
  DASHBOARD: '/dashboard' as keyof FileRoutesByPath,
  WEATHER: '/weather' as keyof FileRoutesByPath,
  NEWS: '/news' as keyof FileRoutesByPath
};
