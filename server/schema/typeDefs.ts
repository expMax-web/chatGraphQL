export const typeDefs = `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

type Message {
  author: String
  content: String
}

type CreateMessage {
  result: String
  description: String
}

input CreateMessageInput {
  author: String
  content: String
}

input CreateMessageVariables {
  request: CreateMessageInput
}

type Query {
  getAllMessages: [Message]
}

type Subscription {
  sendMessage: Message
}

type Mutation {
  createMessage(request: CreateMessageInput): CreateMessage
}
`;
