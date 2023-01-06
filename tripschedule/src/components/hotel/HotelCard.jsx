import React from 'react';
import "./HotelCard.css";
import {Link} from 'react-router-dom';
import { useState } from 'react';
// {process.env.PUBLIC_URL+"/img/Hotel_For_SQL/A02_01.webp"}


const HotelCard = () => {

  const [hotelData, sethotelData] = useState([
    {
      name:'東京01飯店',
      stars:3,
      price:1234,
    },
    {
      name:'東京02飯店',
      stars:4,
      price:4172,
    },
    {
      name:'東京03飯店',
      stars:2,
      price:8596,
    },
    
  ]);

  
  return ( 
  
      <Link to="/Hotel/Detail">
      <div className="Card-hotel">
            {/* <!-- 照片區 --> */}
            <div className="zoneImage">
              <img src={process.env.PUBLIC_URL+"/img/Hotel_For_SQL/A03_01.webp"} alt="" />
            </div>
            {/* <!-- 描述區 --> */}
            <div className='hotelTextZone'>
              <span className='hotelName'>{hotelData[2].name}</span>
              <p className='hotelStars'><span>{hotelData[2].stars}</span>顆星</p>
              <p className='showPrice'>NT$&nbsp;&nbsp;<span>{hotelData[2].price}</span>/晚</p>
            



              {/* <p className="hotelText hotelTitle">東京xx酒店</p>
              <p className="ntd">NT$</p>
              <p className="ntd ">
                7,456 <span>/晚</span>
              </p> */}
            </div>
      </div>
      </Link>


    
  )
}

export default HotelCard