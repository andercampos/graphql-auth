import { Switch, Route, Redirect } from 'react-router-dom';

import { useAuth } from '../contexts/auth';

import { Dashboard } from '../pages/Dashboard';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

const Routes = () => {
  const { user } = useAuth();

  return (
    <Switch>
      <Route exact path="/">
        {user ? <Dashboard /> : <Redirect to="/signin" />}
      </Route>

      <Route path="/signin">{!user ? <SignIn /> : <Redirect to="/" />}</Route>

      <Route path="/signup">{!user ? <SignUp /> : <Redirect to="/" />}</Route>
    </Switch>
  );
};

export { Routes };
