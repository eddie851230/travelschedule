import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";


const Favoritelist = () => {
    // ---------------景點資訊
    const spotListinfo = [
        {
            spotid: 'S01',
            imgsrc: '/img/Hotel_For_SQL/A01_01.jpg',
            info: '東京晴空塔1'
        },
        {
            spotid: 'S02',
            imgsrc: '/img/淺草寺(維基百科夜景).jpg',
            info: '淺草寺2'
        }, {
            spotid: 'S03',
            imgsrc: '/img/淺草寺.jpg',
            info: '淺草寺白天3'
        }, {

            spotid: 'S04',
            imgsrc: '/img/淺草寺.jpg',
            info: '淺草寺4'

        }
    ];

    const [spotinfo, updateSpotinfo] = useState(spotListinfo);

    // -----------------飯店資訊
    const hotelListinfo = [
        {
            hotelid: 'A01',
            imgsrc: '/img/Hotel_For_SQL/A01_01.jpg',
            info: '八蚊子飯店'
        },
        {
            hotelid: 'A02',
            imgsrc: '/img/Hotel_For_SQL/A02_01.webp',
            info: '我孫子飯店'
        }, {
            hotelid: 'A03',
            imgsrc: '/img/Hotel_For_SQL/A03_01.webp',
            info: '我爺爺飯店'
        }, {
            hotelid: 'A04',
            imgsrc: '/img/Hotel_For_SQL/A04_01.webp',
            info: '我奶奶飯店'
        }
    ];

    const [hotelinfo, updateHotelinfo] = useState(hotelListinfo);

    function fhandleOnDragEnd(result) {
        // console.log(result);
        if (!result.destination) return;
        // result.source.index把元件放到index的哪裡
        // result.destination.index從index的哪裡出發
        const hotelItems = Array.from(hotelinfo);
        const [hotelreorderedItem] = hotelItems.splice(result.source.index, 1);
        hotelItems.splice(result.destination.index, 0, hotelreorderedItem);
        updateHotelinfo(hotelItems);

        const spotItems = Array.from(spotinfo);
        const [spotreorderedItem] = spotItems.splice(result.source.index, 1);
        spotItems.splice(result.destination.index, 0, spotreorderedItem);
        updateSpotinfo(spotItems);
    }

    return (
        <DragDropContext onDragEnd={fhandleOnDragEnd} >
            <div className="list">

                {/* 景點 */}
                <Droppable droppableId='fSpot'>
                    {provided => (
                        <div className="fSpot" ref={provided.innerRef}
                            {...provided.droppableProps} >

                            {spotinfo.map(({ spotid, imgsrc, info }, index) => (
                                <Draggable key={spotid} draggableId={spotid} index={index}>
                                    {provided => (
                                        <div ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps} key={spotid} className="listinfo" >
                                            <img src={imgsrc} alt={info} />
                                            <div className="text">{info}</div>
                                        </div>
                                    )

                                    }

                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>


                {/* 飯店 */}
                <Droppable droppableId='fHotel'>
                    {provided => (
                        <div className="fHotel" ref={provided.innerRef}
                            {...provided.droppableProps} >

                            {hotelinfo.map(({ hotelid, imgsrc, info }, index) => (
                                <Draggable key={hotelid} draggableId={hotelid} index={index}>
                                    {provided => (
                                        <div ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps} key={hotelid} className="listinfo" >
                                            <img src={imgsrc} alt={info} />
                                            <div className="text">{info}</div>
                                        </div>
                                    )

                                    }

                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>

    )
}

export default Favoritelist;