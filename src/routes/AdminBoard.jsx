import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../stylesheets/AdminBoard.css";
import Nav from "../components/Nav";
import 'react-responsive-modal/styles.css';
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import { getallusers } from "../Api/Data";
import Modal from "../components/Modal";

export const AdminBoard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    getallusers().then((usr) => {
      setUsers(usr);
    });
  }, []);
  const openModal=()=>{
    setIsModalOpen(true)
  }
  const closeModal=()=>{
    setIsModalOpen(false)
  }
  return (
    <div className="page_layout">
      {isModalOpen&&<Modal closeModal={closeModal} open={isModalOpen} users={users} setUsers={setUsers}/>}
      <Nav section={2} />
      <div className="page_content">
        <div className="admin_board">
          <h2>Users</h2>

          {users ? (
            <div className="admin_board-card-container">
              {users.map((usr)=>{
                return <UserCard name={usr.name} email={usr.email} type={usr.userType} openModal={openModal} usr={usr} key={usr._id}/>
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
