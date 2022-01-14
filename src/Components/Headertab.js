import React from 'react';
import './header.css';

function Headertab() {
  return (
    <div className=''>
      <ul className='topbar'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#news'>About</a>
        </li>
        <li>
          <a href='#contact'>Course</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
      </ul>
    </div>
  );
}

export default Headertab;
