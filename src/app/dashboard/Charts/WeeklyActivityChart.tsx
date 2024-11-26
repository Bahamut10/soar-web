import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import theme from '../../../../tailwind.config';

const data = [
  { day: 'Sat', deposit: 400, withdraw: 300 },
  { day: 'Sun', deposit: 200, withdraw: 100 },
  { day: 'Mon', deposit: 500, withdraw: 400 },
  { day: 'Tue', deposit: 300, withdraw: 200 },
  { day: 'Wed', deposit: 450, withdraw: 350 },
  { day: 'Thu', deposit: 400, withdraw: 250 },
  { day: 'Fri', deposit: 300, withdraw: 200 },
];

export default function WeeklyActivityChart() {
  const { theme: _theme } = theme;

  return (
    <div className="tile">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 50, right: 30, left: 0, bottom: -20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend wrapperStyle={{ top: 0, right: 0, width: 'fit-content' }} />
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
    </div>
  );
}
