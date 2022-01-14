import React from 'react';
import './aside.css';
import Main from './Main';

export default function Aside() {
  const myStyle = {
    marginLeft: '25%',
    padding: '1px 16px',
    height: '1000px',
  };
  return (
    <div style={{ position: 'fixed' }}>
      <ul className='asidebar'>
        <li>
          <a class='active' href='#home'>
            ReactJs
          </a>
        </li>
        <li>
          <a href='#news'>Nodejs</a>
        </li>
        <li>
          <a href='#contact'>Express</a>
        </li>
        <li>
          <a href='#about'>MongoDB</a>
        </li>
      </ul>
      <Main />
    </div>
  );
}
