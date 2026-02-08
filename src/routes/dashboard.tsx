import { createFileRoute } from '@tanstack/react-router';
import { ROUTES } from 'constants/routes';
import { useLazyAuthenticatedQuery } from 'features/authenticated/authenticated';
import { useAppSelector } from 'hooks/reduxHooks';
import { isLogged } from 'utils/route';

export const Route = createFileRoute(ROUTES.DASHBOARD)({
  // beforeLoad: isLogged,
  component: Dashboard
});

export function Dashboard() {
  const [getIsAuthenticated] = useLazyAuthenticatedQuery();
  const onCheck = () => getIsAuthenticated();
  const logginedInEmail = useAppSelector((state) => state.profile.email);

  return (
    <div>
      <h3>Welcome Dashboard!</h3>
      <button onClick={onCheck}>check login email</button>
      {logginedInEmail && <div>{logginedInEmail}</div>}
    </div>
  );
}
