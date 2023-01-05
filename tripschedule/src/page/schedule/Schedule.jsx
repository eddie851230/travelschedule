import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../schedule/schedule.css";
import Favoritelist from "../../components/schedule/Favoritelist";
import SchduleList from "../../components/schedule/SchduleList";
// import Favoritelisttest from "../../components/schedule/Favoritelist copy";
// import SchduleListtest from "../../components/schedule/SchduleList copy";
import { columnsFromBackend } from "./scheduledata";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import $ from "jquery";


function Schedule() {




  // 先找有幾天，再來找一天內早中晚各幾筆資料

  // 多個拖拉的表單DEMO
  const [columns, setColumns] = useState(columnsFromBackend);
  console.log(columns);

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

  // 

  // 打開收藏名單編輯
  const openFavorite = () => {
    let display = $('.favorite').css('display');
    if (display !== 'block') {
      $('.favorite').addClass('slidOut');
      setTimeout(() => {
        $('.favorite').removeClass('slidOut');
      }, 200);
      $('.favorite').css('display', 'block');
      $("#editSchdule").css({
        backgroundColor: "#feda02",
        color: "#000"
      });
      $("#editSchdule").text("編輯完成");

    }
    else {
      $('.favorite').addClass('slidClose');
      setTimeout(() => {
        $('.favorite').removeClass('slidClose');
        $('.favorite').css('display', 'none');
      }, 200);
      $("#editSchdule").css({
        backgroundColor: "var(--nav-bg-color)",
        color: "#fff"
      });
      $("#editSchdule").text("編輯行程");

    }

  }

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
      }, 1500)
      $(".list .fHotel").css("display", "block");
      $(".list .fSpot").css("display", "none");

    }
    if (changeSpot === "飯店") {
      $(".selectList").addClass("showup");
      $(".list .fSpot").addClass("showup");
      setTimeout(() => {
        $(".selectList").removeClass("showup");
        $(".list .fSpot").removeClass("showup");
      }, 1500)
      $(".list .fSpot").css("display", "block");
      $(".list .fHotel").css("display", "none");
      $(".selectList").text("景點");
    }
  }

  // 行程表內部拖曳


  return (
    <>
      {/* <!-- 主要網站部分 --> */}
      <div className="scheduleMainpage">
        {/* <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}> */}
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
              <button id="editSchdule" onClick={openFavorite}>編輯行程</button>
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

                <a>
                  12月18日
                  <br />
                  Day<span> 2 </span>
                </a>

                <a>
                  12月19日
                  <br />
                  Day<span> 3 </span>
                </a>

                <a style={{ visibility: "hidden" }}>
                  12月20日
                  <br />
                  Day<span> 4 </span>
                </a>

                <a style={{ visibility: "hidden" }}>
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
            <div className="tripSpot">
              <SchduleList />
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
            <Favoritelist />
            <div className="close" onClick={openFavorite}>&times;</div>
          </div>
          {/* <!-- 收藏名單結束 --> */}
        {/* </DragDropContext> */}


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