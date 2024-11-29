import { useMutation } from '@tanstack/react-query';
import Auth from '.';

export const useAPILogin = (args = {}) => {
  return useMutation({
    // this login mutation doesn't take any form as it is only for token simulation only
    mutationFn: async () => await Auth.login(),
    ...args,
  });
};
