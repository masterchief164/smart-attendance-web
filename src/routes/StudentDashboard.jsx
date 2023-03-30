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
  const [present, setPresent] = useState(0);
  const [total, setTotal] = useState(0);
  const [curr_student, setcurr_student] = useState(null);
  const [datar, setDatar] = useState([]);


  let studentarr = [];
  let coursename = "";

  const getstudent = () => {
    try {
      if (courses) {
        studentarr = courses.filter((i) => i._id === courseId);
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

  const piechartupdate = async () => {

    if(curr_student){
      const res = await getstudentattendence(courseId, curr_student.email);
      setPieData({
        datasets: [
          {
            data: [total, present],
            backgroundColor: ["red", "blue"],
          },
        ],
    
        labels: ["Absent", "Present"],
      })
  
      setTotal(Number(res.sessionsCount));
      setPresent(Number(res.attendanceCount));
      setDatar([Number(total), Number(total - present)]);
    }
    else{
      console.log("wait");
    }
   
  };
  const initials = {
    datasets: [
      {
        data: [total-present, present],
        backgroundColor: ["red", "blue"],
      },
    ],

    labels: ["Absent", "Present"],
  };
  const [piedata, setPieData] = useState(initials);

  useEffect(() => {
    getstudent();
  }, [courses]);

  useEffect(()=>{
    piechartupdate()
  },[total,curr_student]);

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
             { curr_student ?<Piechart piedata={piedata} />:<>Loading...</>
}
              <div className="student-dashboard-attendence-info">
                <p onClick={piechartupdate}>
                  {" "}
                  Present: &nbsp;<span className="white">{present}</span>
                </p>
                <p>
                  {" "}
                  Total :  &nbsp;&nbsp; <span className="white">{total}</span>
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
