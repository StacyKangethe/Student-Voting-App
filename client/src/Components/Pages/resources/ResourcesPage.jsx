import React from 'react';
import Tabs from '../../tab/Tabs';
import Sidebar from '../../sidebar/Sidebar';
import Resources from '../Resources';

const ResourcesPage = () => {
  return (
    <>
        <Tabs />
        <div className="homeContainer">
            <Sidebar />
            <Resources />
        </div>
    </>
  )
}

export default ResourcesPage