import React from 'react';
import './searchCard.css';
import{Link} from 'react-router-dom';
// import { useState } from 'react';

const SearchCard = () => {
  // 建立飯店變數:
  const Hotelinfo = [
    {tittle:"東京OO飯店",
    address:"新宿區"},
    {cost:'7,456元'} 
  ]
//  const [Hotelinfo,setHotelinfo] = useState([
//   {tittle:"東京OO飯店"},
//   {address:"新宿區"},
//   {cost:'7,456元'}
// ])

  return (  
    <div className="cardArea">
      {/* 照片 */}
      <Link to="/Hotel/Detail">
      <div className="imageZone">
        <img src={process.env.PUBLIC_URL+"/img/Hotel_For_SQL/A02_01.webp"} alt=""/>
      </div>
      </Link>
      {/* <!-- 飯店描述 --> */}
      <div className="hotelDescription">

        <p className="hotelTitle">{Hotelinfo[0].tittle}</p>
        <span>位於<span>新宿區</span></span>
        <p className="priceF">NT$ <span>7,456元</span>/一晚</p>
      </div>
      {/* <!-- 放入收藏與行程 --> */}
      <div className="btnZone">

        <button className="btnStyle colorCollection">放入收藏</button>
        <button className="btnStyle colorSchedule">安排此行程</button>
      </div>
    </div>
    
  )
}

export default SearchCard