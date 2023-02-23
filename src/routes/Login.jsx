import React, { useEffect } from "react";
import bg from "../assets/bg.png";
import "../stylesheets/Login.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import handleGoogleSignIn from "../utils/HandleGoogleSignIn";
import { UserContext } from '../utils/UserContext.jsx';
import { useNavigate } from "react-router-dom";
import initializeApp from '../utils/initializeApp';
export const Login = () => {
  const [user, setUser] = React.useContext(UserContext);
  useEffect(() => {
    initializeApp(setUser)
      .then();
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('loggedIn', JSON.stringify(user));
    }
  }, [user]);
  let navigate = useNavigate();
  return (
    <div
      className="login"
      style={{
        backgroundImage: `url(${bg})`,
        height: "100vh",
      }}
    >
      <div className="login_box">
        <h2 className="loging_heading" style={{marginTop:"15px"}}>Login to AppName</h2>
        <div className="glogin" style={{marginTop:"65px"}}  onClick={handleGoogleSignIn}>
          <FcGoogle className="gicon" />
         Login with google
        </div>
        {/* <div className="glogin">
          <FcGoogle className="gicon"/>
          Login with google
        </div>
        <div className="glogin">
          <FcGoogle className="gicon"/>
          Login with google
        </div> */}
      </div>
      {/* hello */}
    </div>
  );
};
