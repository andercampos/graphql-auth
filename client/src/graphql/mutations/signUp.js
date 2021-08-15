import { gql } from '@apollo/client';

export const signUpMutation = gql`
  mutation signUpMutation($email: String, $password: String) {
    signup(email: $email, password: $password) {
      id
      email
    }
  }
`;
