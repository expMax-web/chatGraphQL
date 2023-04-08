import { PubSub } from "graphql-subscriptions";
import { v4 as uuidv4 } from "uuid";

import { ALL_MESSAGES } from "../data/messages.js";
import {
  CreateMessageOutput,
  CreateMessageVariables,
  MutationRequest,
} from "./types.js";

const pubsub = new PubSub();

const subscribes = [];

const onMessagesUpdates = (fn) => subscribes.push(fn);

pubsub.asyncIterator(["SEND_MESSAGE", "CREATE_MESSAGE"]);

export const resolvers = {
  Query: {
    getMessages: () => {
      return { messages: ALL_MESSAGES };
    },
  },
  Subscription: {
    messages: {
      subscribe: (parent, args, { pubsub }) => {
        const channel = Math.random().toString(36).slice(2, 15);

        onMessagesUpdates(() => pubsub.publish(channel, { ALL_MESSAGES }));

        setTimeout(() => pubsub.publish(channel, { ALL_MESSAGES }), 0);

        return pubsub.asyncIterator(channel);
      },
    },
  },

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

      subscribes.forEach((fn) => fn());

      return {
        description: "Сообщение успешно отправлено",
        result: "Ok",
        id,
      };
    },
  },
};
