import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import Nav from '../components/Nav';
import Homepage from '../routes/homepage';

import GoogleLogin from '../routes/GoogleLogin';
import theme from '../utils/AppTheme';
import { UserContextProvider } from '../utils/UserContext';
import GenerateSession from '../routes/GenerateSession';
import Footer from '../components/footer';

function App() {
  return (<ThemeProvider theme={theme}>
    <UserContextProvider>
          <Router>
            <div className="App">
              <Nav />
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/generateSession" element={<GenerateSession />} />
                <Route exact path="/google" element={<GoogleLogin />} />
              </Routes> 
            <Footer/>
            </div>
          </Router>
    </UserContextProvider>
  </ThemeProvider>);
}

export default App;
