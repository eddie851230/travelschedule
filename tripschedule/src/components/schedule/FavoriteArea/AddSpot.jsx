import React, { useContext } from "react";
import { http } from "WebAPI";
import "./AddSpot.css";
import { ListContext } from "page/schedule/Schedule";

const AddSpot = (props) => {
  // 讀取目前行程表的資料
  const { spotListinfo, hotelListinfo, setRenew } = useContext(ListContext);
  // 為了識別最後一個加入行程
  const last = spotListinfo[spotListinfo.length - 1];

  //   刪除行程表
  const handleDeleteSpot = (id) => {
    http
      .delete(`/favorite/spot/${id}`)
      .then(() =>
        props.updateSpotinfo(props.spotinfo.filter((r) => r.id !== id))
      )
      .then(() => props.setTrigger(false))
      .catch((error) => console.log(error));
  };

  const handleDeleteHotel = (id) => {
    http
      .delete(`/favorite/hotel/${id}`)
      .then(() =>
        props.updateHotelinfo(props.hotelinfo.filter((r) => r.id !== id))
      )
      .then(() => props.setTrigger(false))
      .catch((error) => console.log(error));
  };

  // 景點加入行程表
  const addSchedule = (id) => {
    console.log("last", last);
    http
      .post("/api/addSchedule", {
        date: last.date,
        attraction_id: id,
        schedule_id: last.schedule_id,
        date_order: last.date_order,
      })
      .then((r) => console.log("insertschdule", r))
      .then(() => props.setTrigger(false))
      .then(() => setRenew(true))
      .catch((error) => console.log(error));
  };

  // 飯店加入行程表
  const updatehotel = (id) => {
    http
      .post("/api/addHotel", {
        date: last.date,
        room_id: id,
        schedule_id: last.schedule_id,
        date_order: last.date_order,
      })
      .then((r) => console.log("inserthotel", r))
      .then(() => props.setTrigger(false))
      .then(() => setRenew(true))
      .catch((error) => console.log(error));
  };

  return props.trigger ? (
    <div className="AddSpot">
      <div className="favlist">
        {props.spotinfo ? (
          <>
            <h3>{props.detail.name}</h3>
            <img src={props.detail.path} />
            <div className="descriptTitle">營業時間</div>
            <div className="info">{props.detail.opentime}</div>
            <div className="descriptTitle">價格</div>
            <div className="info">
              <span className="price">{props.detail.ticketprice}</span>&nbsp;NTD
            </div>
          </>
        ) : (
          <>
            <h3>{props.detail.name_CH}</h3>
            <img src={props.detail.path} />
            <div className="descriptTitle">房型</div>
            <div className="info">
              <span>{props.detail.roomtype}</span>
            </div>
            <div className="descriptTitle">價格</div>
            <div className="info">
              <span className="price">{props.detail.price_weekdays}&nbsp;</span>
              NTD
            </div>
          </>
        )}

        <div className="muti">
          <button
            onClick={
              props.spotinfo
                ? () => addSchedule(props.detail.attraction_id)
                : updatehotel(props.detail.room_id)
            }
          >
            加入行程表
          </button>
          <button
            style={{ width: "50px", color: "#fff", backgroundColor: "red" }}
            onClick={
              props.spotinfo
                ? () => handleDeleteSpot(props.detail.id)
                : () => handleDeleteHotel(props.detail.id)
            }
          >
            刪除
          </button>
        </div>
        <div className="closebtn" onClick={() => props.setTrigger(false)}>
          <div>&times;</div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default AddSpot;
