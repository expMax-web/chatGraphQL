export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateMessage = {
  __typename?: 'CreateMessage';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  result?: Maybe<Scalars['String']>;
};

export type CreateMessageInput = {
  content: Scalars['String'];
  user: Scalars['String'];
};

export type CreateMessageVariables = {
  request?: InputMaybe<CreateMessageInput>;
};

export type GetMessages = {
  __typename?: 'GetMessages';
  messages?: Maybe<Array<Message>>;
};

export type GetMessagesQuery = {
  __typename?: 'GetMessagesQuery';
  getMessages?: Maybe<GetMessages>;
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String'];
  id: Scalars['ID'];
  user: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMessage?: Maybe<CreateMessage>;
};


export type MutationCreateMessageArgs = {
  request?: InputMaybe<CreateMessageInput>;
};

export type Query = {
  __typename?: 'Query';
  getMessages?: Maybe<GetMessages>;
};

export type Subscription = {
  __typename?: 'Subscription';
  messages?: Maybe<Array<Message>>;
};
