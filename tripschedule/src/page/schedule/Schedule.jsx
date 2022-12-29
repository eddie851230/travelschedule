import React, { Component } from "react";
import "./schedule.css";
import { Helmet } from "react-helmet";
// import "./openstreetmap.js";

class Schedule extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <!-- 主要網站部分 --> */}

        <div className="smainpage">
          {/* <!-- 行程表------------------------------------------- --> */}
          <div className="sschedule">
            {/* <!-- 行程表頭部 --> */}
            <div className="sscheduleHeader">
              <div className="sscheduleTitle">
                行程表:
                {/* <!-- 可以同時編輯多個行程表 --> */}
                <select name="schedule">
                  <option value="tokyo">春天東京五天四夜</option>
                  <option value="tokyo">夏天東京五天四夜</option>
                  <option value="tokyo">2020夏季奧運東京五天四夜</option>
                  <option value="tokyo">冬天東京五天四夜</option>
                </select>
                <div>日期:2022/12/18-2022/12/22</div>
              </div>
              {/* <!-- 分享連結、複製行程、編輯按鈕(點開後會出現收藏) --> */}
              <button>複製行程</button>
              <button>分享行程</button>
              <button>編輯行程</button>
            </div>
            {/* <!-- 行程表頭部結束 --> */}

            {/* <!-- 行程日期條 --> */}
            <div className="sscheduleDaybar">
              {/* <!-- 左鍵 --> */}
              <div className="sprev">
                <div></div>
              </div>

              {/* <!-- 日期 --> */}
              <div>
                <div>
                  12月17日
                  <br />
                  Day<span> 1 </span>
                </div>
              </div>
              <div>
                <div>
                  12月18日
                  <br />
                  Day<span> 2 </span>
                </div>
              </div>
              <div>
                <div>
                  12月19日
                  <br />
                  Day<span> 3 </span>
                </div>
              </div>

              {/* <!-- 右鍵 --> */}
              <div className="snext">
                <div></div>
              </div>
            </div>
            {/* <!-- 行程日期條結束 --> */}

            {/* <!-- 行程表景點及交通------------------------------------ --> */}
            <div className="stripSpot">
              <div className="dayNum">
                Day<span> 1 </span> : 禮拜<span>一</span>
              </div>
              <div className="morning">
                {/* <!-- 飛機格 --> */}
                <div className="sairplane">
                  <img src="/img/樂桃icon.png" alt="flyicon" />
                  <div className="stext">
                    <div className="name">成田機場</div>
                    <div className="info">
                      樂桃航空 &Iota;
                      <span>12:00-13:00</span>
                    </div>
                    <div className="Addr">
                      1-1 Furugome, Narita, Chiba 282-0004日本
                    </div>
                  </div>
                  <a href="/Airticket">
                    <button>
                      查看
                      <br />
                      詳情
                    </button>
                  </a>
                </div>

                {/* <!-- 景點或飯店格 --> */}
                <div className="sspot">
                  <img src="/img/景點相片預覽(明亮).jpg" alt="" />
                  <div className="stext">
                    <div className="name">東京鐵塔</div>
                    <div className="info">
                      遊玩時間:1小時 &Iota; <span>13:00-14:00</span>
                    </div>
                    <div className="Addr">
                      1-1 Furugome, Narita, Chiba 282-0004日本
                    </div>
                  </div>
                  <a href="/spotInfo.html">
                    <button>
                      查看
                      <br />
                      詳情
                    </button>
                  </a>
                </div>
              </div>
              <div className="afternoon">
                <div className="sspot">
                  <img src="/img/景點相片預覽(暗色).jpg" alt="" />
                  <div className="stext">
                    <div className="name">東京鐵塔</div>
                    <div className="info">
                      遊玩時間:1小時 &Iota; <span>13:00-14:00</span>
                    </div>
                    <div className="Addr">
                      1-1 Furugome, Narita, Chiba 282-0004日本
                    </div>
                  </div>
                  <a href="/spotInfo.html">
                    <button>
                      查看
                      <br />
                      詳情
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- 行程表結束 --> */}
          </div>
          {/* <!-- 收藏名單 -------------------------------------------> */}
          <div className="sfavorite">
            <div className="sfavoriteTitle">收藏名單</div>
            {/* <!-- 飯店或景點選單 --> */}
            <div className="schange">
              {/* <!-- 左鍵 --> */}
              <div className="sprev">
                <div></div>
              </div>
              {/* <!-- <div>飯店</div> --> */}
              <div>景點</div>
              {/* <!-- 右鍵 --> */}
              <div className="snext">
                <div></div>
              </div>
            </div>
            <div className="slist">
              <div className="slistinfo">
                <img src="/img/景點相片預覽(明亮).jpg" alt="listimg" />
              </div>
              <img src="/img/景點相片預覽(暗色).jpg" alt="listimg" />
              <img src="/img/景點相片預覽(明亮).jpg" alt="listimg" />
              <img src="/img/景點相片預覽(暗色).jpg" alt="listimg" />
              <img src="/img/景點相片預覽(明亮).jpg" alt="listimg" />
              <img src="/img/景點相片預覽(暗色).jpg" alt="listimg" />
              <img src="/img/景點相片預覽(明亮).jpg" alt="listimg" />
              <img src="/img/景點相片預覽(暗色).jpg" alt="listimg" />
            </div>
            <div className="sclose">&times;</div>
          </div>
          {/* <!-- 收藏名單結束 --> */}

          {/* <!-- 地圖------------------------------------------------> */}
          <div id="myMap" className="mapping"></div>
          <Helmet>
            <script src="./openstreetmap.js"></script>
          </Helmet>

          
        </div>
      </div>
    );
  }
}

export default Schedule;
