import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import { ExpenseStatistics } from '@/types/dashboard';
import Loading from '@/components/Loading';

const COLORS = [
  'rgba(54, 79, 107, 1)',
  'rgba(255, 129, 48, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(0, 0, 0, 1)',
];

export default function ExpenseStatisticChart({
  data,
  isLoading,
}: {
  data: Array<ExpenseStatistics>;
  isLoading: boolean;
}) {
  return (
    <div className="tile">
      {isLoading ? (
        <Loading />
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" label>
              {data?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
