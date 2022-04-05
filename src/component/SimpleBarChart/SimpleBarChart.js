import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SimpleBarChart = (props) => {
    return (
        <BarChart  width={500} height={500} data={props.chart}>
            <Bar dataKey={'investment'}></Bar>
            <Bar dataKey={'sell'}></Bar>
            <Bar dataKey={'revenue'}></Bar>
            <XAxis dataKey={'month'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>

        </BarChart>
    );
};

export default SimpleBarChart;