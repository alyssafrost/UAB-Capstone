// https://codesandbox.io/s/kec3v?file=/src/App.tsx

// TODO:Populate with real data

import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Month 1",
    water_usage: 4000,
    electricity_usage: 2400,
    total_cost: 1500,
    amt: 2400,
  },
  {
    name: "Month 2",
    water_usage: 3000,
    electricity_usage: 1398,
    total_cost: 3000,
    amt: 3210,
  },
  {
    name: "Month 3",
    water_usage: 2000,
    electricity_usage: 9800,
    total_cost: 1300,
    amt: 2290,
  },
  {
    name: "Month 4",
    water_usage: 2780,
    electricity_usage: 3908,
    total_cost: 2000,
    amt: 2000,
  },
  {
    name: "Month 5",
    water_usage: 1890,
    electricity_usage: 4800,
    total_cost: 1900,
    amt: 2181,
  },
];

const AnalysisScreen = () => {
  return (
    <LineChart
      width={800}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 2,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="water_usage"
        // change the dataKey to reflect the label rather than be settled with each datapoint
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="electricity_usage" stroke="#82ca9d" />
      <Line type="monotone" dataKey="total_cost" stroke="#82ca9d" />
    </LineChart>
  );
};

export { AnalysisScreen };
