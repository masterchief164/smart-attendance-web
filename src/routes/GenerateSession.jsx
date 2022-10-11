import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import '../stylesheets/GenerateSession.css'
import { UserContext } from '../utils/UserContext.jsx';
import { useNavigate } from "react-router-dom";
import randomNumber from 'random-number';
const GenerateSession = () => {
    let navigate = useNavigate();
  const [user] = React.useContext(UserContext);
  
  
    const [qr, setQr] = useState(null)
    var options = {
      min:  10000000
    , max:  999999999
    , integer: true
    }
    const generateQR = async () => {
      const data = {
        session_id: randomNumber(options),
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
    return (
      <div className='Flex'>
        <button className='btn' onClick={async()=>{await generateQR()}}>Generate session</button>
        {qr&&<img src={qr}className= "imgtag"/>}
      </div>
    );
}


export default GenerateSession