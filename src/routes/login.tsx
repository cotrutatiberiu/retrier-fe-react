import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { useLoginMutation } from 'features/login/login';
import { Loader } from 'components/Loader/Loader';
import { setAccessToken } from 'features/profile/profileSlice';
import { useDispatch } from 'react-redux';

export const Route = createFileRoute('/login')({
  component: Login
});

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading }] = useLoginMutation();
  const dispatch=useDispatch();
  const onSubmit = async () => {
    try {
      const response = await login({
        email,
        password
      }).unwrap();
      dispatch(setAccessToken(response.accessToken));
    } catch (e) {

    }
  }
  return (
    <div>
      <Loader isLoading={isLoading} />
      <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
}
