import { useMutation } from '@tanstack/react-query';
import Auth from '.';

export const useAPILogin = (args = {}) => {
  return useMutation({
    mutationFn: async () => await Auth.login(),
    ...args,
  });
};
