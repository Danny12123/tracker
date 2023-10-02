import { React, useMemo, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./utils/Account/SignUp";
import Login from "./utils/Account/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";
import Profile from "./Pages/Profile/Profile";
import { UserAction } from './redux/Action';
import { useDispatch } from 'react-redux';
import axios from 'axios';  
function App() {
  
  const user = useSelector(state => state.UserHolder)
  const dispatch = useDispatch()

  // useEffect(()=>{
  //   const fetchData = async () => {
  //     try {
  //       const res =  await axios.get(`http://localhost:8080/api/v1/user/${user._id}`)
        
  //       dispatch(UserAction(res.data))
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchData()
  // }, [user])
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/signUp' element={<SignUp /> } />
          <Route path='/login' element={<Login /> } />
          <Route path='/profile' element={ <Profile /> } />
          <Route path='/' element={ user ? <Home /> : <SignUp /> } />
      </Routes>
    </BrowserRouter> 
    </>
  );
}


export default App;
