import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import '../stylesheets/GenerateSession.css'
import { UserContext } from '../utils/UserContext.jsx';
import { useNavigate } from "react-router-dom";
const GenerateSession = () => {
    let navigate = useNavigate();
  const [user] = React.useContext(UserContext);

  function dec2hex (dec) {
        return dec.toString(16).padStart(2, "0")
      }

      function generateId (len) {
        var arr = new Uint8Array((len || 40) / 2)
        window.crypto.getRandomValues(arr)
        return Array.from(arr, dec2hex).join('')
      }
    const [qr, setQr] = useState(null)
    const generateQR = async () => {
      const data = {
        session_id: 325252,
        nonce: 43525
      }
        const text=JSON.stringify(data)
      try {
        setQr(await QRCode.toDataURL(text, { errorCorrectionLevel: 'H' ,version:6}))
      } catch (err) {
        console.error(err)
      }
    }

    useEffect(() => {
      if (user===null) {
        return navigate('/?error=Login-to-proceed')
      }
    }, [])
    return (
      <div className='Flex'>
        <button className='btn' onClick={async()=>{await generateQR()}}>Generate session</button>
        {qr&&<img src={qr} className= "imgtag" alt={"QR code"}/>}
      </div>
    );
}


export default GenerateSession
