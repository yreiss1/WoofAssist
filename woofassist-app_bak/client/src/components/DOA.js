/* 

    Copyright 2019 - University of Maryland

    Authors: 
        [1] Yuval Reiss
        [2] Michael Reininger

    Description: This file contains the Feedback component which contains an interactive bar graph that 
    displays the amount of times the service dog followed the handlers commands vs how many times
    the dog did not.

    Sources:
        [1] recharts
        [2] Material UI 
        [3] React 

*/

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Directions",
    action: 33,
    inaction: 24,
    amt: 2400
  },
  {
    name: "Moving",
    action: 30,
    inaction: 13,
    amt: 2210
  },
  {
    name: "Alert",
    action: 33,
    inaction: 17,
    amt: 2290
  },
  {
    name: "Eat",
    action: 27,
    inaction: 30,
    amt: 2000
  },
  {
    name: "Bathroom",
    action: 15,
    inaction: 23,
    amt: 4000
  }
];

class DOA extends PureComponent {
  render() {
    return (
      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="action" fill="#8884d8" background={{ fill: "#eee" }} />
        <Bar dataKey="inaction" fill="#82ca9d" />
      </BarChart>
    );
  }
}

export default DOA;
