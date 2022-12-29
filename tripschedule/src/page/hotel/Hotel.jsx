import React  from "react";
import "./index.css";
import "./hotel-index.css";
import Footer from "../../components/tool/Footer";
// import Footer from "./hotel/hotel.index.css;"
// import "https://unicons.iconscout.com/release/v4.0.0/css/line.css";

const Hotel=()=>{
  
  // a="/img/hotel-icon/index-popular.png";


    return (
      <div id="likeBody">

        {/* <!-- 彈出篩選器modal --> */}
        <div className="filterZone-outer">
            <div className="filterZone Position-relative">
              <form className="filterBtnPosition" action="">
                <button type="submit">搜尋</button>
              </form>

              {/* <!-- 關閉 --> */}
              <div className="closeBtn" id="forClose-id"></div>

              <div className="filterPart">
                <form action="post">
                  <p>熱門篩選</p>
                  <p>
                    <input id="a01" type="checkbox" value="" />
                    <label for="a01">免費wifi</label>
                  </p>
                  <p>
                    <input id="a02" type="checkbox" value="" />
                    <label for="a02">攜帶寵物</label>
                  </p>
                  <p>
                    <input id="a03" type="checkbox" value="" />
                    <label for="a03">可以免費取消</label>
                  </p>
                  <p>
                    <input id="a04" type="checkbox" value="" />
                    <label for="a04">浴缸</label>
                  </p>
                </form>
              </div>
              <div className=" filterPart-36">
                <p>篩選地區</p>
                {/* <!-- 包地區的表 --> */}
                <div>
                  <div>
                    <p>
                      <input id="d01" type="checkbox" value="" />
                      <label for="d01">足立區</label>
                    </p>
                    <p>
                      <input id="d02" type="checkbox" value="" />
                      <label for="d02">文京區</label>
                    </p>
                    <p>
                      <input id="d03" type="checkbox" value="" />
                      <label for="d03">千代田區</label>
                    </p>
                    <p>
                      <input id="d04" type="checkbox" value="" />
                      <label for="d04">中央區</label>
                    </p>
                    <p>
                      <input id="d05" type="checkbox" value="" />
                      <label for="d05">江戶川區</label>
                    </p>
                    <p>
                      <input id="d06" type="checkbox" value="" />
                      <label for="d06">板橋區</label>
                    </p>
                    <p>
                      <input id="d07" type="checkbox" value="" />
                      <label for="d07">葛飾區</label>
                    </p>
                    <p>
                      <input id="d08" type="checkbox" value="" />
                      <label for="d08">江東區</label>
                    </p>
                    <p>
                      <input id="d09" type="checkbox" value="" />
                      <label for="d09">港區</label>
                    </p>
                    <p>
                      <input id="d10" type="checkbox" value="" />
                      <label for="d10">目黑區</label>
                    </p>
                    <p>
                      <input id="d11" type="checkbox" value="" />
                      <label for="d11">中野區</label>
                    </p>
                  </div>
                  <div>
                    <p>
                      <input id="d12" type="checkbox" value="" />
                      <label for="d12">練馬區</label>
                    </p>
                    <p>
                      <input id="d13" type="checkbox" value="" />
                      <label for="d13">大田區</label>
                    </p>
                    <p>
                      <input id="d14" type="checkbox" value="" />
                      <label for="d14">世田谷區</label>
                    </p>
                    <p>
                      <input id="d15" type="checkbox" value="" />
                      <label for="d15">澀谷區</label>
                    </p>
                    <p>
                      <input id="d16" type="checkbox" value="" />
                      <label for="d16">品川區</label>
                    </p>
                    <p>
                      <input id="d17" type="checkbox" value="" />
                      <label for="d17">新宿區</label>
                    </p>
                    <p>
                      <input id="d18" type="checkbox" value="" />
                      <label for="d18">杉並區</label>
                    </p>
                    <p>
                      <input id="d19" type="checkbox" value="" />
                      <label for="d19">墨田區</label>
                    </p>
                    <p>
                      <input id="d20" type="checkbox" value="" />
                      <label for="d20">台東區</label>
                    </p>
                    <p>
                      <input id="d21" type="checkbox" value="" />
                      <label for="d21">豐島區</label>
                    </p>
                    <p>
                      <input id="d22" type="checkbox" value="" />
                      <label for="d22">北區</label>
                    </p>
                  </div>
                </div>
              </div>
              <div className="filterPart">
                <p>篩選價格</p>
              </div>
              <div className="filterPart">
                <p>選擇設施</p>
                <form action="">
                  <p>
                    <input id="equip01" type="checkbox" value="" />
                    <label for="equip01">停車</label>
                  </p>
                  <p>
                    <input id="equip02" type="checkbox" value="" />
                    <label for="equip02">SPA</label>
                  </p>
                  <p>
                    <input id="equip03" type="checkbox" value="" />
                    <label for="equip03">廚房</label>
                  </p>
                  <p>
                    <input id="equip04" type="checkbox" value="" />
                    <label for="equip04">免費無線上網</label>
                  </p>
                  <p>
                    <input id="equip05" type="checkbox" value="" />
                    <label for="equip05">游泳池</label>
                  </p>
                  <p>
                    <input id="equip06" type="checkbox" value="" />
                    <label for="equip06">寵物友善</label>
                  </p>
                  <p>
                    <input id="equip07" type="checkbox" value="" />
                    <label for="equip07">洗衣機</label>
                  </p>
                  <p>
                    <input id="equip08" type="checkbox" value="" />
                    <label for="equip08">健身房</label>
                  </p>
                </form>
              </div>
            </div>
          </div>



        {/* 放背景圖 */}
        <div id="indexContext">
          <div id="contextBG">
            <div id="greenFilter">
              <div className="contextArea">
                <div id="indexTitle">
                  <p>Exploring</p>
                  <p>Your Ideal Accommodation</p>
                </div>

                {/* <!-- 搜尋欄位 --> */}
                <div id="btnArea">
                  {/* <!-- 你好 --> */}
                  <input
                    id="searchBar"
                    type="search"
                    placeholder="東京王子飯店"
                  />
                  <button id="submitBtn" type="submit">
                    搜尋
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- 目前搜尋提示 --> */}
          <div className="reminderZone">
            <p>目前行程</p>
            <div className="currentTripName">五天四夜春季東京之旅</div>
            <p>日期:</p>
            <div>
              <span>2023/01/16</span>到<span>2023/01/20</span>
            </div>
          </div>

          
        </div>
        {/* 結束此*/}
        {/* //下一層 */}

        {/* 飯店篩選器 */}
        <div id="filterZone">
          {/* <!-- 這個不是彈出視窗，彈出視窗是class --> */}
          <div className="filterPart part1">
            <p className="filterTitle">選擇</p>
            <p className="filterTitle">你的</p>
            <p className="filterTitle">飯店</p>
          </div>

          <div className="filterPart padding-narrow">
            {/* <!-- 彈出按鈕 --> */}
            <div className="btnForJS">
              <p className="filterBtn ">人氣類別</p>
              <img
                className="filterIcon"
                src="/img/hotel-icon/index-popular.png"
                alt="OK"
              />
            </div>
          </div>

          <div className="filterPart padding-narrow">
            <div className="btnForJS">
              <p className="filterBtn">選擇區域</p>
              <img
                className="filterIcon"
                src="/img/hotel-icon/index-district.png"
                alt=""
              />
            </div>
          </div>

          <div className="filterPart padding-narrow">
            <div className="btnForJS">
              <p className="filterBtn">篩選價格</p>
              <img
                className="filterIcon"
                src="/img/hotel-icon/index-price.png"
                alt=""
              />
            </div>
          </div>

          <div className="filterPart padding-narrow">
            <div className="btnForJS">
              <p className="filterBtn">選擇設施</p>
              <img
                className="filterIcon"
                src="/img/hotel-icon/index-facilities.png"
                alt="OK"
              />
            </div>
          </div>
        </div>

        {/* 主要標題 */}
        <div className="recommendationTitle">
          <p>為您推薦</p>
          <p>精心為您推薦所有用戶近期的熱門住宿安排</p>
        </div>

        {/* <!-- 總排名區 --> */}
        <div className="optionZone">
          {/* <!-- 飯店卡01 --> */}
          <div className="hotelCard">
            {/* <!-- 照片區 --> */}
            <div className="imageZone">
              <div className="hotelImage">
                <img src="/img/hotel_img/hotel01.jpg" alt="" />
              </div>
              <div className="clickForCheck">點選查看</div>
            </div>
            {/* <!-- 描述區 --> */}
            <div className="hotelDes">
              <p className="hotelText hotelTitle">東京xx酒店</p>
              <p className="ntd">NT$</p>
              <p className="ntd ">
                7,456 <span>/晚</span>
              </p>
            </div>
          </div>

          {/* <!-- 飯店卡02 --> */}
          <div className="hotelCard">
            {/* <!-- 照片區 --> */}
            <div className="imageZone">
              <div className="hotelImage">
                <img src="/img/hotel_img/hotel01.jpg" alt="" />
              </div>
              <div className="clickForCheck">點選查看</div>
            </div>
            {/* <!-- 描述區 --> */}
            <div className="hotelDes">
              <p className="hotelText hotelTitle">東京xx酒店</p>
              <p className="ntd">NT$</p>
              <p className="ntd ">
                7,456 <span>/晚</span>
              </p>
            </div>
          </div>

          {/* <!-- 飯店卡03 --> */}
          <div className="hotelCard">
            {/* <!-- 照片區 --> */}
            <div className="imageZone">
              <div className="hotelImage">
                <img src="/img/hotel_img/hotel01.jpg" alt="" />
              </div>
              <div className="clickForCheck">點選查看</div>
            </div>

            {/* <!-- 描述區 --> */}
            <div className="hotelDes">
              <p className="hotelText hotelTitle">東京xx酒店</p>
              <p className="ntd">NT$</p>
              <p className="ntd ">
                7,456 <span>/晚</span>
              </p>
            </div>
          </div>

          {/* <!-- 飯店卡04 --> */}
          <div className="hotelCard">
            {/* <!-- 照片區 --> */}
            <div className="imageZone">
              <div className="hotelImage">
                <img src="/img/hotel_img/hotel01.jpg" alt="" />
              </div>
              <div className="clickForCheck">點選查看</div>
            </div>
            {/* <!-- 描述區 --> */}
            <div className="hotelDes">
              <p className="hotelText hotelTitle">東京xx酒店</p>
              <p className="ntd">NT$</p>
              <p className="ntd ">
                7,456 <span>/晚</span>
              </p>
            </div>
          </div>
        </div>

        {/* 主要標題 */}
        <div className="recommendationTitle">
          <p>推薦與您行程相近的住宿</p>
          <p>就近尋找靠近您安排行程的住宿來源</p>
        </div>

        {/* <!-- 總排名區 --> */}
        <div className="optionZone">
          {/* <!-- 飯店卡01 --> */}
          <div className="hotelCard">
            {/* <!-- 照片區 --> */}
            <div className="imageZone">
              <div className="hotelImage">
                <img src="/img/hotel_img/hotel01.jpg" alt="" />
              </div>
              <div className="clickForCheck">點選查看</div>
            </div>
            {/* <!-- 描述區 --> */}
            <div className="hotelDes">
              <p className="hotelText hotelTitle">東京xx酒店</p>
              <p className="ntd">NT$</p>
              <p className="ntd ">
                7,456 <span>/晚</span>
              </p>
            </div>
          </div>

          {/* <!-- 飯店卡02 --> */}
          <div className="hotelCard">
            {/* <!-- 照片區 --> */}
            <div className="imageZone">
              <div className="hotelImage">
                <img src="/img/hotel_img/hotel01.jpg" alt="" />
              </div>
              <div className="clickForCheck">點選查看</div>
            </div>
            {/* <!-- 描述區 --> */}
            <div className="hotelDes">
              <p className="hotelText hotelTitle">東京xx酒店</p>
              <p className="ntd">NT$</p>
              <p className="ntd ">
                7,456 <span>/晚</span>
              </p>
            </div>
          </div>

          {/* <!-- 飯店卡03 --> */}
          <div className="hotelCard">
            {/* <!-- 照片區 --> */}
            <div className="imageZone">
              <div className="hotelImage">
                <img src="/img/hotel_img/hotel01.jpg" alt="" />
              </div>
              <div className="clickForCheck">點選查看</div>
            </div>

            {/* <!-- 描述區 --> */}
            <div className="hotelDes">
              <p className="hotelText hotelTitle">東京xx酒店</p>
              <p className="ntd">NT$</p>
              <p className="ntd ">
                7,456 <span>/晚</span>
              </p>
            </div>
          </div>

          {/* <!-- 飯店卡04 --> */}
          <div className="hotelCard">
            {/* <!-- 照片區 --> */}
            <div className="imageZone">
              <div className="hotelImage">
                <img src="/img/hotel_img/hotel01.jpg" alt="" />
              </div>
              <div className="clickForCheck">點選查看</div>
            </div>
            {/* <!-- 描述區 --> */}
            <div className="hotelDes">
              <p className="hotelText hotelTitle">東京xx酒店</p>
              <p className="ntd">NT$</p>
              <p className="ntd ">
                7,456 <span>/晚</span>
              </p>
            </div>
          </div>
        </div>

        <div className="nav"></div>

        <Footer />
      </div>
    );
  
}

export default Hotel;
