import { gql } from '@apollo/client';

export const currentUserQuery = gql`
  query currentUserQuery {
    user {
      id
      email
    }
  }
`;
