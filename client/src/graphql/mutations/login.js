import { gql } from '@apollo/client';

export const loginMutation = gql`
  mutation loginMutation($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;
