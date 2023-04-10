import React from "react";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "A1",
      assignment: "Assignment 1",
      Marks: 57,
    },
    {
      name: "A2",
      assignment: "Assignment 2",
      Marks: 57,
    },
    {
      name: "A3",
      assignment: "Assignment 3",
      Marks: 60,
    },
    {
      name: "A4",
      assignment: "Assignment 4",
      Marks: 56,
    },
    {
      name: "A5",
      assignment: "Assignment 5",
      Marks: 58,
    },
    {
      name: "A6",
      assignment: "Assignment 6",
      Marks: 59,
    },
    {
      name: "A7",
      assignment: "Assignment 7",
      Marks: 60,
    },
    {
      name: "A8",
      assignment: "Assignment 8",
      Marks: 60,
    },
  ];
  return (
    <>
      <div className="mb-10 mt-8">
        <h1 className="text-3xl font-bold text-center text-purple-500">
          Assignment Analytics
        </h1>
      </div>
      <div className="mx-auto">
        <ComposedChart width={500} height={400} data={data}>
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Marks" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="Marks" stroke="#ff7300" />
        </ComposedChart>
      </div>
    </>
  );
};

export default Statistics;
