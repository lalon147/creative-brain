import { Tooltip } from 'recharts';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, XAxis, YAxis,Line} from 'recharts';
const Chart = () => {
    const data=useLoaderData();
    return (
        <div>
          <LineChart width={500} height={300} data={data.data} >

            <XAxis dataKey="total"></XAxis>
            <YAxis></YAxis>
            <Line type="monotone" dataKey="id" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          <Tooltip/>
          </LineChart>
        </div>
    );
};

export default Chart;