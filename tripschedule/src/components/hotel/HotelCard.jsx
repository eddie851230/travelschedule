import React, { useEffect } from "react";
import "./HotelCard.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// {process.env.PUBLIC_URL+"/img/Hotel_For_SQL/A02_01.webp"}

const HotelCard = () => {
  useEffect(function () {

    axios({
      //請求方法
      // get
      // 獲取數據
      // post
      // 提交數據（表單提交+文件上傳）
      // put
      // 更新數據（將所有數據均推放到服務端）
      // patch
      // 更新數據（只將修改的數據推送到後端）
      // delete
      // 刪除數據
      method: "GET",
      //url
      url: "http://127.0.0.1:8000/schedules",
    
    }).then((response) => {
      console.log(response);
      //狀態
      // console.log(response.status);
      //字串
      // console.log(response.statusText);
      //文字
      // console.log(response.headers);
      //
      // console.log(response.data);
    });
  });

  const [hotelData, sethotelData] = useState([
    {
      name: "東京01飯店",
      stars: 3,
      price: 1234,
    },
    {
      name: "東京02飯店",
      stars: 4,
      price: 4172,
    },
    {
      name: "東京03飯店",
      stars: 2,
      price: 8596,
    },
  ]);

  return (
    <Link to="/Hotel/Detail">
      <div className="Card-hotel">
        {/* <!-- 照片區 --> */}
        <div className="zoneImage">
          <img
            src={process.env.PUBLIC_URL + "/img/Hotel_For_SQL/A03_01.webp"}
            alt=""
          />
        </div>
        {/* <!-- 描述區 --> */}
        <div className="hotelTextZone">
          {/* 中文 */}
          <p className="hotelName">{hotelData[2].name}</p>
          {/* 英文 */}
          <p className="hotelName">xxx_hotel</p>
          <p className="hotelStars">
            <span>{hotelData[2].stars}</span>顆星
          </p>
          {/* 位於 */}
          <p className="hotelStars">位於<span>xxx</span></p>
          <p className="showPrice">
            NT$&nbsp;&nbsp;<span>{hotelData[2].price}</span>/晚
          </p>

          {/* <p className="hotelText hotelTitle">東京xx酒店</p>
              <p className="ntd">NT$</p>
              <p className="ntd ">
                7,456 <span>/晚</span>
              </p> */}
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
