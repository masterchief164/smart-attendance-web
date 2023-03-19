import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AddCourse } from "../Api/Data";

import "../stylesheets/CourseForm.css";
import { UserContext } from "../utils/UserContext";

export const CourseForm = () => {
  let Navigate = useNavigate();
  const navigateBack = () => {
    Navigate("/");
  };

  const [user, setUser, courses, setCourses] = React.useContext(UserContext);
  const initials = {
    name: "",
  };
  const [newCourse, setNewCourse] = useState(initials);
  const onValueChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
    console.log(newCourse);
  };

  const createCourse = async() => {
    await AddCourse(newCourse,setCourses);
    Navigate('/');

  };

  return (
    <div className="course-form-body">
      <div className="course-form">
        <h2>Add New Course</h2>
        <form>
          <div className="course-details-box">
            <input
              type="text"
              value={newCourse.name}
              onChange={(e) => onValueChange(e)}
              name="name"
            />
            <label>Course Name</label>
          </div>

          <div className="course-details-box">
            <input type="text" name="" />
            <label>Instructor</label>
          </div>

          <div className="course-details-box">
            <input type="text" name="" />
            <label>Students</label>
          </div>

          <div className="course-buttons">
            <a onClick={createCourse}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Create
            </a>

            <a onClick={navigateBack}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
