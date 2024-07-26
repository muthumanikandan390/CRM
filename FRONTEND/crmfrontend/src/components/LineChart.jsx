



import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'January', sold: 30 },
  { name: 'February', sold: 50 },
  { name: 'March', sold: 80 },
  { name: 'April', sold: 45 },
  { name: 'May', sold: 60 },
  { name: 'June', sold: 75 },
  { name: 'July', sold: 90 },
  { name: 'August', sold: 55 },
  { name: 'September', sold: 70 },
  { name: 'October', sold: 85 },
  { name: 'November', sold: 95 },
  { name: 'December', sold: 100 },
];

export default class CustomLineChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 0,
            right: 10,
            left: -40,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-60} textAnchor="end" interval={0}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sold" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
