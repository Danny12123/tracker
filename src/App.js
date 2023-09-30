import { React, useMemo, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./utils/Account/SignUp";
import Login from "./utils/Account/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";
import Profile from "./Pages/Profile/Profile";

function App() {
  
  const user = useSelector(state => state.UserHolder)
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
