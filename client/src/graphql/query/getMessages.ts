import { gql } from '@apollo/client';

export const GET_MESSAGES = gql`
  query getMessages {
    getMessages {
      messages {
        content
        id
        user
      }
    }
  }
`;
