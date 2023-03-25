export type MutationRequest<T> = {
  request: T;
};

export type CreateMessageOutput = {
  result: String;
  description: String;
};

export type CreateMessageVariables = {
  author: string;
  content: string;
};
