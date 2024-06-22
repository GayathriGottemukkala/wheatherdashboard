import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const BarChartComponent = ({ data }) => {
  const chartData = data.map((item, index) => ({
    time: index + 'h',
    humidity: item.main.humidity,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Bar dataKey="humidity" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
