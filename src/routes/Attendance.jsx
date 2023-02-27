import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheets/AttendanceDashboard.css";
import { AiFillApple } from "react-icons/ai";
import AttendanceCard from "../components/AttendanceCard";
import { UserContext } from "../utils/UserContext";
import initializeApp from "../utils/initializeApp";
export const Attendance = () => {
  let navigate = useNavigate();
  const [user, setUser] = React.useContext(UserContext);

  useEffect(() => {
    initializeApp(setUser)
      .then();
  }, []);
  useEffect(() => {
    // console.log(`${baseURL}/login/googleLogin`);
    if (user) {
      localStorage.setItem('loggedIn', JSON.stringify(user));
    }
  }, [user]);

  const handleLogout = async () => {
    await logout(setUser);
    await navigate("/login");
  };

  return (
    <div className="dashboard">
      {user && (
        <div className="dleft">
          <div className="dboard">
            <img className="profileimg" src={user.picture} alt="" />
            <h4>{user.name}</h4>
            <h5>{user.roll}</h5>
            <div className="dmodules">
              <Link to="/">
                <AiFillApple />
                Courses
              </Link>
              <Link to="/attendance" className="selected">
                <AiFillApple />
                Attendence
              </Link>

              <Link to="/">
                <AiFillApple />
                Settings
              </Link>
              <Link onClick={handleLogout}>
                <AiFillApple />
                Logout
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="dright">
        <div className="righsb">
          <h2>CSE department</h2>
          <h4>Attendence</h4>
          <div className="attendance-card-container">
            <AttendanceCard />
            <AttendanceCard />
            <AttendanceCard />
            <AttendanceCard />
          </div>
        </div>
      </div>
    </div>
  );
};
