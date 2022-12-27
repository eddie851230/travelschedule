import React, { Component } from 'react';
import "../airticket/airplanePage.css";
class AirticketP1 extends Component {
    state = {}
    render() {
        return (
            <>
                {/* <!-- 機票分頁開頭 --> */}
                <div className="pageHeader"></div>
                {/* <!-- 版權:https://commons.wikimedia.org/wiki/File:Lake_Kawaguchiko_Sakura_Mount_Fuji_4.JPG --> */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Lake_Kawaguchiko_Sakura_Mount_Fuji_4.JPG" alt="mainpic" id="mainpic" />

                {/* <!-- 上方篩選器 --> */}

                <div className="airplaneFliter">
                    {/* <!-- 出發地點 --> */}
                    <label htmlFor="departureSpot">出發地點</label>
                    <select name="" id="departureSpot">
                        <option value="TPE">臺灣桃園國際機場(TPE)</option>
                        <option value="NRT">成田國際機場(NRT)</option>
                        <option value="HND">東京羽田國際機場(HND)</option>
                    </select>
                    {/* <!-- 到達地點 --> */}
                    <label htmlFor="arrivalSpot">抵達地點</label>
                    <select name="" id="arrivalSpot">
                        <option value="TPE">臺灣桃園國際機場(TPE)</option>
                        <option value="NRT">成田國際機場(NRT)</option>
                        <option value="HND">東京羽田國際機場(HND)</option>
                    </select>
                    {/* <!-- 出發日期 --> */}
                    <label htmlFor="departureDate">去程</label><input type="date" name="" id="departureDate" />
                    {/* <!-- 回程日期 --> */}
                    <label htmlFor="returnDate">回程</label><input type="date" name="" id="returnDate" />
                    {/* <!-- 人數 --> */}
                    <label htmlFor="people">人數</label><input type="number" max="8" min="1" id="people" />
                    {/* <!-- 搜尋按鈕 --> */}
                    <button>搜尋</button>
                </div>

                {/* <!-- 主要頁面 --> */}
                <div className="main">
                    {/* <!-- 旁邊導覽列 -->
      <!-- 以下input為測試，有自訂的多選框container、checkmark勿刪 --> */}

                    <div className="sideFilter">
                        <label className="container">樂桃航空
                            <input type="checkbox" name="company" value="momo" />
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    {/* <!-- 篩選結果畫面 --> */}
                    <div className="output">

                        {/* <!-- 機票詳細全展開 --> */}
                        <div className="outputDiv">
                            <img src="/img/樂桃icon.png" alt="" />
                            <div className="text">
                                <div className="flyingSpot">
                                    出發地點:<span>臺灣桃園國際機場(TPE)</span>&nbsp;&nbsp;
                                    抵達地點:<span>成田國際機場(NRT)</span>
                                </div>
                                <br />
                                <div className="price">
                                    價格:&nbsp;<span>12345</span>&nbsp;NTD
                                </div>
                            </div>

                            <button>查看詳情<div></div></button>

                            {/* <!-- 展開後畫面 --> */}
                            <div className="openDiv">
                                <div className="flyingTime">
                                    出發時間:<span>12:00AM</span>&nbsp;-&nbsp;
                                    抵達時間:<span>03:00AM</span>
                                </div>

                                <a href={"/Airticket/return"}><button>下一步</button></a>
                            </div>
                        </div>

                        {/* <!-- 粗略展開 --> */}
                        <div className="outputDiv">

                            {/* <!-- 機票詳細全展開 --> */}
                            <img src="/img/樂桃icon.png" alt="" />
                            <div className="text">
                                <div className="flyingSpot">
                                    出發地點:<span>臺灣桃園國際機場(TPE)</span>&nbsp;&nbsp;
                                    抵達地點:<span>成田國際機場(NRT)</span>
                                </div>
                                <br />
                                <div className="price">
                                    價格:&nbsp;<span>12345</span>&nbsp;NTD
                                </div>
                            </div>

                            <button>查看詳情<div></div></button>
                        </div>


                    </div>

                </div>

            </>
        );
    }
}

export default AirticketP1;