import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { useState } from 'react';
import { useLoginMutation } from 'features/login/login';
import { Loader } from 'components/Loader/Loader';
import { setAccessToken,setCsrfToken } from 'features/profile/profileSlice';
import { useDispatch } from 'react-redux';
import { ROUTES } from 'constants/routes';

export const Route = createFileRoute(ROUTES.LOGIN)({
  component: Login
});

function Login() {
  const [email, setEmail] = useState('test@email.com');
  const [password, setPassword] = useState('testPassword1234');
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const onSubmit = async () => {
    try {
      const response = await login({
        email,
        password
      }).unwrap();
      dispatch(setAccessToken(response.accessToken));
      dispatch(setCsrfToken(response.csrfToken));
      redirect({ to: ROUTES.DASHBOARD });
    } catch (e) {}
  };
  return (
    <div>
      <Loader isLoading={isLoading} />
      <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
}
