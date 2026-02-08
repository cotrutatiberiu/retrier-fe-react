import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { ROUTES } from 'constants/routes';
import './_root.scss';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="Navigation">
        <Link to={ROUTES.REGISTER}>Register</Link>
        <Link to={ROUTES.LOGIN}>Login</Link>
        <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
        <Link to={ROUTES.WEATHER}>Weather</Link>
        <Link to={ROUTES.NEWS}>News</Link>
      </div>
      <hr />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  )
});
