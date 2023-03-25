export const typeDefs = `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

type Message {
  author: String
  content: String
}

type CreateMessageOutput {
  result: String
  description: String
}

type CreateMessageVariables {
  author: String
  content: String
}

type Query {
  getAllMessages: [Message]
}

type Subscription {
  sendMessage: Message
}

type Mutation {
  createMessage(author: String, content: String): CreateMessageOutput
}
`;
