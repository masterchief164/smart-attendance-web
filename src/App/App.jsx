import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Nav from "../components/Nav";
import Homepage from "../routes/homepage";

import GoogleLogin from "../routes/GoogleLogin";
import theme from "../utils/AppTheme";
import { UserContext, UserContextProvider } from "../utils/UserContext";
import GenerateSession from "../routes/GenerateSession";
import Footer from "../components/footer";
import { Login } from "../routes/Login";
import { Dashboard } from "../routes/Dashboard";
import { Attendance } from "../routes/Attendance";
import { GenerateSession2 } from "../routes/GenerateSession2";
import initializeApp from "../utils/initializeApp";
import { NotFound } from "../routes/404";
import { getCourses } from "../Api/Data";

function App() {
  const [user, setUser, courses, setCourses] = React.useContext(UserContext);
  useEffect(() => {
    getCourses().then((c) => {
      setCourses(c);
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      
        <Router>
          <div className="App">
            {/* <Nav /> */}
            <Routes>
              <Route
                exact
                path="/"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
              <Route
                exact
                path="/attendance"
                element={user ? <Attendance /> : <Navigate to="/login" />}
              />
              <Route
                exact
                path="/generateSession/:id"
                element={user ? <GenerateSession2 /> : <Navigate to="/login" />}
              />
              {/* <Route exact path="/generateSession" element={<GenerateSession />} /> */}
              <Route exact path="/google" element={<GoogleLogin />} />
              <Route exact path="/login" element={user ? <Navigate to="/" /> : <Login/>} />
              <Route path='*' element={<NotFound />}/>
            </Routes>
            {/* <Footer/> */}
          </div>
        </Router>
    </ThemeProvider>
  );
}

export default App;
