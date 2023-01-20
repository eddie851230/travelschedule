import React, { useEffect } from "react";
import "./HotelCard.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


// {process.env.PUBLIC_URL+"/img/Hotel_For_SQL/A02_01.webp"}

// http://127.0.0.1:8000/hotel_list

const HotelCard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllHotel();
  }, []);

  const getAllHotel = () => {
    axios.get("http://127.0.0.1:8000/hotel_list").then((response) => {
      console.log(response.data);

      return setItems(response.data);
    });
  };

  console.log("p".props);
  // async function example2() {
  //   //axios 也會回傳一個promise object
  //   let axiosRes = await axios.get("http://127.0.0.1:8000/hotel_list");
  //   // console.log(axiosRes.data[0].area);
  //   const Ch_Name = axiosRes.data.name_CH;
  //   const En_Name = axiosRes.data.name_EN;
  // }
  // example2()

  console.log("items", items);

  // 解決價錢顯示出錯問題
  // const priceItems = items.'$min(hotels_roomtype.price_weekdays)'
  // console.log(priceItems)

  //處理出現在前端畫面的陣列物件數量
  const newItems = items.slice(0, 4); //顯示4個

  // 使用陣列的forEach()方法

  return (
    <>
      {newItems.map((v) => (
        <Link to="/Hotel/Detail" >
          <div className="Card-hotel">
            {/* <!-- 照片區 --> */}
            <div className="zoneImage">
              <img
                src={process.env.PUBLIC_URL + "/img/Hotel_For_SQL/" + v.path}
                alt="我很棒棒"
              />
            </div>
            {/* <!-- 描述區 --> */}
            <div className="hotelTextZone">
              {/* 中文 */}
              <p className="hotelName overFlowHandel">{v.name_CH}</p>

              {/* 英文 */}
              <p className="hotelName-EN">{v.name_EN}</p>

              {/* 評價 */}
              <p className="hotelStars marginTop38">
                <span>{v.stars}</span>顆星
              </p>

              {/* 位於 */}
              <p className="hotelStars">
                位於<span>{v.area}</span>
              </p>

              <p className="showPrice">
                NT$&nbsp;&nbsp;
                <span>{v["min(hotels_roomtype.price_weekdays)"]}</span>/晚
                {/* <span>{v.'$min(hotels_roomtype.price_weekdays)'}</span>/晚 */}
                {/* <span>{v.'$min(hotels_roomtype.price_weekdays)'}</span>/晚 */}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
  // 測試
  // (items.length === 0) ? <p>Loading...</p> :  items.map( (item)=>{
  //   return <p>{item.name_CH}</p>
  //   })

  // <div>
  //   {items.map((item)=>{
  //     return <p>{item.name_CH}</p>
  //   })}
  // </div>

  // -------------------------------------
  // {items.map(()=>{

  // })}
};

export default HotelCard;
