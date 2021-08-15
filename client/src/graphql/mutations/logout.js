import { gql } from '@apollo/client';

export const logoutMutation = gql`
  mutation logoutMutation {
    logout {
      id
      email
    }
  }
`;
