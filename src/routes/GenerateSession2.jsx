import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import "../stylesheets/GenerateSession2.css";
import { AiFillApple } from "react-icons/ai";
import { UserContext } from "../utils/UserContext";
import QRCode from 'qrcode'

export const GenerateSession2 = () => {
  const [courseId, setCourseId] = useState(useParams().id)
  
  let navigate = useNavigate();
    const [user] = React.useContext(UserContext);
    const [qr, setQr] = useState(null)
    const [isRendered, setIsRendered] = useState(false)
    const [session, setSession] = useState(null)

    // window.onbeforeunload = function () {
    //     return () => {
    //         if (session) {
    //             // console.log("es closed")
    //             session.close()
    //         }
    //     }
    // };
    useEffect(() => {
        setIsRendered(true)
    }, [])


    useEffect(() => {
        if(session) {
            session.onmessage = generateQR;
            // console.log("onmessage set")
        }
    }, [session]);

    

    const generateQR = async (event) => {
        const data1 = JSON.parse(event.data);
        // console.log(data1)

        const data = {
            session_id: data1.id,
            nonce: data1.nonce
        }
        // console.log(data);
        const text = JSON.stringify(data)
        try {
            setQr(await QRCode.toDataURL(text, {errorCorrectionLevel: 'H', version: 12}))
        } catch (err) {
            console.error(err)
        }
    }

    const sessionHandler = async () => {
        setSession(new EventSource(`${import.meta.env.VITE_BACKEND_URL}/session/createSession`, {withCredentials: true}));
        // console.log("es created")
    }

    const stopSessionHandler = async () => {
        session.close()
        // console.log("es closed")
    }
  return (
    <div className="dashboard">
      <div className="dleft">
        <div className="dboard">
          
         <img
            className="profileimg"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
            alt=""
          />
          <h4>Alec Thompson</h4>
          <h5>20BEC126</h5>
          <div className="dmodules">
            <Link to="/">
              <AiFillApple />
              Courses
            </Link>
            <Link to="/attendance">
              <AiFillApple />
              Attendence
            </Link>

            <Link to="/generateSesssion">
              <AiFillApple />
              Settings
            </Link>
            <Link to="/generateSesssion" className="selected">
              <AiFillApple />
              Generate Session
            </Link>
          </div>
        </div>
      </div>
      <div className="dright">
        <div className="righsb">
          <h2>CSE department</h2>
          <h4>ATTENDANCE</h4>
          <div className="course-card-container">
            <div className="generate_session_container">
              <div className="qr">
              {qr ? <img src={qr} alt="QR Code" />: <img src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg" />}
                
              </div>
              <div className="generate_session_content">
                <h1>Scan this QR Code.</h1>
                <p>To mark your attendance</p>
                <button onClick={sessionHandler}> Start Session</button>
                <button onClick={stopSessionHandler}>End Session</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
