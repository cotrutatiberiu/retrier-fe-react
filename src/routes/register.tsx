import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Input/Input';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/register')({
  component: Register
});

function Register() {
  return (
    <div>
      <Input />
      <Input />
      <Button>Submit</Button>
    </div>
  );
}
