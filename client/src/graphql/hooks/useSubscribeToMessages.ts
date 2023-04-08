import { ApolloError, useSubscription } from '@apollo/client';

import { SUBSCRIBE_TO_MESSAGES } from '../subscriptions';
import { Maybe, Message } from '../types';

type UseGetAllMessageResult = {
  data: Array<Message>;
  loading: boolean;
  error: Maybe<ApolloError>;
};

export const useSubscribeToMessages = (): UseGetAllMessageResult => {
  const { data, loading, error } = useSubscription<{
    messages: Array<Message>;
  }>(SUBSCRIBE_TO_MESSAGES);

  return {
    data: data?.messages || [],
    loading,
    error: error || null,
  };
};
