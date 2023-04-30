import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheets/Setting.css";
import { UserContext } from "../utils/UserContext";
import Nav from "../components/Nav";

export const Setting = () => {
  let Navigate = useNavigate();
  const [user, setUser, courses, setCourses,currUser] = React.useContext(UserContext);
  const addcourse = () => {
    Navigate("/addcourse");
  };
  return (
    <div className="page_layout">
      <Nav section={3} />

      <div className="page_content ">
        <div className="setting-up-1">
          <img src={user.picture} />
          <div className="setting-details">
            <p>
              Name : &nbsp;
              <span className="white">{user.name}</span>
            </p>
            <p>
              Email : &nbsp;
              <span className="white">{user.email}</span>
            </p>
            <p>
              Account Type : &nbsp;
              <span className="white">{user.userType}</span>
            </p>
          
            
          </div>
        </div>
        
        <div className="setting-up-2">
        {/* <div className="setting-details">
            <p>
              Number of Courses : &nbsp;
              <span className="white">{courses.length}</span>
            </p>
            <p>
              Session Taken : &nbsp;
              <span className="white">45</span>
            </p>
           
          
            
          </div> */}
        
        </div>
      </div>
    </div>
  );
};
