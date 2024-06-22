import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const LineChartComponent = ({ data }) => {
  const chartData = data.map((item, index) => ({
    time: index + 'h',
    temperature: item.main.temp,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
