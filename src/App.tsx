import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SideBar from './components/sideBar/SideBar';
import Facility from './pages/facility/Facility';
import Login from './pages/login/Login';
import Organization from './pages/organization/Organization';
import Register from './pages/register/Register';
import Room from './pages/room/Room';
import Welcome from './pages/welcome/Welcome';
import Wing from './pages/wing/Wing';


const  App = () => {
  return (
    <BrowserRouter>
    <SideBar>
      <Routes>
        <Route path="/welcome" element={<Welcome />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/organization" element={<Organization />}/>
        <Route path="/facility" element={<Facility />}/>
        <Route path="/wing" element={<Wing />}/>
        <Route path="/room" element={<Room />}/>
      </Routes>
    </SideBar>
    </BrowserRouter>
  );
}

export default App;
