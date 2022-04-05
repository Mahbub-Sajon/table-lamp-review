import React from 'react';
import useCharts from '../../hooks/useCharts';
import Chart from '../Chart/Chart';
import SimpleBarChart from '../SimpleBarChart/SimpleBarChart';

const Charts = () => {
    const [charts, setCharts] = useCharts();
    return (
        <div className='grid md:grid-cols-2 gap-5 justify-between '>
                <Chart
                chart = {charts}
                ></Chart>

                <SimpleBarChart
                chart = {charts}
                ></SimpleBarChart>
               
        </div>
    );
};

export default Charts;