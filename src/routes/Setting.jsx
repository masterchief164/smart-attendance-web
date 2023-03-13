import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheets/Setting.css";
import { UserContext } from "../utils/UserContext";
import Nav from "../components/Nav";

export const Setting = () => {
  let Navigate = useNavigate();
  const [user, setUser, courses, setCourses] = React.useContext(UserContext);

  const addcourse = () => {
    Navigate("/addcourse");
  };
  return (
    <div className="page_layout">
      <Nav section={3} />

      <div className="page_content ">

        <div className="setting-card-container setting-main">

          <div className="setting-img-container">
            <img src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" />
          </div>
          <div className="setting-content">
            <div className="setting-card-details">
              <h3>Robert Downey Jr</h3>
              <h4>Web Developer</h4>

              <ul className="setting-social-media-links-container">
                <li>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
