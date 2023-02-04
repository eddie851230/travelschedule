import React, { useEffect, useState } from "react";
import Footer from "../../components/tool/Footer";
import RoomCard from "../../components/hotel/RoomCard";
import HotelCard from "../../components/hotel/HotelCard";
import "./index.css";
import "./hotel-detail.css";
import axios from "axios";
// 傳資料useParams
import { useParams } from "react-router-dom";

//轉跳其他頁面
// 1.引用
// import { useNavigate } from "react-router-dom";

// import {Link} from 'react-router-dom';

const Detail = (props) => {
  // 抓資料
  // const {CH_NAME, EN_NAME, STARS, AREAS}=(props.name_CH)
  let params = useParams();
  const [hotelImg, setHotelImg] = useState([]);
  const [main, setMain] = useState([]);
  const [side, setSide] = useState([]);
  const [hotelInfo, setHotelInfo] = useState([]);
  const [hotelFac, setHotelFac] = useState([]);
  // 偵測加在中
  const [loading, setLoading] = useState(true);
  // 全選按鈕

  useEffect(() => {
    // alert("1");
    axios
      .get("http://127.0.0.1:8000/hotelsearch/" + params.id)
      .then((response) => {
        // console.log(response.data);
        // 加入整個圖片array
        setHotelImg(response.data);
        // 拉出主圖片
        setMain(response.data[0]);
        // 拉出附圖片
        let newImg = hotelImg.filter((r, i) => i !== 0);
        setSide(newImg);
        // console.log("side", side);
        setLoading(false);
      });

    axios
      .get("http://127.0.0.1:8000/hotelInfo/" + params.id)
      .then((response) => {
        // console.log(response.data[0].map_url);
        // console.log(response.data[0].map_url);
        return setHotelInfo(response.data[0]);
      });

    axios
      .get("http://127.0.0.1:8000/hotelFac/" + params.id)
      .then((response) => {
        console.log(response.data);
        return setHotelFac(response.data);
      });
  }, [params, loading]);
  // console.log("params", params.idf);
  // const hotelid = params.idf;
  //
  window.scrollTo(0, 0);

  // 放入收藏夾視窗
  const [putCollection, setPutCollection] = useState(false);
  // 排入此行程視窗
  const [putThisPlan, setputThisPlan] = useState(false);

  return (
    <>
      {/* 01放入收藏夾彈出框 */}
      <div
        className="putCollectionBtn"
        style={{ visibility: putCollection ? "visible" : "hidden" }}
      >
        <p>已放入收藏夾</p>
        <button onClick={() => setPutCollection(!putCollection)}>確認</button>
      </div>

      {/* 02放入此行程彈出框 */}
      <div
        className="putCollectionBtn"
        id="collectWindow"
        // putThisPlanBtn
        style={{ visibility: putThisPlan ? "visible" : "hidden" }}
      >
        <p>目前行程</p>
        <p>請問要安排哪幾晚?</p>
        <p>
          第
          <input type="text" className="nightNum" />
          晚&nbsp;&nbsp;到&nbsp;&nbsp;第
          <input type="text" className="nightNum" />晚
        </p>

        <button onClick={() => setputThisPlan(!putThisPlan)}>確認</button>
      </div>

      <div id="body">
        <div id="detailBG">
          <img
            src={process.env.PUBLIC_URL + "/img/hotel_img/detailBG.jpg"}
            alt=""
          />
        </div>

        {/* 主要內容 */}
        <div className="section">
          {/* <!-- 包所有近期資訊 --> */}
          <div id="yourTrip">
            {/* <!-- 目的地 --> */}
            <div className="cardForm">
              <div className="iconFrame">
                <img
                  src={process.env.PUBLIC_URL + "/img/hotel-icon/location.png"}
                  alt=""
                />
              </div>
              <div className="cardText extraW">
                <p>目的地</p>
                <p>日本，東京，東京都</p>
              </div>
            </div>
            {/* <!-- 出發日期 --> */}
            <div className="cardForm">
              <div className="iconFrame">
                <img
                  src={process.env.PUBLIC_URL + "/img/hotel-icon/calendar.png"}
                  alt=""
                />
              </div>
              <div className="cardText">
                <p>出發日</p>
                <p>2023/02/10</p>
              </div>
            </div>
            {/* <!-- 回程日期 --> */}
            <div className="cardForm">
              <div className="iconFrame">
                <img
                  src={process.env.PUBLIC_URL + "/img/hotel-icon/calendar.png"}
                  alt=""
                />
              </div>
              <div className="cardText">
                <p>回程日</p>
                <p>2023/02/12</p>
              </div>
            </div>
            {/* <!-- 人數 --> */}
            <div className="cardForm">
              <div className="iconFrame">
                <img
                  src={process.env.PUBLIC_URL + "/img/hotel-icon/people.png"}
                  alt=""
                />
              </div>
              <div className="cardText extraW">
                <p>行程表</p>
                <p>東京古蹟三天兩夜</p>
              </div>
            </div>
          </div>

          {/* <!-- 主要飯店資訊 --> */}
          <div className="hotelBar">返回上一頁</div>

          {/* <!-- 照片與地圖 --> */}
          <div className="picZone">
            <div className="mainPic">
              <img
                src={process.env.PUBLIC_URL + "/img/Hotel_for_SQL/" + main.path}
                alt=""
              />
            </div>

            <div className="otherZone">
              <div className="otherPics">
                {loading && <div>加載中</div>}
                {!loading &&
                  side.map((side) => {
                    return (
                      <div>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/img/Hotel_for_SQL/" +
                            side.path
                          }
                          alt={side.id}
                        />
                      </div>
                    );
                  })}
              </div>
              {/* 地圖區 */}
              <div className="mapZone">
                <iframe src={hotelInfo.map_url}></iframe>

                {/* <iframe src={hotelInfo.map_url}></iframe> */}
                {/* {hotelInfo.map_url} */}
              </div>
            </div>
          </div>
          {/*  */}
          <div className="hotelArea">
            {/* <!-- 文字說明 --> */}
            <div className="hotelIntro">
              <p id="chineseTitle"> {hotelInfo.name_CH}</p>
              <p className="subStyles"> {hotelInfo.name_EN}</p>
              <p className="subStyles"> 地址:&nbsp;{hotelInfo.address}</p>
              <p className="subStyles"> {hotelInfo.area}</p>
              <p className="subStyles">
                飯店星級: <span>{hotelInfo.stars}&nbsp;顆星</span>
              </p>
              <p className="subStyles">
                提供語言:&nbsp;
                {hotelInfo.ch === 1 && <span>中文、</span>}
                {hotelInfo.jp === 1 && <span>日文、</span>}
                {hotelInfo.en === 1 && <span>英文</span>}
              </p>
              <p>提供設施</p>
              {hotelFac.map((fac) => (
                <p>{fac.facilities_id}</p>
              ))}
            </div>
            <div className="roomTitle">選擇房型</div>
            <div className="allRooms">
              <RoomCard
                //放入收藏
                setPutCollection={setPutCollection}
                putCollection={putCollection}
                // 放入此行程
                putThisPlan={putThisPlan}
                setputThisPlan={setputThisPlan}
              />
            </div>
          </div>

          {/* --------------------------------------------- */}

          {/* <!-- 其他飯店推薦 --> */}
          {/* <!-- 與主頁共用!!!! --> */}
          {/* <!-- 標題 --> */}
          <div className="recommendationTitle">
            <p>為您推薦</p>
            <p>精心為您推薦所有用戶近期的熱門住宿安排</p>
          </div>

          {/* <!-- 總排名區 --> */}
          <div className="optionZone">
            {/* <!-- 飯店卡 --> */}
            <HotelCard />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Detail;
