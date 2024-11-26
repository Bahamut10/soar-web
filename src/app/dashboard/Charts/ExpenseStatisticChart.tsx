import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import theme from '../../../../tailwind.config';

const expenseData = [
  { name: 'Entertainment', value: 30 },
  { name: 'Bill Expense', value: 15 },
  { name: 'Investment', value: 20 },
  { name: 'Others', value: 35 },
];

const COLORS = [
  'rgba(54, 79, 107, 1)', // Navy
  'rgba(255, 129, 48, 1)', // Orange
  'rgba(54, 162, 235, 1)', // Blue
  'rgba(0, 0, 0, 1)', // Black
];

export default function ExpenseStatisticChart() {
  const { theme: _theme } = theme;

  return (
    <div className="tile">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={expenseData}
            dataKey="value"
            nameKey="name"
            cx="50%" // Position the pie in the center horizontally
            cy="50%" // Position the pie in the center vertically
            outerRadius="80%" // Radius of the pie chart
            fill="#8884d8" // Default color (can be overridden by `Cell`)
            label
          >
            {expenseData.map((entry, index) => (
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
    </div>
  );
}
