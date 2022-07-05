import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <div className='mx-1 md:mx-3'>
            <Navbar />
            <Sidebar />
        </div>
    );
};

export default Home;