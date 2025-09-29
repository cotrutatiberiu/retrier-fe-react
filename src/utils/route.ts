import { redirect } from '@tanstack/react-router';
import { ROUTES } from 'constants/routes';
import { store } from 'store/store';

export const isLogged = () => {
  const state = store.getState();
  if (!state.profile.email) {
    throw redirect({ to: ROUTES.LOGIN });
  }
};
