import React from 'react';
import "./RoomCard.css";


const RoomCard = () => {
  return (
    
      <div className="roomCard">
                <div className="roomPic">
                    <img src={process.env.PUBLIC_URL+"/img/Hotel_for_SQL/A03_01.webp"} alt=""/>
                </div>
                {/* <!-- 房型描述 --> */}
                <div className="desForRoom">
                  <p>豪華雙人房</p>
                  <span className="roomsOffer">提供設施:</span>
                  <ul className="offerLists">
                    <li>免費上網</li>
                    <li>免費上網</li>
                    <li>免費上網</li>
                    <li>免費上網</li>
                  </ul>
                  <p className="priceForRoom">價格<span>1234</span>/晚</p>

                </div>
                {/* 按鈕區 */}
                <div className="btnForRooms">
                  <button className="styleForBtn colorCollection">放入收藏</button>
                  <button className="styleForBtn colorSchedule">安排此行程</button>
                </div>
      </div>
    
  )
}

export default RoomCard