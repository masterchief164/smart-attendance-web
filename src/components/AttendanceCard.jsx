import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
const AttendanceCard = (student) => {
 
  
  const [user, setUser, courses, setCourses] = React.useContext(UserContext);

const [courseID,setCourseId]=useState(useParams().id)


  const cstud=student.student;



  console.log(student.student._id);
  let navigate =useNavigate();
const gotodashboard=()=>{

  navigate(`/studentdashboard/${courseID}/${cstud._id}`);

}
  
  // console.log(courses);
  return (
    <div className="attendance-card" onClick={gotodashboard}>
      <div className="attendance-card-icon">
        <BsThreeDotsVertical />
      </div>
      <div className="attendance-card-1">
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" style={{borderRadius:"10px"}}/>
        <div>&nbsp; &nbsp;  {cstud.name}</div>
      </div>
      <div className="attendance-card-2">
      <div>Roll Number:  &nbsp;{cstud.roll.substring(0, 10)}</div>
      <div>Enrolled Date:  &nbsp;{cstud.updatedAt.substring(0, 10)}</div>
       
      </div>
    </div>
  );
};

export default AttendanceCard;
