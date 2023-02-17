import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import Nav from '../components/Nav';
import Homepage from '../routes/homepage';

import GoogleLogin from '../routes/GoogleLogin';
import theme from '../utils/AppTheme';
import { UserContext, UserContextProvider } from '../utils/UserContext';
import GenerateSession from '../routes/GenerateSession';
import Footer from '../components/footer';
import { Login } from '../routes/Login';
import { Dashboard } from '../routes/Dashboard';
import { Attendance } from '../routes/Attendance';
import { GenerateSession2 } from '../routes/GenerateSession2';

function App() {
  const [user,setuser]=useState(localStorage.getItem('loggedIn'))

  return (<ThemeProvider theme={theme}>
    <UserContextProvider>
          <Router>
            <div className="App">
              {/* <Nav /> */}
              <Routes>
              <Route exact path="/" element={user?<Dashboard/>:<Navigate to="/login"/>}/>
              <Route exact path="/attendance" element={user?<Attendance/>:<Navigate to="/login"/>}/>
              <Route exact path="/generateSession/:id" element={user?<GenerateSession2/>:<Navigate to="/login"/>}/>
                {/* <Route exact path="/generateSession" element={<GenerateSession />} /> */}
                <Route exact path="/google" element={<GoogleLogin />} />
                <Route exact path="/login" element={<Login />} />
              </Routes> 
            {/* <Footer/> */}
            </div>
          </Router>
    </UserContextProvider>
  </ThemeProvider>);
}

export default App;
