import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { BalanceHistory } from '@/types/dashboard';
import theme from '../../../../tailwind.config';
import Loading from '@/components/Loading';

export default function BalanceHistoryChart({
  data,
  isLoading,
}: {
  data: Array<BalanceHistory>;
  isLoading: boolean;
}) {
  const { theme: _theme } = theme;

  return (
    <div
      className="tile"
      role="region"
      aria-labelledby="balance-history-title"
      tabIndex={-1}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <ResponsiveContainer width="100%" height={260}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            aria-label="Balance history chart"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="balance"
              stroke={_theme.colors['trusted-blue']}
              strokeWidth={4}
              activeDot={{
                r: 8,
              }}
              aria-label="Balance over time"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
