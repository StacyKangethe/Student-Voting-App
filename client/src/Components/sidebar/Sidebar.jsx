import React from 'react';
import './sidebar.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import HowToVoteOutlinedIcon from '@mui/icons-material/HowToVoteOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='sidebarWrapper'>
        <ul className="sidebarList">
          <li className='sidebarListItem'>
          <Link to="/home">
            <HomeOutlinedIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Home</span>
          </Link>
          </li>
          <Link to="/resources">
          <li className='sidebarListItem'>
            <SourceOutlinedIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Resources</span>
          </li>
          </Link>
          <li className='sidebarListItem'>
          <Link to="/vote">
            <HowToVoteOutlinedIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Vote</span>
          </Link>
          </li>
          <li className='sidebarListItem'>
          <Link to="/chat">
            <ChatBubbleOutlineOutlinedIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Campaigns</span>
          </Link>
          </li>
          <li className='sidebarListItem'>
          <Link to="/signin">
            <AccountCircleOutlinedIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Profile</span>
          </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar