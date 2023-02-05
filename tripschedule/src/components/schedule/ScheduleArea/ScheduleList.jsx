import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { http } from "WebAPI";
import { ListContext } from "page/schedule/Schedule";
import { useContext } from "react";
import { useEffect } from "react";

const ScheduleList = (p) => {
  // console.log(p);
  // 使用schdule的變數
  const { spotListinfo, setRenew ,deletebtn} = useContext(ListContext)



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
    console.log(result);
    if (!result.destination) return;
    const items = Array.from(p.spotListinfo);
    console.log(items);
    const [reorderedItem] = items.splice(result.source.index, 1);
    // console.log(reorderedItem);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(items);
    p.setSpotListinfo(items);
  }

  // 一天內早上中午晚上的資料分類(array)
  // const morningSpot = spotinfo.filter((elem) => elem.dayTime === "morning");

  // const afternoonSpot = spotinfo.filter((elem) => elem.dayTime === "afternoon");
  // const eveningSpot = spotinfo.filter((elem) => elem.dayTime === "evening");

// ----------------------之後再說
//  useEffect(()=>{
//   if(editRef.current.innerText==='編輯完成'){
//   console.log(editRef.current.innerText)
//     setDeletebtn(true);
//   }else{
//     alert('2')
//     setDeletebtn(null);
//   }
//  },[editRef.current.innerText])




  
  const handleDelete = async (e) => {
    e.preventDefault();

    await http.delete('/api/deleteSpot/' + e.target.id)
      .then(() => spotListinfo.filter(r => r.id !== e.target.id))
      .then(() => setRenew(true))
      .catch(e => console.log(e));
    
  }

 

  return (

    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="Day1">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <div className="dayNum" id="Day1">
              Day
              <span> {+1}</span>: 禮拜
              <span>五</span>
            </div>

            {/*  */}
            {/* <div className="dayTime">上午</div> */}
            {/* <!-- 飛機格 --> */}

            {airPlaneDepartinfo.map((item) => (
              <div className="airplane" key={item.id}>
                <img src={item.flyIcon} alt={item.airPlaneName} />
                <div className="text">
                  <div className="name">{item.airportName}</div>
                  <div className="info">
                    抵達時間:
                    <span>{item.arrivingTime}</span>&Iota;
                    <span>{item.airPlaneName}</span>
                  </div>
                  <div className="Addr">{item.addr}</div>
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

            {/* <!-- 景點或飯店格 --> */}
            {p.spotListinfo.map((item, index) => {
              return (
                <Draggable
                  key={item.id}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className="spot"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      key={index}
                    >
                      <img src={item.path} alt={index + 1} />
                      <div className="text">
                        <div className="name">{item.name}</div>
                        <div className="">營業時間:{item.opentime}</div>
                        <div className="info">
                          遊玩時間: <span>{item.suggestedtime}小時</span>
                        </div>
                        <div className="Addr">{item.address}</div>
                        <div className="">價格:&nbsp;{item.ticketprice}.NT</div>
                      </div>
                      <a href={item.href}>
                        <button>
                          查看
                          <br />
                          詳情
                        </button>
                      </a>
                      <div className="delete" id={item.id} onClick={handleDelete} style={{ display: deletebtn ? 'block' : 'none' }}>&times;</div>
                    </div>
                  )}
                </Draggable>
              );
            })}

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
