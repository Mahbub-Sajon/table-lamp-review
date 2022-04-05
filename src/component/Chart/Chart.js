import React from 'react';
import { Line, LineChart } from 'recharts';

const Chart = (props) => {
    const {month, investment, sell, revenue} = props.chart;

    return (
        <div>
            <LineChart width={400} height={500} data={props}>
                <Line dataKey={investment}></Line>
            </LineChart>
        </div>
    );
};

export default Chart;