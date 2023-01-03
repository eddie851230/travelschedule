import React from 'react'
import Footer from "../../components/tool/Footer";

import "./index.css";
import "./hotel-detail.css";

const Detail = () => {
  return (
    <div id="body">
    

      {/* 主要內容 */}
      <div className='section'>
      {/* <!-- 包所有近期資訊 --> */}
        <div id="yourTrip">
            {/* <!-- 目的地 --> */}
             <div className="cardForm">
                <div className="iconFrame">
                    <img src="/icon/location.png" alt=""/>
                </div>
                <div className="cardText extraW" >
                    <p>目的地</p>
                    <p>日本，東京，東京都</p>
                </div>
            </div>
            {/* <!-- 出發日期 --> */}
            <div className="cardForm">
                <div className="iconFrame">
                    <img src="/icon/calendar.png" alt=""/>
                </div>
                <div className="cardText">
                    <p>出發日</p>
                    <p>2023/01/16</p>
                </div>
            </div>
            {/* <!-- 回程日期 --> */}
            <div className="cardForm">
                <div className="iconFrame">
                    <img src="/icon/calendar.png" alt=""/>
                </div>
                <div className="cardText">
                    <p>回程日</p>
                    <p>2023/01/20</p>
                </div>
            </div>
             {/* <!-- 人數 --> */}
             <div className="cardForm">
                <div className="iconFrame">
                    <img src="/icon/people.png" alt=""/>
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
                <img src="/img/hotel01.jpg" alt=""/>
            </div>
            <div className="otherZone">
                <div className="otherPics">
                    <div><img src="/img/hotel02.jpg" alt=""/></div>
                    <div><img src="/img/hotel03.jpg" alt=""/></div>
                    <div><img src="/img/hotel04.jpg" alt=""/></div>
                </div>
                <div>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.461701231979!2d139.6920629152591!3d35.690254380192215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd4741c62e1%3A0x51d797d25c62db8d!2sKeio%20Plaza%20Hotel!5e0!3m2!1sen!2stw!4v1671431908918!5m2!1sen!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

                </div>
            </div>
        </div>
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
            {/* <!-- 所有房型 --> */}
            <div id="allRooms">

            <div className="roomCard">
                <div className="roomPic">
                    <img src="/img/hotel01.jpg" alt=""/>
                </div>
                {/* <!-- 房型描述 --> */}
                <div>
                    <p>豪華雙人房</p>

                </div>
            </div>
            <div className="roomCard">
                <div className="roomPic">
                    <img src="/img/hotel01.jpg" alt=""/>
                </div>
                {/* <!-- 房型描述 --> */}
                <div>
                    <p>豪華雙人房</p>

                </div>
            </div>
            <div className="roomCard">
                <div className="roomPic">
                    <img src="/img/hotel01.jpg" alt=""/>
                </div>
                {/* <!-- 房型描述 --> */}
                <div>
                    <p>豪華雙人房</p>

                </div>
            </div>
            <div className="roomCard">
                <div className="roomPic">
                    <img src="/img/hotel01.jpg" alt=""/>
                </div>
                {/* <!-- 房型描述 --> */}
                <div>
                    <p>豪華雙人房</p>

                </div>
            </div>
        </div>
        </div>

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
        <div className="hotelCard">
          {/* <!-- 照片區 --> */}
          <div className="imageZone">
            <div className="hotelImage"><img src="/img/hotel01.jpg" alt=""/></div>
            <div className="clickForCheck">點選查看</div>
          </div>
          {/* <!-- 描述區 --> */}
          <div className="hotelDes">
            <p className="hotelText hotelTitle">東京xx酒店</p>
            <p className="ntd">NT$</p>
            <p className="ntd ">7,456 <span>/晚</span></p>
          </div>
        </div>

        {/* <!-- 飯店卡 --> */}
        <div className="hotelCard">
          {/* <!-- 照片區 --> */}
          <div className="imageZone">
            <div className="hotelImage"><img src="/img/hotel01.jpg" alt=""/></div>
            <div className="clickForCheck">點選查看</div>
          </div>
          {/* <!-- 描述區 --> */}
          <div className="hotelDes">
            <p className="hotelText hotelTitle">東京xx酒店</p>
            <p className="ntd">NT$</p>
            <p className="ntd ">7,456 <span>/晚</span></p>
          </div>
        </div>

        {/* <!-- 飯店卡 --> */}
        <div className="hotelCard">
          {/* <!-- 照片區 --> */}
          <div className="imageZone">
            <div className="hotelImage"><img src="/img/hotel01.jpg" alt=""/></div>
            <div className="clickForCheck">點選查看</div>
          </div>

          {/* <!-- 描述區 --> */}
          <div className="hotelDes">
            <p className="hotelText hotelTitle">東京xx酒店</p>
            <p className="ntd">NT$</p>
            <p className="ntd ">7,456 <span>/晚</span></p>
          </div>
        </div>

        {/* <!-- 飯店卡 --> */}
        <div className="hotelCard">
          {/* <!-- 照片區 --> */}
          <div className="imageZone">
            <div className="hotelImage"><img src="/img/hotel01.jpg" alt=""/></div>
            <div className="clickForCheck">點選查看</div>
          </div>
          {/* <!-- 描述區 --> */}
          <div className="hotelDes">
            <p className="hotelText hotelTitle">東京xx酒店</p>
            <p className="ntd">NT$</p>
            <p className="ntd ">7,456 <span>/晚</span></p>
          </div>
        </div>
      </div>
      </div>



      <Footer/>

    </div>
  )
}

export default Detail