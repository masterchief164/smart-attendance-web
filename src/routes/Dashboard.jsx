import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import "../stylesheets/Dashboard.css";
import { UserContext } from "../utils/UserContext";
import Nav from "../components/Nav";
export const Dashboard = () => {
  const [user, setUser, courses, setCourses] = React.useContext(UserContext);
  return (
    <div className="page_layout">
      <Nav />
      <div className="page_content">
        <div className="dashboard">
          <h2>CSE department</h2>
          <h4>Courses</h4>
          <div className="course-card-container">
            {courses!=null && 
              courses.map((c) => {
                return <CourseCard course={c} key={c._id}/>;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
