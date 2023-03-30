import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../stylesheets/GenerateSession2.css";
import { UserContext } from "../utils/UserContext";
import QRCode from "qrcode";
import defaultqr from "../assets/defaultqr.png";
import Nav from "../components/Nav";
export const GenerateSession2 = () => {
  const [courseId, setCourseId] = useState(useParams().id);
  const [user, setUser, courses, setCourses] = React.useContext(UserContext);
  const [loading, setLoading] = useState(courses == null);
  let navigate = useNavigate();
  const [qr, setQr] = useState(null);
  const [isRendered, setIsRendered] = useState(false);
  const [session, setSession] = useState(null);
  useEffect(() => {
    if (courses != null) {
      setLoading(false);
      if (!courses.some((k) => k._id == courseId)) {
        navigate("/404");
      }
    }
  }, [courses]);

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
    if (data1.attendance != null) {
      console.log(data1.message);
    }
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
        `${import.meta.env.VITE_BACKEND_URL}/session/createSession?courseId=${courseId}`,
        { withCredentials: true }
      )
    );
    // console.log("es created")
  };

  const stopSessionHandler = async () => {
    session.close();
    setQr(null);
    console.log("es closed")
  };
  return (
    <div className="page_layout">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Nav />
          <div className="page_content">
            <div className="generate_session_container">
              <div className="qr">
                {qr ? <img src={qr} alt="QR Code" /> : <img src={defaultqr} />}
              </div>
              <div className="generate_session_content">
                <h1>Scan this QR Code.</h1>
                <p>To mark your attendance</p>
                <button onClick={sessionHandler} disabled={qr != null}>
                  Start Session
                </button>
                <button onClick={stopSessionHandler}>End Session</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
