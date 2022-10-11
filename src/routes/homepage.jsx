import React, { useEffect, useState } from 'react';
import '../stylesheets/Homepage.css';
import '../stylesheets/home.css';
import {AiOutlineWifi,AiFillWarning,AiOutlineCalendar} from 'react-icons/ai'
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
      <div className='home_banner'>
        <div className="home_banner_heading">
          <h2>Track and manage attendance easily</h2>
          <button>Start Tracking</button>
        </div>
        <div className="home_banner_image">
          <img src="https://media.istockphoto.com/vectors/attendance-concept-businessman-holding-document-vector-flat-design-vector-id1167651240?k=20&m=1167651240&s=612x612&w=0&h=3jN8v2aA_7xIuPUiPZM0V-JLacPowcb32wCfq1ckJmg="/>
        </div>
      </div>
      <div className="home_services">
        <h2>Salient Features</h2>
        <div className="home_services_cards">
          <div>
            <h3>lorem</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis natus cumque.

            </p>
            <span><AiOutlineWifi  className='svg1'/></span>
          </div>
          <div><h3>lorem</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis natus cumque.

            </p>
            <span><AiOutlineCalendar  className='svg2'/></span>

            </div>
          <div>
          <h3>lorem</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis natus cumque.

            </p>
            <span><AiFillWarning  className='svg3'/></span>
          </div>
        </div>
        <button>Explore</button>
      </div>
     
      
    </>
  );
}

export default Homepage;
