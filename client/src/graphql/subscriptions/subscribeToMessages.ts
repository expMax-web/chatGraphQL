import { gql } from '@apollo/client';

export const SUBSCRIBE_TO_MESSAGES = gql`
  subscription subscribeToMessages {
    getMessages {
      messages {
        content
        id
        user
      }
    }
  }
`;
