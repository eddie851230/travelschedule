import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { http } from "WebAPI";
import { ListContext } from "page/schedule/Schedule";
import { useContext } from "react";
const ScheduleList = (p) => {
  // console.log(p);
  // console.log("p.spotListinfo"+p.spotListinfo);

  // console.log(p.spotListinfoFilter3);
  // 使用schdule的變數
  const { spotListinfo, setRenew,deletebtn } = useContext(ListContext);

  // console.log(p.spotListinfo);
  console.log(deletebtn)
  const airPlaneDepartinfo = [
    {
      id: "depart",
      day: "Day1",
      dayTime: "morning",
      flyIcon: "/img/樂桃icon.png",
      airportName: "成田機場",
      arrivingTime: "08:00",
      airPlaneName: "樂桃航空",
      addr: "1-1 Furugome, Narita, Chiba 282-0004日本",
      herf: "/Airticket/output/1",
    },
  ];
  // ---------------景點資訊
  // console.log(p.spotListinfo);
  // spotListinfo = {
  //   address: "東京都千葉縣浦安市舞浜1-1",
  //   clickrate: 1000,
  //   id: 1,
  //   name: "東京迪士尼樂園",
  //   opentime: "08:00~22:00",
  //   suggestedtime: 8,
  //   ticketprice: 1800,
  // };

  // const spotData = [
  //   {
  //     id: "S01",
  //     day: "Day1",
  //     dayTime: "morning",
  //     spotImg: "/img/景點相片預覽(明亮).jpg",
  //     spotName: "東京鐵塔",
  //     duringTime: "1小時",
  //     addr: "1-1 Furugome, Narita, Chiba 282-0004日本",
  //     href: "/Spot",
  //   },
  //   {
  //     id: "S02",
  //     day: "Day1",
  //     dayTime: "morning",
  //     spotImg: "/img/景點相片預覽(暗色).jpg",
  //     spotName: "東京晴空塔",
  //     duringTime: "1.5小時",
  //     addr: "日本東京銀座區富人天堂",
  //     href: "/Spot",
  //   },
  //   {
  //     id: "S03",
  //     day: "Day1",
  //     dayTime: "afternoon",
  //     spotImg: "/img/淺草寺.jpg",
  //     spotName: "東京淺草寺",
  //     duringTime: "2小時",
  //     addr: "日本東京銀座區假鬼假怪逛不了街",
  //     href: "/Spot",
  //   },
  //   {
  //     id: "S04",
  //     day: "Day1",
  //     dayTime: "evening",
  //     spotImg: "/img/淺草寺(維基百科夜景).jpg",
  //     spotName: "東京淺草寺(晚上)",
  //     duringTime: "2小時",
  //     addr: "日本東京銀座區假鬼假怪逛不了街",
  //     href: "/Spot",
  //   },
  //   {
  //     id: "S05",
  //     day: "Day1",
  //     dayTime: "evening",
  //     spotImg: "/img/淺.jpg",
  //     spotName: "東",
  //     duringTime: "2小時",
  //     addr: "日本東京銀座區假鬼假怪逛不了街",
  //     href: "/Spot",
  //   },
  //   {
  //     id: "S06",
  //     day: "Day1",
  //     dayTime: "evening",
  //     spotImg: "/img/淺草.jpg",
  //     spotName: "東京",
  //     duringTime: "2小時",
  //     addr: "日本東京銀座區假鬼假怪逛不了街",
  //     href: "/Spot",
  //   },
  //   {
  //     id: "S07",
  //     day: "Day1",
  //     dayTime: "evening",
  //     spotImg: "/img/淺草寺.jpg",
  //     spotName: "東京淺",
  //     duringTime: "2小時",
  //     addr: "日本東京銀座區假鬼假怪逛不了街",
  //     href: "/Spot",
  //   },
  // ];

  //   // 調整拖曳功能可以儲存

  // const [spotinfo, updateSpotinfo] = useState(spotData);
  // // const [ainfo, updateainfo] = useState(airPlaneDepartinfo);

  // // spotData.filter空的會回傳[]
  // function handleOnDragEnd(result) {
  //   console.log(result);
  //   if (!result.destination) return;
  //   const items = Array.from(spotinfo);
  //   console.log(items);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   // console.log(reorderedItem);
  //   items.splice(result.destination.index, 0, reorderedItem);
  //   console.log(items);
  //   updateSpotinfo(items);
  // }

  // const [s, updateSpotListinfo] = useState(p.spotListinfo);
  // const [ainfo, updateainfo] = useState(airPlaneDepartinfo);

  // spotData.filter空的會回傳[]
  function handleOnDragEnd(result) {
    // console.log(result);
    if (!result.destination) return;
    const items = Array.from(p.spotListinfo);
    console.log("item", result.source);
    console.log("item", result.source.index);
    console.log("item", result.source.index);
    const [reorderedItem] = items.splice(result.source.index, 1);
    // console.log(reorderedItem);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log("結束的items", items);
    console.log("結束的items", items);
    console.log("結束的items", items);
    p.setSpotListinfo(items);
  }

 

  function MouseEnterHandler() {}

  // ==========================================
  // 一天內早上中午晚上的資料分類(array)
  // const morningSpot = spotinfo.filter((elem) => elem.dayTime === "morning");

  // const afternoonSpot = spotinfo.filter((elem) => elem.dayTime === "afternoon");
  // const eveningSpot = spotinfo.filter((elem) => elem.dayTime === "evening");

  // {p.spotListinfo.filter((e)=>{})};

  //
  // 新增刪除按鈕可以直接在行程進行刪除--------------------------------

  const handleDelete = async (e) => {
    e.preventDefault();

    await http
      .delete("/api/deleteSpot/" + e.target.id)
      .then(() => spotListinfo.filter((r) => r.id !== e.target.id))
      .then(() => setRenew(true))
      .catch((e) => console.log(e));
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="Day1">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {/*  */}
            {/* <div className="dayTime">上午</div> */}

            {/* 第一天 */}
            {/* <!-- 飛機格 --> */}

            {p.spotListinfoFilter1 &&
              airPlaneDepartinfo.map((item, index) => (
                <div className="airplane" key={item.id}>
                  <img src={item.flyIcon} alt={item.airPlaneName} />
                  <div className="text">
                    <div className="name">{item.airportName}</div>

                    <div className="Addr">{`地址:${item.addr}`}</div>
                    <div className="info">
                      抵達時間:
                      <span>{item.arrivingTime}</span>&Iota;
                      <span>{item.airPlaneName}</span>
                    </div>
                  </div>
                  <a href={item.herf}>
                    <button>
                      查看
                      <br />
                      詳情
                    </button>
                  </a>
                </div>
              ))}
            {/* <!-- 景點格 --> */}
            {p.spotListinfoFilter1 &&
              p.spotListinfoFilter1.map((item, index) => {
                return (
                  <Draggable
                    key={item.id}
                    draggableId={item.id.toString()}
                    index={index}
                    // onMouseEnter={MouseEnterHandler}
                  >
                    {(provided) => (
                      <div
                        className="spot"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        key={index}
                        // id={index}
                      >
                        <img src={item.path} alt={index + 1} />
                        <div className="text">
                          <div className="name">
                            <span
                            // style={{
                            //   backgroundColor: "#CCCCCC",
                            //   padding:'0 10px',
                            //   textAlign:'center',
                            //   // verticalAlign:'middle',
                            //   // width: "25px",
                            //   // height: "25px",
                            //   display: "inline-block",
                            //   borderRadius: "5px",
                            // }}
                            >
                              {index + 1}.
                            </span>
                            {item.name}
                          </div>
                          <div className="">{`營業時間:${item.opentime}`}</div>
                          <div className="info">
                            <span>{`遊玩時間:${item.suggestedtime}小時`}</span>
                          </div>
                          <div className="Addr">{`地址:${item.address}`}</div>
                          <div className="">{`價格:${item.ticketprice}.NT`}</div>
                        </div>
                        <a href={item.href}>
                          <button>
                            查看
                            <br />
                            詳情
                          </button>
                        </a>
                        <div
                          className="delete"
                          id={item.id}
                          onClick={handleDelete}
                          style={{ display: deletebtn ? "block" : "none" }}
                        >
                          &times;
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
            {p.spotListinfoFilter2 &&
              p.spotListinfoFilter2.map((item, index) => {
                return (
                  <Draggable
                    key={item.id}
                    draggableId={item.id.toString()}
                    index={index}
                    // onMouseEnter={MouseEnterHandler}
                  >
                    {(provided) => (
                      <div
                        className="spot"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        key={index}
                        // id={index}
                      >
                        <img src={item.path} alt={index + 1} />
                        <div className="text">
                          <div className="name">
                            <span
                            // style={{
                            //   backgroundColor: "#CCCCCC",
                            //   padding:'0 10px',
                            //   textAlign:'center',
                            //   // verticalAlign:'middle',
                            //   // width: "25px",
                            //   // height: "25px",
                            //   display: "inline-block",
                            //   borderRadius: "5px",
                            // }}
                            >
                              {index + 1}.
                            </span>
                            {item.name}
                          </div>
                          <div className="Addr">{`地址:${item.address}`}</div>
                          <div className="">{item.opentime}</div>
                          <div className="info">
                            <span>{`遊玩時間:${item.suggestedtime}小時`}</span>
                          </div>

                          <div className="">{`價格:${item.ticketprice}.NT`}</div>
                        </div>
                        <a href={item.href}>
                          <button>
                            查看
                            <br />
                            詳情
                          </button>
                        </a>
                        <div
                          className="delete"
                          id={item.id}
                          onClick={handleDelete}
                          style={{ display: deletebtn ? "block" : "none" }}
                        >
                          &times;
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}

            {p.spotListinfoFilter3 &&
              p.spotListinfoFilter3.map((item, index) => {
                return (
                  <Draggable
                    key={item.id}
                    draggableId={item.id.toString()}
                    index={index}
                    // onMouseEnter={MouseEnterHandler}
                  >
                    {(provided) => (
                      <div
                        className="spot"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        key={index}
                        // id={index}
                      >
                        <img src={item.path} alt={index + 1} />
                        <div className="text">
                          <div className="name">
                            <span
                            // style={{
                            //   backgroundColor: "#CCCCCC",
                            //   padding:'0 10px',
                            //   textAlign:'center',
                            //   // verticalAlign:'middle',
                            //   // width: "25px",
                            //   // height: "25px",
                            //   display: "inline-block",
                            //   borderRadius: "5px",
                            // }}
                            >
                              {index + 1}.
                            </span>
                            {item.name}
                          </div>
                          <div className="Addr">{`地址:${item.address}`}</div>
                          <div className="">{item.opentime}</div>
                          <div className="info">
                            <span>{`遊玩時間:${item.suggestedtime}小時`}</span>
                          </div>

                          <div className="">{`價格:${item.ticketprice}.NT`}</div>
                        </div>
                        <a href={item.href}>
                          <button>
                            查看
                            <br />
                            詳情
                          </button>
                        </a>
                        <div
                          className="delete"
                          id={item.id}
                          onClick={handleDelete}
                          style={{ display: deletebtn ? "block" : "none" }}
                        >
                          &times;
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
            {/* 飯店 */}
            {!p.spotListinfoFilter3 && (
              <div className="airplane hotel">
                <img
                  src="/img/Hotel_For_SQL/A03_01.webp"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <div className="text">
                  <div className="name">西新宿大和 ROYNET 飯店</div>
                  <div className="Addr">
                    地址:6-12-39, Nishi-Shinjuku, Shinjuku-ku, Tokyo, Tokyo
                  </div>
                  <div>房型:標準雙人房</div>
                  <div>價格:3000.NT</div>
                </div>
                <a href>
                  <button>
                    查看
                    <br />
                    詳情
                  </button>
                </a>
              </div>
            )}
            {p.spotListinfoFilter3 &&
              airPlaneDepartinfo.map((item, index) => (
                <div className="airplane" key={item.id}>
                  <img src={item.flyIcon} alt={item.airPlaneName} />
                  <div className="text">
                    <div className="name">{item.airportName}</div>
                    <div className="info">
                      抵達時間:
                      <span>{item.arrivingTime}</span>&Iota;
                      <span>{item.airPlaneName}</span>
                    </div>
                    <div className="Addr">{`地址:${item.addr}`}</div>
                  </div>
                  <a href={item.herf}>
                    <button>
                      查看
                      <br />
                      詳情
                    </button>
                  </a>
                  <div
                    className="delete"
                    id={item.id}
                    onClick={handleDelete}
                    style={{
                      display: deletebtn === item.id ? "block" : "none",
                    }}
                  >
                    &times;
                  </div>
                </div>
              ))}
            {/* ========================================= */}
            {/*  */}
            {/* <div className="dayTime">下午</div> */}

            {/* {afternoonSpot.map(
              ({ id, spotImg, spotName, duringTime, addr, href }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <div
                      className="spot"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      key={index}
                    >
                      <img src={spotImg} alt={id} />
                      <div className="text">
                        <div className="name">{spotName}</div>
                        <div className="info">
                          遊玩時間: <span>{duringTime}</span>
                        </div>
                        <div className="Addr">{addr}</div>
                      </div>
                      <a href={href}>
                        <button>
                          查看
                          <br />
                          詳情
                        </button>
                      </a>
                    </div>
                  )}
                </Draggable>
              )
            )} */}

            {/*  */}
            {/* <div className="dayTime">晚間</div> */}

            {/* {eveningSpot.map(
              ({ id, spotImg, spotName, duringTime, addr, href }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <div
                      className="spot"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      key={index}
                    >
                      <img src={spotImg} alt={id} />
                      <div className="text">
                        <div className="name">{spotName}</div>
                        <div className="info">
                          遊玩時間: <span>{duringTime}</span>
                        </div>
                        <div className="Addr">{addr}</div>
                      </div>
                      <a href={href}>
                        <button>
                          查看
                          <br />
                          詳情
                        </button>
                      </a>
                    </div>
                  )}
                </Draggable>
              )
            )} */}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ScheduleList;
