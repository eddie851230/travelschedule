import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const SchduleListtest = () => {

    const airPlaneDepartinfo = [
        {
            type: 'airplanelist',
            id: "depart",
            day: "Day1",
            dayTime: "morning",
            flyIcon: "/img/樂桃icon.png",
            airportName: "成田機場",
            arrivingTime: "08:00",
            airPlaneName: "樂桃航空",
            addr: "1-1 Furugome, Narita, Chiba 282-0004日本",
            herf: "/Airticket/output/1"
        }]
    const spotlist = [{
        type: 'spotlist',
        id: "S01",
        day: "Day1",
        dayTime: "morning",
        spotImg: "/img/景點相片預覽(明亮).jpg",
        spotName: "東京鐵塔",
        duringTime: "1小時",
        addr: "1-1 Furugome, Narita, Chiba 282-0004日本",
        href: "/Spot"
    }, {
        type: 'spotlist',
        id: "S02",
        day: "Day1",
        dayTime: "morning",
        spotImg: "/img/景點相片預覽(暗色).jpg",
        spotName: "東京晴空塔",
        duringTime: "1.5小時",
        addr: "日本東京銀座區富人天堂",
        href: "/Spot"
    }, {
        type: 'spotlist',
        id: "S03",
        day: "Day1",
        dayTime: "afternoon",
        spotImg: "/img/淺草寺.jpg",
        spotName: "東京淺草寺",
        duringTime: "2小時",
        addr: "日本東京銀座區假鬼假怪逛不了街",
        href: "/Spot"
    }]
    const hotellist = [{
        type: 'hotellist',
        id: "S04",
        day: "Day1",
        dayTime: "evening",
        spotImg: "/img/淺草寺(維基百科夜景).jpg",
        spotName: "東京淺草寺(晚上)",
        duringTime: "2小時",
        addr: "日本東京銀座區假鬼假怪逛不了街",
        href: "/Spot"
    }
    ];

    const morningSpot=spotlist.filter(elem=>elem.dayTime==="morning");
    const afternoonSpot=spotlist.filter(elem=>elem.dayTime==="afternoon");
    const eveningSpot=spotlist.filter(elem=>elem.dayTime==="evening");



    // 調整拖曳功能
    // const [everyinfo, updateEveryinfo] = useState(everySpotinfo);

    // everySpotinfo.filter空的會回傳[]
    // function handleOnDragEnd(result) {
    //     if (!result.destination) return;
    //     const everySpotItem = Array.from(everyinfo);
    //     const [everyreorderedItem] = everySpotItem.splice(result.source.index, 1);
    //     everySpotItem.splice(result.destination.index, 0, everyreorderedItem);
    //     updateEveryinfo(everySpotItem);

    // }

    return (


        <div className="dayNum" id='Day1'>
            Day<span> 1 </span> : 禮拜<span>一</span>



            <div className="morning">
                <div className="dayTime">上午</div>

                {/* <!-- 飛機格 --> */}
                {airPlaneDepartinfo.map(({ id, flyIcon, airportName, arrivingTime, airPlaneName, addr, herf }, index) => (
                    <div className="airplane" key={id}>
                        <img src={flyIcon} alt={airPlaneName} />
                        <div className="text">
                            <div className="name">{airportName}</div>
                            <div className="info">
                                抵達時間:
                                <span>{arrivingTime}</span>&Iota;<span>{airPlaneName}</span>
                            </div>
                            <div className="Addr">
                                {addr}
                            </div>
                        </div>
                        <a href={herf}>
                            <button>
                                查看
                                <br />
                                詳情
                            </button>

                        </a>
                    </div>
                ))}
                {/* <!-- 景點或飯店格 --> */}
                {morningSpot.map(
                    ({ id, spotImg, spotName, duringTime, addr, href }, index) => (


                        <div className="spot">
                            <img src={spotImg} alt={id} />
                            <div className="text">
                                <div className="name">{spotName}</div>
                                <div className="info">
                                    遊玩時間: <span>{duringTime}</span>
                                </div>
                                <div className="Addr">
                                    {addr}
                                </div>
                            </div>
                            <a href={href}>
                                <button>
                                    查看
                                    <br />
                                    詳情
                                </button>
                            </a>
                        </div>))
                }


            </div>

            <div className="afternoon">
                <div className="dayTime">下午</div>

                {afternoonSpot.map(
                    ({ id, spotImg, spotName, duringTime, addr, href }, index) => (


                        <div className="spot">
                            <img src={spotImg} alt={id} />
                            <div className="text">
                                <div className="name">{spotName}</div>
                                <div className="info">
                                    遊玩時間: <span>{duringTime}</span>
                                </div>
                                <div className="Addr">
                                    {addr}
                                </div>
                            </div>
                            <a href={href}>
                                <button>
                                    查看
                                    <br />
                                    詳情
                                </button>
                            </a>
                        </div>)
                )}

            </div>
            <div className="evening">
                <div className="dayTime">晚間</div>

                {eveningSpot.map(
                    ({ id, spotImg, spotName, duringTime, addr, href }, index) => (


                        <div className="spot">
                            <img src={spotImg} alt={id} />
                            <div className="text">
                                <div className="name">{spotName}</div>
                                <div className="info">
                                    遊玩時間: <span>{duringTime}</span>
                                </div>
                                <div className="Addr">
                                    {addr}
                                </div>
                            </div>
                            <a href={href}>
                                <button>
                                    查看
                                    <br />
                                    詳情
                                </button>
                            </a>
                        </div>)
                )}

            </div>
        </div >)
}







export default SchduleListtest;