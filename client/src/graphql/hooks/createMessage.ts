import { useMutation } from '@apollo/client';

import { CREATE_MESSAGE } from '../mutations';
import { CreateMessageOutput, CreateMessageVariables } from '../types';

export const useCreateMessage = () => {
  const [createMessage, { data, loading, error }] = useMutation<
    CreateMessageOutput,
    CreateMessageVariables
  >(CREATE_MESSAGE);

  return [createMessage, { data: data || null, loading, error: error || null }];
};
