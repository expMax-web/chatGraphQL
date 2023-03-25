import { PubSub } from "graphql-subscriptions";

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const pubsub = new PubSub();

pubsub.asyncIterator(["SEND_MESSAGE", "CREATE_MESSAGE"]);

export const resolvers = {
  Query: {
    books: () => books,
  },
  Subscription: {
    hello: {
      // Example using an async generator
      subscribe: async function* () {
        for await (const word of ["Hello", "Bonjour", "Ciao"]) {
          yield { hello: word };
        }
      },
    },
    sendMessage: {
      // More on pubsub below
      subscribe: () => pubsub.asyncIterator(["SEND_MESSAGE"]),
    },
    messageCreated: {
      subscribe: () => pubsub.asyncIterator(["CREATE_MESSAGE"]),
    },
  },

  Mutation: {
    createMessage(parent, args, { postController }) {
      pubsub.publish("CREATE_MESSAGE", { messageCreated: args });
      return postController.createPost(args);
    },
  },
};

//  Пример обработки входящего сообщения на сервере после отправки мутации с клиента
// pubsub.publish("MESSAGE_CREATED", {
//   messageCreated: {
//     author: "Определить по id",
//     content: "Текст сообщения",
//   },
// });
