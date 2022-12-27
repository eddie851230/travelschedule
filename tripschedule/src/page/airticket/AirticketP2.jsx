import React, { Component } from 'react';
import "../airticket/airplanePage2.css";
class AirticketP2 extends Component {
    state = {  } 
    render() { 
        return (<>
        {/* <!-- 機票分頁開頭 --> */}
    <div className="pageHeader"></div>
    {/* <!-- 版權:https://commons.wikimedia.org/wiki/File:Lake_Kawaguchiko_Sakura_Mount_Fuji_4.JPG --> */}
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Lake_Kawaguchiko_Sakura_Mount_Fuji_4.JPG"
        alt="mainpic" id="mainpic" />

    {/* <!-- 主要頁面 --> */}
    <main>

        {/* <!-- 最終結果畫面 --> */}
        <div className="finaloutput">
            {/* <!-- 去程----- --> */}
            <div className="finaldepartureSpot">去程:&nbsp;
                出發地點:<span>臺灣桃園國際機場(TPE)</span>&nbsp;&nbsp;
                抵達地點:<span>成田國際機場(NRT)</span>
            </div>
 
            <div className="finaloutputDiv">
                <img src="/img/樂桃icon.png" alt="" />

                <div className="finalflyingTime">
                    出發時間:<span>12:00AM</span>&nbsp;-&nbsp;
                    抵達時間:<span>03:00AM</span>
                </div>

                <div className="finalprice">
                    價格:&nbsp;<span>12345</span>&nbsp;NTD
                </div>

                <a href="/"><img src="/img/agoda-logo.png" alt="agoda-logo"/><button>點擊連結</button></a>


            </div>

            {/* <!-- 返程----- --> */}
            <div className="finalreturnSpot">去程:&nbsp;
                出發地點:<span>成田國際機場(NRT)</span>&nbsp;&nbsp;
                抵達地點:<span>臺灣桃園國際機場(TPE)</span>
            </div>

            <div className="finaloutputDiv">
                <img src="/img/樂桃icon.png" alt="" />

                <div className="finalflyingTime">
                    出發時間:<span>12:00AM</span>&nbsp;-&nbsp;
                    抵達時間:<span>03:00AM</span>
                </div>

                <div className="finalprice">
                    價格:&nbsp;<span>12345</span>&nbsp;NTD
                </div>

                <a href="/"><img src="/img/agoda-logo.png" alt="agoda-logo"/><button>點擊連結</button></a>


            </div>

        </div>

    </main>
    <div class="mutipleButton">
        <a href={"/Airticket/return/"}><button>返回</button></a>
        <a href="/Spot"><button>下一步</button></a>
    </div>
        </>);
    }
}
 
export default AirticketP2;