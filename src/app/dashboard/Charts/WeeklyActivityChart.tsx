import { WeeklyActivities } from '@/types/dashboard';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import theme from '../../../../tailwind.config';
import Loading from '@/components/Loading';

export default function WeeklyActivityChart({
  data,
  isLoading,
}: {
  data: Array<WeeklyActivities>;
  isLoading: boolean;
}) {
  const { theme: _theme } = theme;

  return (
    <div
      className="tile"
      role="region"
      aria-labelledby="weekly-activity-title"
      tabIndex={-1}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            aria-label="Bar chart showing weekly deposits and withdrawals"
            margin={{ top: 50, right: 0, left: -20, bottom: -20 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend
              wrapperStyle={{ top: 0, right: 0, width: 'fit-content' }}
              aria-label="Legend: Blue represents deposits, and black represents withdrawals"
            />
            <Bar
              dataKey="deposit"
              fill={_theme.colors['trusted-blue']}
              barSize={20}
              radius={[5, 5, 0, 0]}
            />
            <Bar
              dataKey="withdraw"
              fill={_theme.colors['black']}
              barSize={20}
              radius={[5, 5, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
