import { useMutation, useQuery } from '@tanstack/react-query';
import Dashboard from '.';

export const useAPIGetDashboardData = (args = {}) => {
  return useQuery({
    queryKey: ['getDashboardData'],
    queryFn: async () => await Dashboard.getDashboardData(),
    ...args,
  });
};

export const useAPIPostQuickTransfer = (args = {}) => {
  return useMutation({
    mutationFn: async (body: { userId: number; amount: number }) =>
      await Dashboard.postQuickTransfer(body),
    ...args,
  });
};
