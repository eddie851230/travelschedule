import React, { useState }  from "react";
import "./index.css";
import "./hotel-index.css";
import Footer from "../../components/tool/Footer";

// 自製元件
import HotelCard from "../../components/hotel/HotelCard";

// {process.env.PUBLIC_URL+"/img/Hotel_For_SQL/A03_01.webp"}

//引入圖片
// import closeBTN from "./img/hotel-icon/close.png"
const Hotel=()=>{
  // const [isModalVisible,setModalVisibility] = useState(true);

  // const clickForVisibility = ()={
  //   setModalVisibility(!isModalVisible);
  // }

    return (
      <div id="likeBody">
        {/* // 彈出modal */}
        <div className="filterZone-outer" 
        // style={{visibility:isModalVisible? 'visible':'hidden'}}
        >
          <div className="filterZone Position-relative">
          <form className="filterBtnPosition" action="">
            <button type="submit">搜尋</button>
          </form>

          {/* <!-- 關閉 --> */}
          <div className="closeBtn" id="forClose-id"
          ></div>

          <div className="filterPart">
            <form  className="optionFontStyle" action="post">
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
          <div className="optionFontStyle">
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
          {/* ------------------------- */}
          <div className="optionFontStyle">
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
      <div className="filterPart optionFontStyle">
        <p>選擇設施</p>
        <form action="" >
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
                    <a>搜尋</a>
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
          <div className="flexTitle">
            <p>挑選</p>
            <p>您的</p>
            <p>住宿</p>
          </div>

          {/* 熱門篩選 */}
          <div className="flexContent">
            <div className="searchBtnArea">
              <div>熱門篩選</div>
              <div className="iconForSearch">
                <img src={process.env.PUBLIC_URL+"/img/hotel-icon/index-popular.png"} alt="" />
              </div>
            </div>
          </div>
          {/* 地區 */}
          <div className="flexContent">
            <div className="searchBtnArea">
              <div>地區篩選</div>
              <div className="iconForSearch">
                <img src={process.env.PUBLIC_URL+"/img/hotel-icon/index-district.png"} alt="" />
              </div>
            </div>
          </div>
          {/* 價錢 */}
          <div className="flexContent">
            <div className="searchBtnArea">
              <div>價格範圍</div>
              <div className="iconForSearch">
                <img src={process.env.PUBLIC_URL+"/img/hotel-icon/index-price.png"} alt="" />
              </div>
            </div>
          </div>
          <div className="flexContent">
            <div className="searchBtnArea">
              <div>所有設施</div>
              <div className="iconForSearch">
                <img src={process.env.PUBLIC_URL+"/img/hotel-icon/index-facilities.png"} alt="" />
              </div>
            </div>
          </div>
          
        </div>

        {/* 主要標題 */}
        <div className="recommendationTitle">
          <p>為您推薦</p>
          <p>精心為您推薦所有用戶近期的熱門住宿安排</p>
        </div>

        {/* <!-- 總排名區 --> */}
        <div className="wid80">
          <div className="optionZone">
          
            <HotelCard/>
            <HotelCard/>
            <HotelCard/>
            <HotelCard/>
          
          </div>
        </div>
        

        {/* 主要標題 */}
        <div className="recommendationTitle">
          <p>推薦與您行程相近的住宿</p>
          <p>就近尋找靠近您安排行程的住宿來源</p>
        </div>

        {/* <!-- 總排名區 --> */}
        <div className="wid80">
          <div className="optionZone">
          
            <HotelCard/>
            <HotelCard/>
            <HotelCard/>
            <HotelCard/>
          
          </div>
        </div>

        <div className="nav"></div>

        <Footer />
      </div>
    );
  
}

export default Hotel;
