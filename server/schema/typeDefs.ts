export const typeDefs = `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

type Message {
  id: ID!
  user: String!
  content: String!
}

type CreateMessage {
  result: String
  id: ID!
  description: String
}

type GetMessages {
  messages: [Message!]
}

type GetMessagesQuery {
  getMessages: GetMessages
}

input CreateMessageInput {
  user: String!
  content: String!
}

input CreateMessageVariables {
  request: CreateMessageInput
}

type Query {
  getMessages: GetMessages
}

type Subscription {
  sendMessage: Message
}

type Mutation {
  createMessage(request: CreateMessageInput): CreateMessage
}
`;
