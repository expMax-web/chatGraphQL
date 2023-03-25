import { gql } from "@apollo/client";

export const CREATE_MESSAGE = gql`
  mutation createMessage($author: String, $content: String) {
    createMessage(author: $author, content: $content) {
      description
      result
    }
  }
`;
