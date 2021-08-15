import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { useAuth } from '../contexts/auth';

const SignIn = () => {
  const { handleLogin, loginError } = useAuth();

  return (
    <div className="container">
      <Header />

      <h3>Sign in</h3>
      <Form error={loginError} onSubmit={handleLogin} />
    </div>
  );
};

export { SignIn };
