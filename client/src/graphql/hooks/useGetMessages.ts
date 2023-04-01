import { ApolloError, useQuery } from '@apollo/client';

import { GET_MESSAGES } from '../query';
import { GetMessagesQuery, Maybe, Message } from '../types';

type UseGetAllMessageResult = {
  data: Array<Message>;
  loading: boolean;
  error: Maybe<ApolloError>;
};

export const useGetMessages = (): UseGetAllMessageResult => {
  const { data, loading, error } = useQuery<GetMessagesQuery>(GET_MESSAGES);

  console.log(data?.getMessages?.messages);

  return {
    data: data?.getMessages?.messages || [],
    loading,
    error: error || null,
  };
};
