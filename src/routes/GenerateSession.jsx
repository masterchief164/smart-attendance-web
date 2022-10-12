import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import '../stylesheets/GenerateSession.css'
import { UserContext } from '../utils/UserContext.jsx';
import { useNavigate } from "react-router-dom";
import randomNumber from 'random-number';
import {getSession} from "../Api/Data";
const GenerateSession = () => {
    let navigate = useNavigate();
  const [user] = React.useContext(UserContext);


    const [qr, setQr] = useState(null)
    var options = {
      min:  10000000
    , max:  999999999
    , integer: true
    }
    const generateQR = async (sessionId) => {
      const data = {
        session_id: sessionId,
        nonce: randomNumber(options)
      }
      console.log(data);
        const text=JSON.stringify(data)
      try {
        setQr(await QRCode.toDataURL(text, { errorCorrectionLevel: 'H' ,version:12}))
      } catch (err) {
        console.error(err)
      }
    }
    // setInterval(generateQR, 15000);
    const [isRendered, setIsRendered] = useState(false)
    useEffect(() => {
      setIsRendered(true)
    }, [])

    useEffect(() => {
      // console.log(user);
      if(isRendered){if (user===null) {
        return navigate('/?error=Login-to-proceed')
      }}
    }, [isRendered])

  const sessionHandler = async () => {
      const session = await getSession(user);
        console.log(session);
        await generateQR(session.data._id);
  }

    return (
      <div className='Flex'>
        <button className='btn' onClick={sessionHandler}>Generate session</button>
        {qr&&<img src={qr} alt="QR Code" className= "imgtag"/>}
      </div>
    );
}


export default GenerateSession
