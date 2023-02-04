import React, { useEffect } from "react";
import { useState } from "react";
import "./searchCard.css";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useState } from 'react';
//轉跳其他頁面
// 1.引用
import { useNavigate } from "react-router-dom";

// 提取後端資料
const SearchCard = (props) => {
  // 抓關鍵字
  const key = props.keyWord;
  console.log(key);

  // 搜尋資料導入細節頁
  const navigateDetail = useNavigate();
  function GoDetail() {
    navigateDetail("/Hotel/Detail");
  }

  const [items, setItems] = useState([]);

  console.log(items);

  useEffect(() => {
    getAllHotel();
  }, []);

  const getAllHotel = () => {
    axios.get("http://127.0.0.1:8000/hotelList").then((response) => {
      console.log(response.data);

      return setItems(response.data);
    });
  };

  // 將關鍵字放入item陣列做篩選得篩選結果
  var filteredItems = items.filter((eachHotel) =>
    eachHotel.name_CH.includes(key)
  );
  // console.log(filteredItems);

  return (
    <>
      {filteredItems.map((v) => (
        <Link to={{ pathname: "/Hotel/Detail/" + v.hotel_id, state: v }}>
          <div className="cardArea">
            {/* 照片 */}

            <div id="imageZone">
              <img
                id="wherePicture"
                src={process.env.PUBLIC_URL + "/img/Hotel_For_SQL/" + v.path}
                alt=""
              />
            </div>
            {/* </Link> */}
            {/* <!-- 飯店描述 --> */}
            <div className="hotelDescription">
              <p id="hotelTitle">{v.name_CH}</p>
              <span id="hotelDetails">
                位在<span>{v.area}</span>
              </span>
              <span id="hotelDetails">
                評價:&nbsp;<span>{v.stars}</span>&nbsp;/5顆星
              </span>
              <p className="priceF">
                NT$&nbsp;<span>{v["min(hotels_roomtype.price_weekdays)"]}</span>
                元/晚
              </p>
            </div>

            {/* <!-- 放入收藏與行程 --> */}
            <div className="btnZone">
              {/* <button id="btnText01" className="btnStyle colorCollection">
                放入收藏
              </button> */}
              <button id="btnText02" className="btnStyle colorSchedule">
                點擊查看
              </button>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default SearchCard;
