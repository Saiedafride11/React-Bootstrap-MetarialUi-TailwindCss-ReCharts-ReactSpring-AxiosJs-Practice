import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


const Recharts = () => {
    const lineChartsData = [
        {name: "Page A", uv: 4000, pv: 2400, amt: 2100},
        {name: "Page B", uv: 5000, pv: 2500, amt: 2200},
        {name: "Page C", uv: 6000, pv: 2600, amt: 2300},
        {name: "Page D", uv: 7000, pv: 2700, amt: 2400},
        {name: "Page E", uv: 8000, pv: 2800, amt: 2500}
      ];
      
    return (
        <div>
            <br />
            <h1>Recharts</h1>
            <br />
            <LineChart
                width={500}
                height={300}
                data={lineChartsData}
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
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Recharts;