import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addStudent, adminLogin, findStudent } from "../Api/Data";

import "../stylesheets/AdminForm.css";
import { UserContext } from "../utils/UserContext";

export const AdminForm = () => {
  const [adminId, setAdminId] = useState("");
  const [adminpass, setAdminPass] = useState("");
  const [user, setUser, courses, setCourses] = React.useContext(UserContext);
  let Navigate = useNavigate();
  const navigateback = () => {
    console.log("press");
    console.log(adminId, adminpass);
    Navigate("/");
  };

  



  const login = () => {
    console.log("press");
    console.log(adminId, adminpass);
    adminLogin(adminId,adminpass).then(async(usr)=>{await setUser(usr);Navigate('/admin')})
  };
  return (
    <div className="admin-form-body">
      <div className="admin-form">
        <h2>Admin Login</h2>
        <form>
          <div className="admin-details-box">
            <input
              type="text"
              name="name"
              value={adminId}
              onChange={(e) => {
                setAdminId(e.target.value);
              }}
            />
            <label>Admin Id</label>
          </div>
          <div className="admin-details-box">
            <input
              type="text"
              name=""
              value={adminpass}
              onChange={(e) => {
                setAdminPass(e.target.value);
              }}
            />
            <label>Password</label>
          </div>

          <div className="admin-buttons">
            <a onClick={login}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Login
            </a>

            <a onClick={navigateback}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Back
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
