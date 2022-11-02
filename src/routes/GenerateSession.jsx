import React, {useEffect, useState} from 'react'
import QRCode from 'qrcode'
import '../stylesheets/GenerateSession.css'
import {UserContext} from '../utils/UserContext.jsx';
import {useNavigate} from "react-router-dom";

const GenerateSession = () => {
    let navigate = useNavigate();
    const [user] = React.useContext(UserContext);
    const [qr, setQr] = useState(null)
    const [isRendered, setIsRendered] = useState(false)
    const [session, setSession] = useState(null)

    window.onbeforeunload = function () {
        return () => {
            if (session) {
                // console.log("es closed")
                session.close()
            }
        }
    };
    useEffect(() => {
        setIsRendered(true)
    }, [])


    useEffect(() => {
        if(session) {
            session.onmessage = generateQR;
            // console.log("onmessage set")
        }
    }, [session]);

    useEffect(() => {
        if (isRendered) {
            if (user === null) {
                return navigate('/?error=Login-to-proceed')
            }
        }
    }, [isRendered])

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
        <div className='Flex'>
            <button className='btn' onClick={sessionHandler}>Generate session</button>
            {qr && <img src={qr} alt="QR Code" className="imgtag"/>}
            <button className='btn' onClick={stopSessionHandler}>Stop session</button>
        </div>
    );
}


export default GenerateSession
