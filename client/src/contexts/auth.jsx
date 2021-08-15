import { createContext, useCallback, useContext } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { currentUserQuery } from '../graphql/queries';
import { loginMutation } from '../graphql/mutations';
import { signUpMutation } from '../graphql/mutations';
import { logoutMutation } from '../graphql/mutations';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const { data } = useQuery(currentUserQuery);

  const [logout] = useMutation(logoutMutation, {
    refetchQueries: ['currentUserQuery'],
  });

  const [login, { error: loginError }] = useMutation(loginMutation, {
    refetchQueries: ['currentUserQuery'],
    onError: (error) => console.error(error.message),
  });

  const [signUp, { error: signUpError }] = useMutation(signUpMutation, {
    refetchQueries: ['currentUserQuery'],
    onError: (error) => console.error(error.message),
  });

  const handleLogin = useCallback(
    ({ email, password }) => {
      login({
        variables: { email, password },
      });
    },
    [login]
  );

  const handleSignUp = useCallback(
    ({ email, password }) => {
      signUp({
        variables: { email, password },
      });
    },
    [signUp]
  );

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <AuthContext.Provider
      value={{
        user: data?.user,
        handleLogin,
        handleSignUp,
        handleLogout,
        loginError,
        signUpError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthContext must be used within a AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuth };
