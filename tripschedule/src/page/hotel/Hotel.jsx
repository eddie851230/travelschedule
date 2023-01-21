import React, { useEffect, useState } from "react";
import "./index.css";
import "./hotel-index.css";
import Footer from "../../components/tool/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
// 會員登入細節
import  { useContext } from 'react';
// import AuthContext from '../../contexts';
// import { setAuthToken } from '../../utils';
// import { Formik } from 'formik';

// 自製元件
import HotelCard from "../../components/hotel/HotelCard";
import { data } from "jquery";

// {process.env.PUBLIC_URL+"/img/Hotel_For_SQL/A03_01.webp"}

//引入圖片
// import closeBTN from "./img/hotel-icon/close.png"
const Hotel = (props) => {
  window.scrollTo(0, 0);

  // let [data,setData] = useState (null);//07設定一開始沒有資料為null
  // setData(result.xxx.xx);//08抓到resul中的photo陣列xxx要看json有包含什麼屬性質
  // 09跳到hotel card or search car 的jsx
  //10將此picture component放入homepage中=>看homepage

  // const initialURL = "https://127.0.0.1:8000/hotel_list";//05要找到Sql傳到MVC controller的網址
  //  setData(result.data.photos);//08抓到resul中的photo陣列
  // console.log(initialURL);
  // 03建立典籍事件search 的非同步事件去抓資料，用axios
  // const search = async()=>{
  //   let result = await axios.get(initialURL
  //     //04~~ 去抓後端laravel的資料
  //   )
  // };

  //   useEffect(api);
  // api=()=>{
  //   axios()
  // }

  //彈出屏的點擊
  //  const [data, setData] = useState(data);//data array of obj
  const [isVisible, setIsVisible] = useState(false);

  // 點擊的時候會改變原本的狀態useModal沒有設定是false
  // 點擊後變成true

  //B02建立繳交表單事件
  // const handleSubmit=(e)=>{
  //   e.preventDefault

  // }
  // const sentDataToPhp =(e)=>{
  //   axios.post("http://127.0.0.1:8000/hotel_list")
  // }
  //------------------------------------------
  // const [notes, setNotes] = useState('')

  // const url = 'http://127.0.0.1:8000/hotel_list';

  // const getAllNotes =() =>{
  //   axios.get('$(url)past')
  //   .then((response)=>{
  //     const allNotes = response.data
  //   })
  // }

  // 讓後端丟資料到前端
  // const showData;

  //將搜尋結果往後傳
  // const [items, setItems] = useState([]);

  // const getAllHotel = () =>{
  //   axios.get("http://127.0.0.1:8000/hotel_list")
  //   .then((response) => {
  //     console.log(response.data)

  //     return setItems(response.data);
  //     console.log(typeof response.data)
  //   })
  // }

  // useEffect(()=>{
  //   getAllHotel()
  // },[])

  // console.log(items)

  // 會員登入細節
  // const {user,setUser}  = useContext(AuthContext);
  // console.log(user);

  return (
    <div id="likeBody">
      {/* // 彈出modal */}
      <div
        className="filterZone-outer"
        style={{ visibility: isVisible ? "visible" : "hidden" }}

        // onClick={() => setIsVisible(!isVisible)}
      >
        {/* 裡面的白框 */}
        <div className="filterZone Position-relative">
          {/* 關閉按鈕 */}
          <div className="closeBtn" onClick={() => setIsVisible(!isVisible)}>
            <img
              src={process.env.PUBLIC_URL + "/img/hotel-icon/close.png"}
              alt=""
            />
          </div>

          <div className="checkZone">
            <form
              className="flexForm"
              action=""
              method="post"
              // onSubmit={this.handleSubmit}
            >
              {/* B01產生表單點擊的事件 */}

              {/* 價錢 */}
              <div className="portion10">
                <div className="filterTitle">篩選價格</div>
                <div className="makeRangeFlex">
                  {/* 00001_價格吧*/}
                  <div className="price-input">
                    {/* 放輸入框 */}
                    <div className="inner-input">
                      {/* ------------------------- */}
                      <div className="field">
                        <span>Min</span>
                        <input
                          type="number"
                          className="input-min"
                          value="2500"
                          name="price"
                        />
                      </div>
                      {/* ---------------------- */}
                      <div className="separator">-</div>
                      {/* ---------------------- */}
                      <div className="field">
                        <span>Max</span>
                        <input
                          type="number"
                          className="input-max"
                          value="7500"
                          name="price"
                        />
                      </div>
                    </div>
                    {/* 00002_放吧條 */}
                    <div className="inner-progress">
                      <div className="slider">
                        <div className="progress"></div>
                      </div>
                      {/* 吧上的點點 */}
                      {/* -------------------------- */}
                      <div className="range-input">
                        <input
                          type="range"
                          className="range-min"
                          min="0"
                          max="10000"
                          value="2500"
                          step="100"
                        />
                        <input
                          type="range"
                          className="range-max"
                          min="0"
                          max="10000"
                          value="7500"
                          step="100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 地區 */}
              <div className="portion13">
                <div className="filterTitle">地區篩選</div>
                <div className="makeFlex">
                  {/* 左邊的篩選 */}
                  <div className="makeHalf">
                    <p>
                      <input
                        id="d01"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d01">足立區</label>
                    </p>
                    <p>
                      <input
                        id="d02"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d02">文京區</label>
                    </p>
                    <p>
                      <input
                        id="d03"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d03">千代田區</label>
                    </p>
                    <p>
                      <input
                        id="d04"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d04">中央區</label>
                    </p>
                    <p>
                      <input
                        id="d05"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d05">江戶川區</label>
                    </p>
                    <p>
                      <input
                        id="d06"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d06">板橋區</label>
                    </p>
                    <p>
                      <input
                        id="d07"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d07">葛飾區</label>
                    </p>
                    <p>
                      <input
                        id="d08"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d08">江東區</label>
                    </p>
                    <p>
                      <input
                        id="d09"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d09">港區</label>
                    </p>
                    <p>
                      <input
                        id="d10"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d10">目黑區</label>
                    </p>
                    <p>
                      <input
                        id="d11"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d11">中野區</label>
                    </p>
                  </div>
                  {/* 右邊的篩選 */}
                  <div className="makeHalf">
                    <p>
                      <input
                        id="d12"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d12">練馬區</label>
                    </p>
                    <p>
                      <input
                        id="d13"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d13">大田區</label>
                    </p>
                    <p>
                      <input
                        id="d14"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d14">世田谷區</label>
                    </p>
                    <p>
                      <input
                        id="d15"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d15">澀谷區</label>
                    </p>
                    <p>
                      <input
                        id="d16"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d16">品川區</label>
                    </p>
                    <p>
                      <input
                        id="d17"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d17">新宿區</label>
                    </p>
                    <p>
                      <input
                        id="d18"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d18">杉並區</label>
                    </p>
                    <p>
                      <input
                        id="d19"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d19">墨田區</label>
                    </p>
                    <p>
                      <input
                        id="d20"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d20">台東區</label>
                    </p>
                    <p>
                      <input
                        id="d21"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d21">豐島區</label>
                    </p>
                    <p>
                      <input
                        id="d22"
                        type="checkbox"
                        value=""
                        name="location"
                        checked
                      />
                      <label for="d22">北區</label>
                    </p>
                  </div>
                </div>
              </div>
              {/* 設施 */}
              <div className="portion08">
                <div className="filterTitle">偏好設施</div>
                <div className="faciFont">
                  <p>
                    <input
                      id="equip01"
                      type="checkbox"
                      value=""
                      name="equipment"
                      checked
                    />
                    <label for="equip01">停車</label>
                  </p>
                  <p>
                    <input
                      id="equip02"
                      type="checkbox"
                      value=""
                      name="equipment"
                      checked
                    />
                    <label for="equip02">SPA</label>
                  </p>
                  <p>
                    <input
                      id="equip03"
                      type="checkbox"
                      value=""
                      name="equipment"
                      checked
                    />
                    <label for="equip03">廚房</label>
                  </p>
                  <p>
                    <input
                      id="equip04"
                      type="checkbox"
                      value=""
                      name="equipment"
                      checked
                    />
                    <label for="equip04">免費無線上網</label>
                  </p>
                  <p>
                    <input
                      id="equip05"
                      type="checkbox"
                      value=""
                      name="equipment"
                      checked
                    />
                    <label for="equip05">游泳池</label>
                  </p>
                  <p>
                    <input
                      id="equip06"
                      type="checkbox"
                      value=""
                      name="equipment"
                      checked
                    />
                    <label for="equip06">寵物友善</label>
                  </p>
                  <p>
                    <input
                      id="equip07"
                      type="checkbox"
                      value=""
                      name="equipment"
                      checked
                    />
                    <label for="equip07">洗衣機</label>
                  </p>
                  <p>
                    <input
                      id="equip08"
                      type="checkbox"
                      value=""
                      name="equipment"
                      checked
                    />
                    <label for="equip08">健身房</label>
                  </p>
                </div>
              </div>

              {/* 搜尋按鈕 */}
              <Link to="/Hotel/Search">
                <button
                  className="filterBtnPosition"
                  type="submit"
                  // onClick={search}
                >
                  搜尋
                </button>
              </Link>
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
                <Link to="/Hotel/Search">
                  <button id="submitBtn" type="submit">
                    搜尋
                  </button>
                </Link>
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
        {/* 價錢 */}
        <div className="flexContent">
          <div
            className="searchBtnArea"
            onClick={() => setIsVisible(!isVisible)}
          >
            <div id="btnName">價格範圍</div>
            <div className="iconForSearch">
              <img
                src={process.env.PUBLIC_URL + "/img/hotel-icon/index-price.png"}
                alt=""
              />
            </div>
          </div>
        </div>
        
        {/* 地區 */}
        <div className="flexContent">
          <div
            className="searchBtnArea"
            onClick={() => setIsVisible(!isVisible)}
          >
            <div id="btnName">地區篩選</div>
            <div className="iconForSearch">
              <img
                src={
                  process.env.PUBLIC_URL + "/img/hotel-icon/index-district.png"
                }
                alt=""
              />
            </div>
          </div>
        </div>
        

        {/* 設施 */}
        <div className="flexContent">
          <div
            className="searchBtnArea"
            onClick={() => setIsVisible(!isVisible)}
          >
            <div id="btnName">所有設施</div>
            <div className="iconForSearch">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/img/hotel-icon/index-facilities.png"
                }
                alt=""
              />
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
          
          <HotelCard />
          
        </div>
      </div>

      {/* 主要標題 */}
      {/* <div className="recommendationTitle">
        <p>推薦與您行程相近的住宿</p>
        <p>就近尋找靠近您安排行程的住宿來源</p>
      </div> */}

      {/* <!-- 總排名區 --> */}
      {/* <div className="wid80">
        <div className="optionZone">
          <HotelCard />
        </div>
      </div> */}

      <div className="nav"></div>

      <Footer />
    </div>
  );
};

export default Hotel;
