import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { UserContext } from "../utils/UserContext";
const AttendanceCard = ({date,attendees,students}) => {
  console.log(attendees,date);
  const [user, setUser, courses, setCourses] = React.useContext(UserContext);
  console.log(courses);
  return (
    <div className="attendance-card">
      <div className="attendance-card-icon">
        <BsThreeDotsVertical />
      </div>
      <div className="attendance-card-1">
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" style={{borderRadius:"10px"}}/>
        <div>{date.substring(0, 10)}</div>
      </div>
      <div className="attendance-card-2">
        <span className="green">{attendees.length}</span>/<span className="purple">{students}</span> present
      </div>
    </div>
  );
};

export default AttendanceCard;
