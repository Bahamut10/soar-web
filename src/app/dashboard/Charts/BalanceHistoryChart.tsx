import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import theme from '../../../../tailwind.config';

const data = [
  { month: 'Jul', balance: 100 },
  { month: 'Aug', balance: 300 },
  { month: 'Sep', balance: 500 },
  { month: 'Oct', balance: 800 },
  { month: 'Nov', balance: 200 },
  { month: 'Dec', balance: 600 },
  { month: 'Jan', balance: 650 },
];

export default function BalanceHistoryChart() {
  const { theme: _theme } = theme;

  return (
    <div className="tile">
      <ResponsiveContainer width="100%" height={260}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#1814f3"
            strokeWidth={4}
            activeDot={{
              r: 8,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
