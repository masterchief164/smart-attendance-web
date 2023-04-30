import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
const CourseCard = ({courseId,course}) => {
  const [user, setUser, courses, setCourses] = React.useContext(UserContext);
  console.log(course);
  return (
    <div className="course-card">
      <div className="course-card-icon">
        <BsThreeDotsVertical />
        <div className="dropdown">
          <Link to={`/attendance/${course._id}`}>Check Attendance</Link><hr/>
         {user.userType!=="student"&& <><Link to={`/generatesession/${course._id}`}>Generate Session</Link><hr/></>}
         {user.userType!=="student"&& <><Link to={`/addstudent/${course._id}`}>Add student</Link></>}
        </div>
      </div>
      <div className="course-card-1">
        
        <h3><span>Course Name:</span>&nbsp;{course.name}</h3>
       <h3><span>Course Instructor: &nbsp;</span>{course.instructor.name}</h3>
      </div>
    
      <br/>
      <hr />
      <div className="course-card-3">
        <div>
          {course.students.length} 
          &nbsp;participant(s)
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
