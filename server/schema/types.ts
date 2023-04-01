import { ID } from "graphql-ws";

export type MutationRequest<T> = {
  request: T;
};

export type CreateMessageOutput = {
  result: string;
  description: string;
  id?: ID;
};

export type CreateMessageVariables = {
  user: string;
  content: string;
};
