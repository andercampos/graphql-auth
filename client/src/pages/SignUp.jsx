import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { useAuth } from '../contexts/auth';

const SignUp = () => {
  const { handleSignUp, signUpError } = useAuth();

  return (
    <div className="container">
      <Header />

      <h3>Sign up</h3>
      <Form error={signUpError} onSubmit={handleSignUp} />
    </div>
  );
};

export { SignUp };
