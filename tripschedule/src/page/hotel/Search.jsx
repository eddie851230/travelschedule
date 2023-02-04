import React, { useState, useEffect } from "react";
import Footer from "../../components/tool/Footer";
import SearchCard from "../../components/hotel/SearchCard";
import { Link, useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";

import "./index.css";
import "./hotel-search.css";
import Search1 from "./Search_options";
// import bgImg from "/20230102/travelschedule/tripschedule/public/img/hotel_img/search-page-bg.jpg";

const Search = (props) => {
  const { searchKey } = useParams();
  console.log(useParams());
  console.log(searchKey);

  // window.scrollTo(0, 0);
  const [comfirm, isComfirm] = useState(false);

  const states = {
    popLoc: [
      {
        id: 1,
        name: "大田區",
        value: "d01",
        set: "location",
      },
      {
        id: 2,
        name: "品川區",
        value: "d02",
        set: "location",
      },
      {
        id: 3,
        name: "中野區",
        value: "d03",
        set: "location",
      },
      {
        id: 4,
        name: "新宿區",
        value: "d04",
        set: "location",
      },
      {
        id: 5,
        name: "文京區",
        value: "d05",
        set: "location",
      },
      {
        id: 6,
        name: "北區",
        value: "d06",
        set: "location",
      },
      {
        id: 7,
        name: "江戶川區",
        value: "d07",
        set: "location",
      },
    ],
    popFac: [
      {
        id: 1,
        name: "行李寄放",
        value: "f01",
        set: "facility",
      },
      {
        id: 2,
        name: "無障礙設施",
        value: "f02",
        set: "facility",
      },
      {
        id: 3,
        name: "溫泉",
        value: "f03",
        set: "facility",
      },
      {
        id: 3,
        name: "禁菸",
        value: "f03",
        set: "facility",
      },
      {
        id: 3,
        name: "提供早餐",
        value: "f03",
        set: "facility",
      },
    ],
  };

  // 儲存表單資料
  const [formDone, setformDone] = useState(false);

  // 存價錢資料資料
  // const [savePrice, setSavePrice] = useState("");
  const [saveMinPrice, setSaveMinPrice] = useState("");
  const [saveMaxPrice, setSaveMaxPrice] = useState("");
  // 存地區篩選
  const [saveLoc, setSaveLoc] = useState([]);

  // 存設施
  // const [saveFac, setSaveFac] = useState([]);
  // console.log(saveFac);

  // didMount開啟畫面先去抓form的所有資料
  useEffect(() => {
    setSaveLoc(states.popLoc.map((loc) => loc.name));
  }, []);
  console.log(saveLoc);

  // 確定input中的checked=false後，刪掉saveLoc中的陣列
  // 子傳到父親透過function去抓
  const callDad = (v) => {
    //
    setSaveLoc(saveLoc.concat(v));
    // console.log(saveLoc);
    const removeLoc = saveLoc.filter((location) => location !== v);
    console.log(removeLoc);
  };

  // (未完成)
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setformDone(true);
  };

  return (
    <div className="likeBody">
      <div id="contextImage">
        <img
          src={process.env.PUBLIC_URL + "/img/hotel_img/search-page-bg.jpg"}
          alt="照片有問題"
        />
      </div>

      <div className="articleZone">
        <div className="containerZone">
          {/* <!-- 左側篩選 --> */}
          <div id="asideFilter">
            {/* <!-- 熱門篩選 --> */}
            <form onSubmit={handleSubmit}>
              <p id="filterTitle">價格篩選</p>

              <div className="priceInput">
                <input
                  type="text"
                  name="price"
                  onChange={(e) => setSaveMinPrice(e.target.value)}
                  value={saveMinPrice}
                />
                <span>元</span>
              </div>
              <p>~</p>
              <div className="priceInput">
                <input
                  type="text"
                  name="price"
                  onChange={(e) => setSaveMaxPrice(e.target.value)}
                  value={saveMaxPrice}
                />
                <span>元</span>
              </div>
              <p>查詢單晚價格</p>

              {/* <!-- 篩選地區 --> */}

              <p id="filterTitle">篩選地區</p>

              {states.popLoc.map((v) => {
                return <Search1 key={v.id} value={v} Getwawa={callDad} />;
              })}

              {/* <!-- 選擇設施 --> */}

              <p id="filterTitle">選擇設施</p>

              {states.popFac.map((v) => {
                return <Search1 key={v.id} value={v} />;
              })}

              {/* <!-- 確認按鈕 --> */}
              <Link to={`/Hotel/Search/${saveMinPrice}/${saveMaxPrice}`}>
                <button id="searchBtn" type="submit">
                  重新搜尋{" "}
                </button>
              </Link>
            </form>
          </div>
          <div className="rightMainZone">
            <div className="resultZone currentZone">
              <div id="currentText">
                <p>目前行程:</p>
                <div>東京古蹟三天兩夜</div>
                <p>日期:</p>
                <p>
                  <span>2023/2/10 &nbsp;</span>到<span>&nbsp; 2023/2/12</span>
                </p>
              </div>
            </div>
            <div className="resultZone  flexRight">
              {/* <!-- 搜尋排序 --> */}
              <div className="listOrder ">排序依照 : 旅客首選 &nbsp;&dArr;</div>
            </div>

            <SearchCard keyWord={searchKey} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Search;
