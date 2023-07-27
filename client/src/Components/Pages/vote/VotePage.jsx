import React from 'react';
import Tabs from '../../tab/Tabs';
import Sidebar from '../../sidebar/Sidebar';
import Vote from '../Vote';

const VotePage = () => {
  return (
    <>
        <Tabs />
        <div className="homeContainer">
            <Sidebar />
            <Vote />
        </div>
    </>
  );
}

export default VotePage