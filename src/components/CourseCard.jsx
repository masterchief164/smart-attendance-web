import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
const CourseCard = ({courseId}) => {

  
  
  return (
    <div className="course-card">
      <div className="course-card-icon">
        <BsThreeDotsVertical />
        <div className="dropdown">
          <Link>Check Attendance</Link>
          <Link to={`/generatesession/${courseId}`}>Generate Session</Link>
        </div>
      </div>
      <div className="course-card-1">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
          style={{ borderRadius: "10px" }}
        />
        <div>Slack Bot</div>
      </div>
      <div className="course-card-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          corrupti modi sed quia harum quae.
        </p>
      </div>
      <hr />
      <div className="course-card-3">
        <div>
          6<br />
          participants
        </div>
        <div>
          14:02:30
          <br />
          Due Date
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
