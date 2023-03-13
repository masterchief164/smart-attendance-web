import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../stylesheets/AttendanceDashboard.css";
import AttendanceCard from "../components/AttendanceCard";
import Nav from "../components/Nav";
import { getAttendance } from "../Api/Data";
import { UserContext } from "../utils/UserContext";
export const Attendance = () => {
  const navigate=useNavigate()
  const [attendance, setAttendance] = useState(null);
  const [courseId, setCourseId] = useState(useParams().id);
  const [user, setUser, courses, setCourses] = React.useContext(UserContext);
  const [students, setStudents] = useState(null)
  useEffect(() => {
    getAttendance(courseId).then((c) => {
      console.log(c);
      setAttendance(c)
    });
  }, []);
  useEffect(() => {
    if (courses != null) {
      var result = courses.find(obj => {
        return obj._id === courseId
      })
      console.log(result);
      if(!result)navigate("404")
      else setStudents(result.students.length)
    }
  }, [courses]);
  console.log(courses);
  return (
    <div className="page_layout">
      <Nav section={2} />
      <div className="page_content">
        <div className="attendance">
          <h2>CSE department</h2>
          <h4>Attendence</h4>
          {attendance ? (
            <div className="attendance-card-container">
              {attendance.map((att)=>{
                return (<AttendanceCard key={att._id} {...att} students={students}/>)
              })}
            </div>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
};
