import React from 'react';
import Charts from '../Charts/Charts';

const Dashboard = () => {
    
    return (
        <div>
            <h1 className='text-5xl text-lime-900 p-5'>Explore the statistics!!!</h1>
          <div className='ml-10'>  <Charts></Charts> </div>
        </div>
    );
};

export default Dashboard;