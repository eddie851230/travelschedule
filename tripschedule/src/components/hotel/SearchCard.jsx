import React, { useEffect } from 'react';
import { useState } from "react";
import './searchCard.css';
import{Link} from 'react-router-dom';
import axios from 'axios';
// import { useState } from 'react';

const SearchCard = () => {

  // 提取後端資料
  const[items,setItems] = useState([]);

  useEffect(()=>{
    getAllHotel();
  },[]);

  const getAllHotel = ()=>{
    axios.get('http://127.0.0.1:8000/hotel_list')
      .then((response)=>{
        console.log(response.data);

        return setItems(response.data);
      });
  };


  return (  
    <>
      {items.map((v)=>(
          <div className="cardArea">
          {/* 照片 */}
          <Link to="/Hotel/Detail">
          <div id="imageZone">
            <img id="wherePicture" src={process.env.PUBLIC_URL+"/img/Hotel_For_SQL/"+ v.path} alt=""/>
          </div>
          </Link>
          {/* <!-- 飯店描述 --> */}
          <div className="hotelDescription">
    
            <p id="hotelTitle">{v.name_CH}</p>
            <span id="hotelDetails">位在<span>{v.area}</span></span>
            <span id="hotelDetails">評價:&nbsp;<span>{v.stars}</span>&nbsp;/5顆星</span>
            <p className="priceF">NT$&nbsp;<span>{v["min(hotels_roomtype.price_weekdays)"]}</span>元/晚</p>
          </div>
          {/* <!-- 放入收藏與行程 --> */}
          <div className="btnZone">
    
            <button id='btnText01' className='btnStyle colorCollection'>放入收藏</button>
            <button id='btnText02' className='btnStyle colorSchedule'>安排行程</button>
          </div>
        </div>
      ))}
    </>


    
    
  )
}

export default SearchCard