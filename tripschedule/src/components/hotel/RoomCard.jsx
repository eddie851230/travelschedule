import React, { useEffect, useState } from "react";
import "./RoomCard.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const RoomCard = ({
  putCollection,
  setPutCollection,
  putThisPlan,
  setputThisPlan,
}) => {
  const params = useParams();
  // console.log(params.id);

  // 房間變數
  const [room, setRoom] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/roomsearch/" + params.id)
      .then((response) => {
        // console.log("detail", response.data);
        return setRoom(response.data);
      });
  }, []);

  return (
    <>
      {room.map((room) => {
        return (
          <div className="roomCard">
            <div className="roomPic">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/img/Hotel_for_SQL/Room_Pics/" +
                  room.path
                }
                alt="沒打開apache"
              />
            </div>
            <div className="desForRoom">
              <p>{room.roomname}</p>
              <span className="roomsOffer">
                總評數: {room.roomarea} 平方公尺
              </span>
              <span className="roomsOffer">雙人床: {room.doublebed}張</span>
              <span className="roomsOffer">單人床: {room.singlebed}張</span>
              {/* <ul className="offerLists">
                <li>免費上網</li>
                <li>免費上網</li>
                <li>免費上網</li>
                <li>免費上網</li>
              </ul> */}
              <p className="priceForRoom">
                價格<span>{room.price_weekdays}</span>/晚
              </p>
            </div>
            {/* 按鈕區 */}
            <div className="btnForRooms">
              <button
                onClick={() => setPutCollection(!putCollection)}
                className="styleForBtn colorCollection"
              >
                放入收藏
              </button>

              <button
                className="styleForBtn colorSchedule"
                onClick={() => setputThisPlan(!putThisPlan)}
              >
                安排此行程
              </button>
            </div>
          </div>
        );
      })}
      ;
    </>
  );
};

export default RoomCard;
