import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../stylesheets/StudentDashboard.css";

import Nav from "../components/Nav";
import { Piechart } from "../components/Piechart";
import { getstudentattendence } from "../Api/Data";

export const StudentDashboard = ({ courses }) => {
  let Navigate = useNavigate();

  const [allstudents, setAllStudents] = useState([]);
  const [courseId, setCourseId] = useState(useParams().courseId);
  const [courseName, setCourseName] = useState("");
  const [studentId, setStudentId] = useState(useParams().studentId);
  const [present,setPresent]=useState(50);
  const [total,setTotal]=useState(50);
  const [curr_student, setcurr_student] = useState(null);
  let studentarr = [];
  let coursename = "";

  const getstudent =  () => {
    try {
      if (courses) {
        studentarr =  courses.filter((i) => i._id === courseId);
        setCourseName(studentarr[0].name);
        setAllStudents(studentarr[0].students);
        let curr_stud = studentarr[0].students.filter(
          (i) => i._id === studentId
        )[0];
        setcurr_student(
          studentarr[0].students.filter((i) => i._id === studentId)[0]
        );
      } else {
        console.log("courses is empty");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const piechartupdate=async()=>{
    const res= await getstudentattendence(courseId, curr_student.email);
    setTotal(res.sessionsCount);
    setPresent(res.attendanceCount);
   
  }

  useEffect(() => {
     getstudent();
    
  }, [courses]);

 
  return (
    <div className="page_layout">
      <Nav section={3} />

      {curr_student ? (
        <div className="page_content ">
          <div className="student-dashboard-up-1">
            <img src={curr_student.picture} />
            <div className="student-dashboard-details">
              <p>
                Name : &nbsp;
                <span className="white">{curr_student.name}</span>
              </p>
              <p>
                Roll ID : &nbsp;
                <span className="white">{curr_student.roll}</span>
              </p>
              <p>
                Arrount Type : &nbsp;
                <span className="white">{curr_student.userType}</span>
              </p>
              <p>
                Course : &nbsp;
                <span className="white"> {courseName}</span>
              </p>
            </div>
          </div>
          <div className="student-dashboard-down">
            <div className="student-dashboard-chart">
              <Piechart present={present} absent={total} />
              <div className="student-dashboard-attendence-info">
                <p onClick={piechartupdate}>
                  {" "}
                  Present: &nbsp;<span className="white">{courses.length}</span>
                </p>
                <p>
                  {" "}
                  Total: &nbsp; <span className="white">{courses.length}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="page_content ">
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );
};
