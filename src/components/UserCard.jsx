import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import {HiPencil} from 'react-icons/hi'
const UserCard = ({name,email,type,openModal,usr}) => {
  const [user, setUser, courses, setCourses,currUser,setCurrUser] = React.useContext(UserContext);
    let navigate =useNavigate();
    const modalopen=()=>{
      setCurrUser({name,email,type,id:usr._id})
      openModal()
    }
    const gotodashboard=()=>{
      setCurrUser({name,email,type,id:usr._id})
        navigate(`/setting`);
      
      }
  return (
    <div className="admin_board-card" >
      <div className="admin_board-card-icon">
        <BsThreeDotsVertical />
      </div>
      <div className="admin_board-card-1">
        <img src={usr.picture} style={{borderRadius:"10px"}}/>
        <div onClick={gotodashboard} className="settings_name">&nbsp; &nbsp;  {name}</div>
      </div>
      <div className="admin_board-card-2">
     
      <div>User Type:  &nbsp;{type} <HiPencil onClick={modalopen} /></div>
      <div>Email:  &nbsp;{email}</div>
       
      </div>
    </div>
  );
};

export default UserCard;
