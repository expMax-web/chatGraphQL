import {
  ApolloError,
  OperationVariables,
  SubscribeToMoreOptions,
  useQuery,
} from '@apollo/client';

import { GET_MESSAGES } from '../query';
import { GetMessagesQuery, Maybe, Message } from '../types';

type UseGetAllMessageResult = {
  subscribeToMore: <
    TSubscriptionData = GetMessagesQuery,
    TSubscriptionVariables extends OperationVariables = OperationVariables,
  >(
    options: SubscribeToMoreOptions<
      GetMessagesQuery,
      TSubscriptionVariables,
      TSubscriptionData
    >,
  ) => () => void;
  data: Array<Message>;
  loading: boolean;
  error: Maybe<ApolloError>;
};

export const useGetMessages = (): UseGetAllMessageResult => {
  const { subscribeToMore, data, loading, error } =
    useQuery<GetMessagesQuery>(GET_MESSAGES);

  console.log(data?.getMessages?.messages);

  return {
    subscribeToMore,
    data: data?.getMessages?.messages || [],
    loading,
    error: error || null,
  };
};
