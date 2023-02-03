import React, { useEffect, useState,useContext,useRef } from "react";
//匯入package
// import { Helmet } from "react-helmet";
import axios from "axios";
//匯入CSS
// import "../schedule/schedule.css";
import "./schedule.css";

//匯入component
import Favoritelist from "../../components/schedule/FavoriteArea/Favoritelist";
import ScheduleList from "../../components/schedule/ScheduleArea/ScheduleList";
// import Favoritelisttest from "../../components/schedule/Favoritelist copy";
// import SchduleListtest from "../../components/schedule/SchduleList copy";

import { columnsFromBackend } from "./scheduledata";
import { initSpotListinfo } from "./scheduledataa";
// import SpotMap from "./SpotMap";
import SpotMap from "../../components/schedule/SpotMap/SpotMap";

import { DragDropContext } from "react-beautiful-dnd";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import $ from "jquery";
import { useParams } from "react-router";
import AuthContext from "contexts";



  //景點行程表的context-------------------------------------------------
  export const ListContext=React.createContext(null);


// -----------------------------------------------------------------------------
function Schedule() {

  // 抓取會員資料
  const{user}=useContext(AuthContext)
// 抓取行程表參數
const params=useParams();


console.log(params.id)



  // 行程表
  const [spotListinfo, setSpotListinfo] = useState(initSpotListinfo);
  const [hotelListinfo, setHotelListinfo] = useState([]);
  // 如果有更新需要重新整理
  const [renew,setRenew]=useState(false);

  //定義改資料的方法傳給子
// 下方行程表資訊
  let loadDataAsync = async () => {
    // let response=await fetch(
    //   "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR3fyzFIBPOMj1WcDLJaXEYFZQiAlfW9BFYpsSN_sELepbKtdjM4HGgP7NM",
    //   {}
    // )
    let response = await axios({
      //请求方法
      method: "GET",
      //url
      // url: "http://127.0.0.1:8000/schedules",
      url: "http://127.0.0.1:8000/showSpot/"+user.id,
      // url: "https://jsonplaceholder.typicode.com/users",
    });
    //响应状态码
    console.log(response.status);
    //响应状态字符串
    console.log(response.statusText);
    //响应头信息
    console.log(response.headers);
    //响应体
    console.log("schedule",response.data);
    //response.data array
    setSpotListinfo([...response.data]);
    // console.log(response.data);
    
    
  };
// -----------------------------新增行程時會自動轉跳最底部
const scheRef=useRef(null);
const [newHeight,setNewHeight]=useState(0);
if(renew&&newHeight!==scheRef.current.scrollHeight){
  setTimeout(()=>scheRef.current.scrollTop = scheRef.current.scrollHeight,1000)
}
  
// 更新行程表資訊
useEffect(() => {

    loadDataAsync();
      setRenew(false);
      setNewHeight(scheRef.current.scrollHeight)
     

  }, [renew]);


  // 先找有幾天，再來找一天內早中晚各幾筆資料

  // 多個拖拉的表單DEMO
  const [columns, setColumns] = useState(columnsFromBackend);
  // console.log(columns);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };




  // 打開收藏名單編輯---------------------------------------------------
  const openFavorite = () => {
    let display = $(".favorite").css("display");
    if (display !== "block") {
      $(".favorite").addClass("slidOut");
      setTimeout(() => {
        $(".favorite").removeClass("slidOut");
      }, 200);
      $(".favorite").css("display", "block");
      $("#editSchdule").css({
        backgroundColor: "#feda02",
        color: "#000",
      });
      $("#editSchdule").text("編輯完成");
    } else {
      $(".favorite").addClass("slidClose");
      setTimeout(() => {
        $(".favorite").removeClass("slidClose");
        $(".favorite").css("display", "none");
      }, 200);
      $("#editSchdule").css({
        backgroundColor: "var(--nav-bg-color)",
        color: "#fff",
      });
      $("#editSchdule").text("編輯行程");
    }
  };

  // 切換收藏名單分類
  const listChangeGroup = () => {
    let changeSpot = $(".selectList").text();
    if (changeSpot === "景點") {
      $(".selectList").text("飯店");
      $(".selectList").addClass("showup");
      $(".list .fHotel").addClass("showup");
      setTimeout(() => {
        $(".selectList").removeClass("showup");
        $(".list .fHotel").removeClass("showup");
      }, 1500);
      $(".list .fHotel").css("display", "block");
      $(".list .fSpot").css("display", "none");
    }
    if (changeSpot === "飯店") {
      $(".selectList").addClass("showup");
      $(".list .fSpot").addClass("showup");
      setTimeout(() => {
        $(".selectList").removeClass("showup");
        $(".list .fSpot").removeClass("showup");
      }, 1500);
      $(".list .fSpot").css("display", "block");
      $(".list .fHotel").css("display", "none");
      $(".selectList").text("景點");
    }
  };



  return (

    <ListContext.Provider value={{spotListinfo, setSpotListinfo,hotelListinfo,setHotelListinfo,setRenew}}>
      {/* <!-- 主要網站部分 --> */}
      <div className="scheduleMainpage">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
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
              <button id="editSchdule" onClick={openFavorite}>
                編輯行程
              </button>
            </div>
            {/* <!-- 行程表頭部結束 --> */}

            {/* <!-- 行程日期條 --> */}
            <div className="scheduleDaybar">
              {/* <!-- 左鍵 --> */}
              <div className="prev">
                <div></div>
              </div>

              {/* <!-- 日期 --> */}
              <div className="daymain">
                <a href="#Day1">
                  12月17日
                  <br />
                  Day<span> 1 </span>
                </a>

                <a href="/">
                  12月18日
                  <br />
                  Day<span> 2 </span>
                </a>

                <a href="/">
                  12月19日
                  <br />
                  Day<span> 3 </span>
                </a>

                <a href="/">
                  12月20日
                  <br />
                  Day<span> 4 </span>
                </a>

                <a href="/">
                  12月21日
                  <br />
                  Day<span> 5 </span>
                </a>
              </div> 

              {/* <!-- 右鍵 --> */}
              <div className="next">
                <div></div>
              </div>
            </div>
            {/* <!-- 行程日期條結束 --> */}

            {/* <!-- 行程表景點及交通------------------------------------ --> */}
            <div className="tripSpot" ref={scheRef}>
              <ScheduleList
                spotListinfo={spotListinfo}
                setSpotListinfo={setSpotListinfo}
                loadDataAsync={function () {
                  loadDataAsync();
                }}
              />
            </div>

            {/* <!-- 行程表結束 --> */}
          </div>

          {/* <!-- 收藏名單 -------------------------------------------> */}
          <div className="favorite">
            <div className="favoriteTitle">收藏名單</div>
            {/* <!-- 飯店或景點選單 --> */}
            <div className="change">
              {/* <!-- 左鍵 --> */}
              <div className="prev" onClick={listChangeGroup}>
                <div></div>
              </div>

              <div className="selectList">景點</div>
              {/* <!-- 右鍵 --> */}
              <div className="next" onClick={listChangeGroup}>
                <div></div>
              </div>
            </div>
            <Favoritelist/>
            <div className="close" onClick={openFavorite}>
              &times;
            </div>
          </div>
          {/* <!-- 收藏名單結束 --> */}
        </DragDropContext>
        {/* <!-- 地圖------------------------------------------------> */}
        {/* <SpotMap
          spotListinfo={spotListinfo}
          setSpotListinfo={setSpotListinfo}
          loadDataAsync={() => {
            loadDataAsync();
          }}
        /> */}
        {/* <div id="myMap" className="mapping"></div>
        
        <Helmet>
          <script src="./openstreetmap.js"></script>
        </Helmet> */}
      </div>
    </ListContext.Provider>
 
  );
}

export default Schedule;
