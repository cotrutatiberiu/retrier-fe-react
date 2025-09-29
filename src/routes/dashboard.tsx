import { createFileRoute } from '@tanstack/react-router';
import { ROUTES } from 'constants/routes';
import { useLazyAuthenticatedQuery } from 'features/authenticated';
import { isLogged } from 'utils/route';

export const Route = createFileRoute(ROUTES.DASHBOARD)({
  // beforeLoad: isLogged,
  component: Dashboard
});

export function Dashboard() {
  const [fetcha] = useLazyAuthenticatedQuery();
  const onCheck = () => fetcha();

  return (
    <div>
      <h3>Welcome Dashboard!</h3>
      <button onClick={onCheck}>check</button>
    </div>
  );
}
