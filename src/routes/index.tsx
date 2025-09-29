import { createFileRoute } from '@tanstack/react-router';
import { ROUTES } from 'constants/routes';

export const Route = createFileRoute(ROUTES.INDEX)({
  component: Index
});

export function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  );
}
