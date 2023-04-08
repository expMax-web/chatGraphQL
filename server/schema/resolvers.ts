import { PubSub } from "graphql-subscriptions";
import { v4 as uuidv4 } from "uuid";

import { ALL_MESSAGES } from "../data/messages.js";
import { Message } from "../data/types.js";
import {
  CreateMessageOutput,
  CreateMessageVariables,
  MutationRequest,
} from "./types.js";

const pubsub = new PubSub();

pubsub.asyncIterator(["CREATE_MESSAGE"]);

export const resolvers = {
  Query: {
    getMessages: () => {
      return { messages: ALL_MESSAGES };
    },
  },
  Subscription: {
    getMessages: {
      subscribe: () => pubsub.asyncIterator(["CREATE_MESSAGE"]),
    },
  },

  Mutation: {
    createMessage(
      _,
      args: MutationRequest<CreateMessageVariables>
    ): CreateMessageOutput {
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

      const message: Message = {
        content: args.request.content,
        id,
        user: args.request.user,
      };

      ALL_MESSAGES.push(message);

      pubsub.publish("CREATE_MESSAGE", {
        getMessages: {
          messages: ALL_MESSAGES,
        },
      });

      return {
        description: "Сообщение успешно отправлено",
        result: "Ok",
        id,
      };
    },
  },
};
