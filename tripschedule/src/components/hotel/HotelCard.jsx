import React from 'react'
import "./HotelCard.css"
// {process.env.PUBLIC_URL+"/img/Hotel_For_SQL/A02_01.webp"}

const HotelCard = () => {
  return (
  
      
      <div className="Card-hotel">
            {/* <!-- 照片區 --> */}
            <div className="zoneImage">
              <img src={process.env.PUBLIC_URL+"/img/Hotel_For_SQL/A03_01.webp"} alt="" />
            </div>
            {/* <!-- 描述區 --> */}
            <div className='hotelTextZone'>
              <span className='hotelName'>東京xx酒店</span>
              <p className='hotelStars'><span>3</span>顆星</p>
              <p className='showPrice'>NT$&nbsp;&nbsp;<span>4567</span>/晚</p>
            



              {/* <p className="hotelText hotelTitle">東京xx酒店</p>
              <p className="ntd">NT$</p>
              <p className="ntd ">
                7,456 <span>/晚</span>
              </p> */}
            </div>
      </div>


    
  )
}

export default HotelCard