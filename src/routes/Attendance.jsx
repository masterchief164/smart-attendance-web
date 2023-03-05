import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheets/AttendanceDashboard.css";
import AttendanceCard from "../components/AttendanceCard";
import Nav from "../components/Nav";
export const Attendance = () => {
  return (
    <div className="page_layout">
      <Nav/>
      <div className="page_content">
        <div className="attendance">
          <h2>CSE department</h2>
          <h4>Attendence</h4>
          <div className="attendance-card-container">
            <AttendanceCard />
            <AttendanceCard />
            <AttendanceCard />
            <AttendanceCard />
          </div>
        </div>
      </div>
    </div>
  );
};
