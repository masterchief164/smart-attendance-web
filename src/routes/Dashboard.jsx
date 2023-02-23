import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import "../stylesheets/Dashboard.css";
import { AiFillApple } from "react-icons/ai";
import { UserContext } from "../utils/UserContext";
import initializeApp from "../utils/initializeApp";
import { logout } from "../Api/Data";
export const Dashboard = () => {
  let navigate = useNavigate();
  const [user, setUser] = React.useContext(UserContext);
  const baseURL = import.meta.env.VITE_BACKEND_URL;
useEffect(() => {
  initializeApp(setUser)
    .then();
}, []);
useEffect(() => {
  if (user) {
    localStorage.setItem('loggedIn', JSON.stringify(user));
  }
}, [user]);
const handleLogout = async () => {
  await logout(setUser);
  await navigate('/login')

};
  return (
    <div className="dashboard">
      {user&&<div className="dleft">
        <div className="dboard">
          <img
            className="profileimg"
            src={user.picture}
            alt=""
          />
          <h4>{user.name}</h4>
          <h5>{user.roll}</h5>
          <div className="dmodules">
            <Link to="/" className="selected">
              <AiFillApple />
               Courses

             
            </Link>
            <Link to="/attendance" >
              <AiFillApple />
               Attendence

             
            </Link>
          
            <Link to="/">
              <AiFillApple />
               Settings

             
            </Link>
            <Link to="/" onClick={handleLogout}>
              <AiFillApple />
               Logout

             
            </Link>
          </div>
        </div>
      </div>}
      <div className="dright">
        <div className="righsb">
          <h2>CSE department</h2>
          <h4>Courses</h4>
          <div className="course-card-container">
            <CourseCard courseId="1234556"/>
            <CourseCard courseId="1238556"/>
            <CourseCard courseId="1239556"/>
            <CourseCard courseId="1265556"/>
          </div>
        </div>
      </div>
    </div>
  );
};
