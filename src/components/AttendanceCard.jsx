import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
const AttendanceCard = (student) => {
  const [user, setUser, courses, setCourses] = React.useContext(UserContext);

  const [courseID, setCourseId] = useState(useParams().id);

  const cstud = student.student;

  let navigate = useNavigate();
  const gotodashboard = () => {
    navigate(`/studentdashboard/${courseID}/${cstud._id}`);
  };

  // console.log(courses);
  return (
    <div className="attendance-card" onClick={gotodashboard}>
      <div className="attendance-card-icon">
        {/* <BsThreeDotsVertical /> */}
      </div>
      <div className="attendance-card-1">
        <img
          src={cstud.picture}
          style={{ borderRadius: "10px" }}
        />
        <div>&nbsp; &nbsp; {cstud.name}</div>
      </div>
      <div className="attendance-card-2">
        <div>Roll Number: &nbsp;{cstud.roll.substring(0, 10)}</div>
        <div>Enrolled Date: &nbsp;{cstud.updatedAt.substring(0, 10)}</div>
      </div>
    </div>
  );
};

export default AttendanceCard;
