import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../stylesheets/AttendanceDashboard.css";
import AttendanceCard from "../components/AttendanceCard";
import Nav from "../components/Nav";
import { getAttendance } from "../Api/Data";
import { UserContext } from "../utils/UserContext";
export const Attendance = () => {
  const navigate = useNavigate();
  // const [attendance, setAttendance] = useState(null);
  const [courseId, setCourseId] = useState(useParams().id);
  const [user, setUser, courses, setCourses] = React.useContext(UserContext);

  const [students, setStudents] = useState(null);

  const getstudents = () => {

    if (courses) {
   
      const student_arr = courses.filter((i) => i._id === courseId);
      setStudents(student_arr[0].students);
      // console.log("student_arr", student_arr);
      // console.log(students);
    } else {
      console.log("courses is empty");
    }
  };

  useEffect(() => {
    getstudents();
  }, [courses]);



  return (
    <div className="page_layout">
      <Nav section={2} />
      <div className="page_content">
        <div className="attendance">
          <h2>CSE department</h2>
          <h4>Attendees</h4>

          {students ? (
            <div className="attendance-card-container">
              {students.map((i) => {
                return (
                  <>
                    <AttendanceCard key={i._id} student={i} />
                  </>
                );
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
