import React from 'react';
import Tabs from '../../tab/Tabs';
import Sidebar from '../../sidebar/Sidebar';
import Feed from '../../feed/Feed';
import './home.css';

const Home = () => {
    return (
        <>
        <Tabs />
        <div className="homeContainer">
            <Sidebar />
            <Feed />
        </div>
        </>
  );
}

export default Home