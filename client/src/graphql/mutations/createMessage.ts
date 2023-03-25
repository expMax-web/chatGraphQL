import { gql } from '@apollo/client';

export const CREATE_MESSAGE = gql`
  mutation Mutation($request: CreateMessageInput) {
    createMessage(request: $request) {
      result
      description
    }
  }
`;
