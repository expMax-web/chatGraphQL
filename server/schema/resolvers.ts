import { PubSub } from "graphql-subscriptions";

type Message = {
  author: string;
  content: string;
};

const messages: Message[] = [];

const pubsub = new PubSub();

pubsub.asyncIterator(["SEND_MESSAGE", "CREATE_MESSAGE"]);

export const resolvers = {
  Query: {
    getAllMessages: () => messages,
  },
  // Subscription: {
  //   sendMessage: {
  //     // More on pubsub below
  //     subscribe: () => pubsub.asyncIterator(["SEND_MESSAGE"]),
  //   },
  //   messageCreated: {
  //     subscribe: () => pubsub.asyncIterator(["CREATE_MESSAGE"]),
  //   },
  // },

  Mutation: {
    createMessage(_, args, { postController }) {
      pubsub.publish("CREATE_MESSAGE", { messageCreated: args });

      messages.push();

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
