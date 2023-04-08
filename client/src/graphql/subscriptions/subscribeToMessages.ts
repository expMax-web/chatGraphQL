import { gql } from '@apollo/client';

export const SUBSCRIBE_TO_MESSAGES = gql`
  subscription subscribeToMessages {
    messages {
      content
      id
      user
    }
  }
`;
