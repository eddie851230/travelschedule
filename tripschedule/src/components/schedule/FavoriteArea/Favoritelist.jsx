import React, { useState, useEffect, useContext } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import AuthContext from '../../../contexts';
import { http } from '../../../WebAPI';

const Favoritelist = () => {
    // 判斷是否有會員登入中
    const { user } = useContext(AuthContext);
    console.log('user', user)


    // ---------------景點資訊
    // const spotListinfo = [
    //     {
    //         spotid: 'S01',
    //         imgsrc: '/img/Hotel_For_SQL/A01_01.jpg',
    //         info: '東京晴空塔1'
    //     },
    //     {
    //         spotid: 'S02',
    //         imgsrc: '/img/淺草寺(維基百科夜景).jpg',
    //         info: '淺草寺2'
    //     }, {
    //         spotid: 'S03',
    //         imgsrc: '/img/淺草寺.jpg',
    //         info: '淺草寺白天3'
    //     }, {

    //         spotid: 'S04',
    //         imgsrc: '/img/淺草寺.jpg',
    //         info: '淺草寺4'

    //     }
    // ];

    const [spotinfo, updateSpotinfo] = useState([]);

    useEffect(() => {

        http.get('http://localhost:8000/favorite/spot')
            .then(response => {
                let newArray = response.data.filter(({ user_id }) => user_id === user.id);
                return updateSpotinfo(newArray);
            })
            .catch(error => console.log(error));

    }, [user]);

    // -----------------飯店資訊
    // const hotelListinfo = [
    //     {
    //         hotelid: 'A01',
    //         imgsrc: '/img/Hotel_For_SQL/A01_01.jpg',
    //         info: '八蚊子飯店'
    //     },
    //     {
    //         hotelid: 'A02',
    //         imgsrc: '/img/Hotel_For_SQL/A02_01.webp',
    //         info: '我孫子飯店'
    //     }, {
    //         hotelid: 'A03',
    //         imgsrc: '/img/Hotel_For_SQL/A03_01.webp',
    //         info: '我爺爺飯店'
    //     }, {
    //         hotelid: 'A04',
    //         imgsrc: '/img/Hotel_For_SQL/A04_01.webp',
    //         info: '我奶奶飯店'
    //     }
    // ];

    const [hotelinfo, updateHotelinfo] = useState([]);
    useEffect(() => {

        http.get('http://localhost:8000/favorite/hotel')
            .then(response => {
                let newArray = response.data.filter(({ user_id }) => user_id === user.id);
                return updateHotelinfo(newArray);
            })
            .catch(error => console.log(error));

    }, [user]);


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

                            {spotinfo.map(({ attraction_id, path, name }, index) => (
                                <Draggable key={attraction_id} draggableId={attraction_id} index={index}>
                                    {provided => (
                                        <div ref={provided.innerRef}
                                            {...provided.dragHandleProps} key={attraction_id} className="listinfo"  draggable='true'>
                                            <img src={path} alt={name} />
                                            <div className="text">{name}</div>
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

                            {hotelinfo.map(({ hotel_id, path, name_CH }, index) => (
                                <Draggable key={hotel_id} draggableId={hotel_id} index={index}>
                                    {provided => (
                                        <div ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps} key={hotel_id} className="listinfo" draggable="true">
                                            <img src={path} alt={name_CH} />
                                            <div className="text">{name_CH}</div>
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