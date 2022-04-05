import React from 'react';
import useCharts from '../../hooks/useCharts';
import Chart from '../Chart/Chart';

const Charts = () => {
    const [charts, setCharts] = useCharts();
    return (
        <div>
            {
                charts.map(chart => 
                <Chart
                key  = {chart.id}
                chart = {chart}
                ></Chart>)
            }
        </div>
    );
};

export default Charts;