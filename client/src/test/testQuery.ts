import { gql } from "@apollo/client";

export const TEST_QUERY = gql`
  query ExampleQuery {
    books {
      title
    }
  }
`;
