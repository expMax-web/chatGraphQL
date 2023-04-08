import {
  ApolloError,
  FetchResult,
  MutationFunctionOptions,
  useMutation,
} from '@apollo/client';

import { CREATE_MESSAGE } from '../mutations';
import { CreateMessage, CreateMessageVariables, Maybe } from '../types';

type UseCreateMessageResult = [
  (
    options?: MutationFunctionOptions<CreateMessage, CreateMessageVariables>,
  ) => Promise<FetchResult<CreateMessage>>,
  {
    data: Maybe<CreateMessage>;
    loading: boolean;
    error: Maybe<ApolloError>;
  },
];

export const useCreateMessage = (): UseCreateMessageResult => {
  const [createMessage, { data, loading, error }] = useMutation<
    CreateMessage,
    CreateMessageVariables
  >(CREATE_MESSAGE);

  return [createMessage, { data: data || null, loading, error: error || null }];
};
