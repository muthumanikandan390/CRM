

const soldPerMonth = {
  January: 30,
  February: 50,
  March: 80,
  April: 45,
  May: 60,
  June: 75,
  July: 90,
  August: 55,
  September: 70,
  October: 85,
  November: 95,
  December: 100
};



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
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sold" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
