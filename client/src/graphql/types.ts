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

export type CreateMessageOutput = {
  __typename?: 'CreateMessageOutput';
  description?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
};

export type CreateMessageVariables = {
  __typename?: 'CreateMessageVariables';
  author?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  author?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMessage?: Maybe<CreateMessageOutput>;
};


export type MutationCreateMessageArgs = {
  author?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAllMessages?: Maybe<Array<Maybe<Message>>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  sendMessage?: Maybe<Message>;
};
