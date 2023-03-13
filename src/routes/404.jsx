import React, { useEffect } from "react";
import "../stylesheets/404.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const NotFound = () => {
  let navigate = useNavigate();
  return (
    <div className="not-found">
        <h1>Page does not exist</h1>
        <Link to="/">Go Back To Home Page</Link> 
    </div>
  );
};
