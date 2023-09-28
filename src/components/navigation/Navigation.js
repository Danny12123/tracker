import React, { useState } from 'react';
import styled from 'styled-components';
import avatar from '../../images/avatar.jpeg';
import { signout } from '../../utils/Icons';
import { menuItems } from '../../utils/menuItems';
import './style.css';

function Navigation({active, setActive}) {
  return (
      <div id='nav_holder'>
        <div className='user-con'>
            <img src={avatar} alt="" />
            <div className='text'>
                <h2>confy</h2>
                <p>your money</p>
            </div>
              <div className='bottom-nav'>
                  <li>
                      { signout } Sign Out
                  </li>
              </div>
        </div>
        <div className='menu-items'>
            <ul className='menu-items'>
                {menuItems.map((item) => {
                    return <li key={item.id}
                    onClick={()=> setActive(item.id)}
                    className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            
        </div>
    </div>
  )
}


export default Navigation