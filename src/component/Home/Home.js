import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
             <Header></Header>
            
             <Link to="/reviews"> See Reviews</Link>
        </div>
    );
};

export default Home;