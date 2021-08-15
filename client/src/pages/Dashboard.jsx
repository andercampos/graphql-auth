import { Header } from '../components/Header';
import { useAuth } from '../contexts/auth';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container">
      <Header />

      <h3>Welcome {user.email}</h3>
    </div>
  );
};

export { Dashboard };
