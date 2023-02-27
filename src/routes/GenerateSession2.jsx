import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import "../stylesheets/GenerateSession2.css";
import { AiFillApple } from "react-icons/ai";
import { UserContext } from "../utils/UserContext";
import QRCode from "qrcode";
import { logout } from "../Api/Data";
import defaultqr from "../assets/defaultqr.png";
import initializeApp from "../utils/initializeApp";
export const GenerateSession2 = () => {
  const [courseId, setCourseId] = useState(useParams().id);
  const [user, setUser] = React.useContext(UserContext);
  useEffect(() => {
    initializeApp(setUser)
      .then();
  }, []);
  useEffect(() => {
    if (user) {
      localStorage.setItem('loggedIn', JSON.stringify(user));
    }
  }, [user]);
  const handleLogout = async () => {
    await logout(setUser);
    await navigate("/login");
  };
  let navigate = useNavigate();
  const [qr, setQr] = useState(null);
  const [isRendered, setIsRendered] = useState(false);
  const [session, setSession] = useState(null);

  // window.onbeforeunload = function () {
  //     return () => {
  //         if (session) {
  //             // console.log("es closed")
  //             session.close()
  //         }
  //     }
  // };
  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    if (session) {
      session.onmessage = generateQR;
      // console.log("onmessage set")
    }
  }, [session]);

  const generateQR = async (event) => {
    const data1 = JSON.parse(event.data);
    // console.log(data1)

    const data = {
      session_id: data1.id,
      nonce: data1.nonce,
    };
    // console.log(data);
    const text = JSON.stringify(data);
    try {
      setQr(
        await QRCode.toDataURL(text, { errorCorrectionLevel: "H", version: 12 })
      );
    } catch (err) {
      console.error(err);
    }
  };

  const sessionHandler = async () => {
    setSession(
      new EventSource(
        `${import.meta.env.VITE_BACKEND_URL}/session/createSession`,
        { withCredentials: true }
      )
    );
    // console.log("es created")
  };

  const stopSessionHandler = async () => {
    session.close();
    setQr(null);
    // console.log("es closed")
  };
  return (
    <div className="dashboard">
      {user && (
        <div className="dleft">
          <div className="dboard">
            <img className="profileimg" src={user.picture} alt="" />
            <h4>{user.name}</h4>
            <h5>{user.roll}</h5>
            <div className="dmodules">
              <Link to="/">
                <AiFillApple />
                Courses
              </Link>
              <Link to="/attendance">
                <AiFillApple />
                Attendence
              </Link>

              <Link to="/">
                <AiFillApple />
                Settings
              </Link>
              <Link onClick={handleLogout}>
                <AiFillApple />
                Logout
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="dright">
        <div className="righsb">
          <h2>CSE department</h2>
          <h4>ATTENDANCE</h4>
          <div className="course-card-container">
            <div className="generate_session_container">
              <div className="qr">
                {qr ? <img src={qr} alt="QR Code" /> : <img src={defaultqr} />}
              </div>
              <div className="generate_session_content">
                <h1>Scan this QR Code.</h1>
                <p>To mark your attendance</p>
                <button onClick={sessionHandler} disabled={qr != null}>
                  {" "}
                  Start Session
                </button>
                <button onClick={stopSessionHandler}>End Session</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
