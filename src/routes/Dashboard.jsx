import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import "../stylesheets/Dashboard.css";
import { UserContext } from "../utils/UserContext";
import Nav from "../components/Nav";
import {GoPlus} from "react-icons/go"
export const Dashboard = () => {

 let Navigate=useNavigate();
  const [user, setUser, courses, setCourses] = React.useContext(UserContext);

  const addcourse=()=>{
    Navigate('/addcourse');
  }
  return (
    <div className="page_layout">
      <Nav section={1}/>
      
      <div className="page_content">
        <div className="dashboard">
          <h2>CSE department</h2>
          <h4>Courses</h4>
          <div className="course-card-container">
            {courses != null &&
              courses.map((c) => {
                return <CourseCard course={c} key={c._id} />;
              })}
            <div className="course-card course-add" onClick={addcourse}>
              <GoPlus/>
              <p>Add Course</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
