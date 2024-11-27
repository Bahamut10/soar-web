import { useQuery } from '@tanstack/react-query';
import Dashboard from '.';

export const useAPIGetDashboardData = (args = {}) => {
  return useQuery({
    queryKey: ['getDashboardData'],
    queryFn: async () => await Dashboard.getDashboardData(),
    ...args,
  });
};
