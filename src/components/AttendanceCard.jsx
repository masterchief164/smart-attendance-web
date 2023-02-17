import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
const AttendanceCard = () => {
  return (
    <div className="attendance-card">
      <div className="attendance-card-icon">
        <BsThreeDotsVertical />
      </div>
      <div className="attendance-card-1">
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" style={{borderRadius:"10px"}}/>
        <div>Slack Bot</div>
      </div>
      <div className="attendance-card-2">
        <span className="green">56</span>/<span className="purple">100</span> days present
      </div>
    </div>
  );
};

export default AttendanceCard;
