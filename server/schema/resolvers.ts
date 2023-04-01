import { PubSub } from "graphql-subscriptions";
import { v4 as uuidv4 } from "uuid";

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
    getMessages: () => {
      return { messages: ALL_MESSAGES };
    },
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

      if (!args.request.user) {
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

      const id = uuidv4();

      ALL_MESSAGES.push({
        content: args.request.content,
        id,
        user: args.request.user,
      });

      return {
        description: "Сообщение успешно отправлено",
        result: "Ok",
        id,
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
