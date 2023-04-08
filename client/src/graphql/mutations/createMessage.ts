import { gql } from '@apollo/client';

export const CREATE_MESSAGE = gql`
  mutation createMessage($request: CreateMessageInput) {
    createMessage(request: $request) {
      result
      description
      id
    }
  }
`;
