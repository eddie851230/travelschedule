import React , { useEffect, useState } from 'react'
import Footer from "../../components/tool/Footer";
import RoomCard from '../../components/hotel/RoomCard';
import HotelCard from '../../components/hotel/HotelCard';
// import {Link} from 'react-router-dom';



import "./index.css";
import "./hotel-detail.css";

const Detail = () => { 
    window.scrollTo(0, 0);
  return (
    <div id="body">
      <div className='index'></div>

      {/* 主要內容 */}
      <div className='section'>
      {/* <!-- 包所有近期資訊 --> */}
        <div id="yourTrip">
            {/* <!-- 目的地 --> */}
             <div className="cardForm">
                <div className="iconFrame">
                    <img src={process.env.PUBLIC_URL+"/img/hotel-icon/location.png"} alt=""/>
                </div>
                <div className="cardText extraW" >
                    <p>目的地</p>
                    <p>日本，東京，東京都</p>
                </div>
            </div>
            {/* <!-- 出發日期 --> */}
            <div className="cardForm">
                <div className="iconFrame">
                    <img src={process.env.PUBLIC_URL+"/img/hotel-icon/calendar.png"} alt=""/>
                </div>
                <div className="cardText">
                    <p>出發日</p>
                    <p>2023/01/16</p>
                </div>
            </div>
            {/* <!-- 回程日期 --> */}
            <div className="cardForm">
                <div className="iconFrame">
                    <img src={process.env.PUBLIC_URL+"/img/hotel-icon/calendar.png"} alt=""/>
                </div>
                <div className="cardText">
                    <p>回程日</p>
                    <p>2023/01/20</p>
                </div>
            </div>
             {/* <!-- 人數 --> */}
             <div className="cardForm">
                <div className="iconFrame">
                    <img src={process.env.PUBLIC_URL+"/img/hotel-icon/people.png"} alt=""/>
                </div>
                <div className="cardText extraW">
                    <p>人入</p>
                    <p>大人:<span>2</span>人;小孩<span>0</span>人</p>
                </div>
            </div>
        </div>

        {/* <!-- 主要飯店資訊 --> */}
        <div className="hotelBar">
            返回上一頁
        </div>

        {/* <!-- 照片與地圖 --> */}
        <div className="picZone">
            <div className="mainPic">
                <img src={process.env.PUBLIC_URL+"/img/Hotel_for_SQL/A02_01.webp"} alt=""/>
            </div>
            <div className="otherZone">
                <div className="otherPics">
                    <div><img src={process.env.PUBLIC_URL+"/img/Hotel_for_SQL/A02_02.webp"} alt=""/></div>
                    <div><img src={process.env.PUBLIC_URL+"/img/Hotel_for_SQL/A02_03.webp"} alt=""/></div>
                    <div><img src={process.env.PUBLIC_URL+"/img/Hotel_for_SQL/A02_03.webp"} alt=""/></div>
                </div>
                <div className="mapZone">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.461701231979!2d139.6920629152591!3d35.690254380192215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd4741c62e1%3A0x51d797d25c62db8d!2sKeio%20Plaza%20Hotel!5e0!3m2!1sen!2stw!4v1671431908918!5m2!1sen!2stw" ></iframe>

                </div>
            </div>
        </div>
        {/*  */}
        <div className="hotelArea">
            {/* <!-- 文字說明 --> */}
            <div className="hotelIntro">
                <p >東京xx飯店</p>
                <p> Tokyo Hotel</p>
                <p> 評價 <span>7.8</span>/10</p>

            </div>
            <div className="roomTitle">
                選擇房型
            </div>
            <div className='allRooms'>
              <RoomCard/>
              <RoomCard/>
              <RoomCard/>
              <RoomCard/>
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
        <HotelCard/>
       
        </div>
      </div>



      <Footer/>

    </div>
  )
}

export default Detail