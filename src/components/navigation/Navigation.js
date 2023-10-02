import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import avatar from '../../images/avatar.jpeg';
import { signout } from '../../utils/Icons';
import { menuItems } from '../../utils/menuItems';
import './style.css';
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { UserAction } from '../../redux/Action';
import { useDispatch } from 'react-redux';
import axios from 'axios';


function Navigation({active, setActive}) {
    const user = useSelector(state => state.UserHolder)
    // console.log(user)
    const [isOpen, setIsOpen] = useState(false);
    const handleShow = () => setIsOpen(!isOpen);
    const dispatch = useDispatch()
    const handleOut = () => {
        dispatch(UserAction(""))
    }

//   useEffect(()=>{
//     const fetchData = async () => {
//       try {
//         const res =  await axios.get(`http://localhost:8080/api/v1/user/${user._id}`)
        
//         dispatch(UserAction(res.data))
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     fetchData()
//   }, [user])
  return (
      <div id='nav_holder'>
        <div className='user-con'>
              <img src={ user ? user.profilePic :  avatar} alt="" />
            <div className='text'>
                  <h2>{ user.username }</h2>
                  <p style={{fontSize: "14px"}}><Link to='/profile'>Edit your profile</Link></p>
            </div>
              <div className='bottom-nav'>
                  <li onClick={handleShow}>
                      { signout } Account
                  </li>
                  <div className={isOpen ?'drop_down': "drop_down_none"}>   
                    <ul>
                          <li><Link to='/login'style={{textDecoration: "none", color:"#000"}} >Sign In</Link></li>
                        <li onClick={handleOut}>Sign Out</li>
                    </ul>
                  </div>
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