import { useMutation, useQuery } from '@tanstack/react-query';
import Profile from '.';

export const useAPIGetProfile = (args = {}) => {
  return useQuery({
    queryKey: ['getProfile'],
    queryFn: async () => await Profile.getProfile(),
    ...args,
  });
};

export const useAPIPostEditProfile = (args = {}) => {
  return useMutation({
    mutationFn: async (body: { form: FormData }) =>
      await Profile.postEditProfile(body),
    ...args,
  });
};
