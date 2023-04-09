import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
const UserCard = ({name,email,type}) => {
 
    let navigate =useNavigate();
    const gotodashboard=()=>{

        navigate(`/setting`);
      
      }
  
  return (
    <div className="admin_board-card" onClick={gotodashboard}>
      <div className="admin_board-card-icon">
        <BsThreeDotsVertical />
      </div>
      <div className="admin_board-card-1">
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" style={{borderRadius:"10px"}}/>
        <div>&nbsp; &nbsp;  {name}</div>
      </div>
      <div className="admin_board-card-2">
     
      <div>User Type:  &nbsp;{type}</div>
      <div>Email:  &nbsp;{email}</div>
       
      </div>
    </div>
  );
};

export default UserCard;
