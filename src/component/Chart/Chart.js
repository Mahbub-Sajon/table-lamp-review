import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = (props) => {
    // const {month, investment, sell, revenue} = props.chart;

    return (
        
            <LineChart width={400} height={500} data={props.chart}>
                <Line type={'monotone'} dataKey={'investment'}></Line>
                <Line type={'monotone'} dataKey={'sell'}></Line>
                <Line type={'monotone'} dataKey={'revenue'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </LineChart>
       
    );
};

export default Chart;