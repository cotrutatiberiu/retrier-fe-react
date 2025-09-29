import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { ROUTES } from 'constants/routes'
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <Link to={ROUTES.REGISTER}>
          Register
        </Link>
        <Link to={ROUTES.LOGIN}>
          Login
        </Link>
        <Link to={ROUTES.DASHBOARD}>
          Dashboard
        </Link>
      </div>
      <hr />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
})