import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, XAxis, YAxis,} from 'recharts';
const Chart = () => {
    const data=useLoaderData();
    return (
        <div>
          <LineChart width={500} height={300} data={data.data} >

            <XAxis dataKey="total"></XAxis>
            <YAxis data={data.data}></YAxis>
          </LineChart>
        </div>
    );
};

export default Chart;