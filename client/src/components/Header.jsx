import { Link } from 'react-router-dom';

import { useAuth } from '../contexts/auth';

const Header = () => {
  const { user, handleLogout } = useAuth();

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        {user ? (
          <a className="btn grey darken-1 right" onClick={handleLogout}>
            Logout
          </a>
        ) : (
          <ul className="right">
            <li>
              <Link className="btn grey darken-1 right" to="/signup">
                Sign up
              </Link>
            </li>
            <li>
              <Link className="btn grey darken-1 right" to="/signin">
                Sign in
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export { Header };
