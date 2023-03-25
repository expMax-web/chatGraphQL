import { PubSub } from "graphql-subscriptions";

import { ALL_MESSAGES } from "../data/messages.js";
import {
  CreateMessageOutput,
  CreateMessageVariables,
  MutationRequest,
} from "./types.js";

const pubsub = new PubSub();

pubsub.asyncIterator(["SEND_MESSAGE", "CREATE_MESSAGE"]);

export const resolvers = {
  Query: {
    getAllMessages: () => ALL_MESSAGES,
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
    createMessage(
      _,
      args: MutationRequest<CreateMessageVariables>
    ): CreateMessageOutput {
      pubsub.publish("CREATE_MESSAGE", { messageCreated: args });

      console.log(args);

      if (!args.request.author) {
        return {
          description: "Необходимо указать автора сообщения",
          result: "Error",
        };
      }

      if (!args.request.content) {
        return {
          description: "Ошибка при создании пустого сообщения",
          result: "Error",
        };
      }

      ALL_MESSAGES.push(args.request);

      return {
        description: "Сообщение успешно отправлено",
        result: "Ok",
      };
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
