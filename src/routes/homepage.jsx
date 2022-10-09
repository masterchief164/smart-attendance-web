import React, { useEffect, useState } from 'react';
import '../stylesheets/Homepage.css';

import { UserContext } from '../utils/UserContext';
import QRCode from 'qrcode'
const Homepage=()=> {
  useEffect(() => {
    const url = new URLSearchParams(new URL(window.location.href).search)
  const error=url.get('error');
  if(error){window.alert(error)}
  }, [])
  
  const [qr, setQr] = useState(null)
  const generateQR = async (text) => {
    try {
      setQr(await QRCode.toDataURL(text, { errorCorrectionLevel: 'L' ,version:8}))
    } catch (err) {
      console.error(err)
    }
  }
  
  return (
    <>
      Hello World
     
      
    </>
  );
}

export default Homepage;
