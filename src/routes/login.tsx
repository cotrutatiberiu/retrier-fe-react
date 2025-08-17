import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { useRegisterMutation } from 'features/register/registerSlice';
import { Loader } from 'components/Loader/Loader';

export const Route = createFileRoute('/login')({
  component: Login
});

function Login() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, { isLoading }] = useRegisterMutation();
  const onSubmit = () =>
    register({
      firstName,
      lastName,
      email,
      role: 'test',
      password
    });
  return (
    <div>
      <Loader isLoading={isLoading} />
      <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
}
