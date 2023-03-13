import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addStudent, findStudent } from "../Api/Data";

import "../stylesheets/CourseForm.css";
import { UserContext } from "../utils/UserContext";

export const StudentForm = () => {
  let Navigate = useNavigate();
  const navigateBack = () => {
    Navigate("/");
  };
 
  const [user, setUser, courses, setCourses] = React.useContext(UserContext);
  const [courseId, setCourseId] = useState(useParams().id);
const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(courses == null);
  useEffect(() => {
    if (courses != null) {
      setLoading(false);
      if (!courses.some((k) => k._id == courseId)) {
        navigate("/404");
      }
    }
  }, [courses]);
  let navigate = useNavigate();
  const submit=()=>{
    findStudent(email).then((k)=>{
      if(!k)window.alert("Student with this email dosen't exist");
      else addStudent().then();
    })
  }
  return (
    <div className="course-form-body">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="course-form">
          <h2>Add Student</h2>
          <form>
            <div className="course-details-box">
              <input type="text" name="name" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              <label>Student Id</label>
            </div>
            <div className="course-details-box">
              <input type="text" name="" />
              <label>Student Name</label>
            </div>

            <div className="course-buttons">
              <a onClick={submit}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Add
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
      )}
    </div>
  );
};
