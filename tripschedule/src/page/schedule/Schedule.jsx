import React from "react";
import { Helmet } from "react-helmet";
import "../schedule/schedule.css";

function Schedule() {
  return (
    <>
      {/* <!-- 主要網站部分 --> */}
      <div className="scheduleMainpage">
        {/* <!-- 行程表------------------------------------------- --> */}
        <div className="schedule">
          {/* <!-- 行程表頭部 --> */}
          <div className="scheduleHeader">
            <div className="scheduleTitle">
              行程表:&nbsp;&nbsp;
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
          <div className="scheduleDaybar">
            {/* <!-- 左鍵 --> */}
            <div className="prev">
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
            <div className="next">
              <div></div>
            </div>
          </div>
          {/* <!-- 行程日期條結束 --> */}

          {/* <!-- 行程表景點及交通------------------------------------ --> */}
          <div className="tripSpot">
            <div className="dayNum">
              Day<span> 1 </span> : 禮拜<span>一</span>
            </div>
            <div className="morning">
              <div className="dayTime">上午</div>
              {/* <!-- 飛機格 --> */}
              <div className="airplane">
                <img src="/img/樂桃icon.png" alt="flyicon" />
                <div className="text">
                  <div className="name">成田機場</div>
                  <div className="info">
                    抵達時間:
                    <span>08:00</span>&Iota;<span>樂桃航空</span>
                  </div>
                  <div className="Addr">
                    1-1 Furugome, Narita, Chiba 282-0004日本
                  </div>
                </div>
                <a href="/Airticket/output/1">
                  <button>
                    查看
                    <br />
                    詳情
                  </button>
                </a>
              </div>

              {/* <!-- 景點或飯店格 --> */}
              <div className="spot">
                <img src="/img/景點相片預覽(明亮).jpg" alt="" />
                <div className="text">
                  <div className="name">東京鐵塔</div>
                  <div className="info">
                    遊玩時間: <span>1小時</span>
                  </div>
                  <div className="Addr">
                    1-1 Furugome, Narita, Chiba 282-0004日本
                  </div>
                </div>
                <a href="/Spot">
                  <button>
                    查看
                    <br />
                    詳情
                  </button>
                </a>
              </div>
            </div>
            <div className="afternoon">
              <div className="dayTime">下午</div>
              <div className="spot">
                <img src="/img/景點相片預覽(暗色).jpg" alt="" />
                <div className="text">
                  <div className="name">東京鐵塔</div>
                  <div className="info">
                    遊玩時間: <span>1小時</span>
                  </div>
                  <div className="Addr">
                    1-1 Furugome, Narita, Chiba 282-0004日本
                  </div>
                </div>
                <a href="/Spot">
                  <button>
                    查看
                    <br />
                    詳情
                  </button>
                </a>
              </div>
            </div>
            <div className="evening">
              <div className="dayTime">晚間</div>
            </div>
          </div>

          {/* <!-- 行程表結束 --> */}
        </div>
        {/* <!-- 收藏名單 -------------------------------------------> */}
        <div className="favorite">
          <div className="favoriteTitle">收藏名單</div>
          {/* <!-- 飯店或景點選單 --> */}
          <div className="change">
            {/* <!-- 左鍵 --> */}
            <div className="prev">
              <div></div>
            </div>
            {/* <!-- <div>飯店</div> --> */}
            <div>景點</div>
            {/* <!-- 右鍵 --> */}
            <div className="next">
              <div></div>
            </div>
          </div>
          <div className="list">
            <div className="listinfo">
              <img src="/img/景點相片預覽(明亮).jpg" alt="listimg" />
              <div className="text">東京鐵塔</div>
            </div>
            <div className="listinfo">
              <img src="/img/景點相片預覽(明亮).jpg" alt="listimg" />
              <div className="text">東京鐵塔</div>
            </div>
            <div className="listinfo">
              <img src="/img/景點相片預覽(明亮).jpg" alt="listimg" />
              <div className="text">東京鐵塔</div>
            </div>
            <div className="listinfo">
              <img src="/img/景點相片預覽(明亮).jpg" alt="listimg" />
              <div className="text">東京鐵塔</div>
            </div>
            <div className="listinfo">
              <img src="/img/景點相片預覽(明亮).jpg" alt="listimg" />
              <div className="text">東京鐵塔</div>
            </div>
            <div className="listinfo">
              <img src="/img/景點相片預覽(明亮).jpg" alt="listimg" />
              <div className="text">東京鐵塔</div>
            </div>
            <div className="listinfo">
              <img src="/img/景點相片預覽(明亮).jpg" alt="listimg" />
              <div className="text">東京鐵塔</div>
            </div>
            <div className="listinfo">
              <img src="/img/景點相片預覽(明亮).jpg" alt="listimg" />
              <div className="text">東京鐵塔</div>
            </div>
            <div className="listinfo">
              <img src="/img/景點相片預覽(明亮).jpg" alt="listimg" />
              <div className="text">東京鐵塔</div>
            </div>
          </div>
          <div className="close">&times;</div>
        </div>
        {/* <!-- 收藏名單結束 --> */}

        {/* <!-- 地圖------------------------------------------------> */}
        <div id="myMap" className="mapping"></div>
        <Helmet>
          <script src="./openstreetmap.js"></script>
        </Helmet>
      </div>
    </>
  );
}

export default Schedule;