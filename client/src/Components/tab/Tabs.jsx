import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import HowToVoteOutlinedIcon from '@mui/icons-material/HowToVoteOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import './tab.css';

export default function LabelBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation className="bottomNavigation"  sx={{
        width: '100%',
        maxWidth: 360,
        alignContent: "center",
        justifyContent: "center",
      }}
      showlabel
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <Link to="/home">
        <BottomNavigationAction
          label="Home"
          icon={<HomeOutlinedIcon />}
        />
      </Link>
      <Link to="/resources">
      <BottomNavigationAction
        label="Resources"
        icon={<SourceOutlinedIcon />}
      />
      </Link>
      <Link to="/vote">
      <BottomNavigationAction
        label="Vote"
        icon={<HowToVoteOutlinedIcon />}
      />
      </Link>
      <Link to="/chat">
      <BottomNavigationAction 
        label="Chat"
        icon={<ChatBubbleOutlineOutlinedIcon />} />
      </Link>
      <Link to="/signin">
      <BottomNavigationAction 
        label="Profile" 
        icon={<AccountCircleOutlinedIcon  />} />
      </Link>
    </BottomNavigation>
    </Paper>
  );
}