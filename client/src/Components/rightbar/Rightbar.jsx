import React from 'react';
import './rightbar.css';

const Rightbar = () => {
  return (
    <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="handlike.jpg" alt="" />
          <span className="birthdayText">
            <p>Pola Foster</p> and <p>Marcus Harvey</p> 
            have a debate on Thursday, 20th July 2023, 11am at the Auditorium
          </span>
        </div>
        <img className="rightbarAd" src="microsoft.jpg" alt="" />
      </>
  );
}

export default Rightbar