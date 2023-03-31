import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../stylesheets/AdminBoard.css";
import Nav from "../components/Nav";

import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import { getallusers } from "../Api/Data";

export const AdminBoard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getallusers().then((usr) => {
      setUsers(usr);
    });
  }, []);

  return (
    <div className="page_layout">
      <Nav section={2} />
      <div className="page_content">
        <div className="admin_board">
          <h2>Users</h2>

          {users ? (
            <div className="admin_board-card-container">
              {users.map((usr)=>{
                return <UserCard name={usr.name} email={usr.email} type={usr.userType}/>
              })}
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};
