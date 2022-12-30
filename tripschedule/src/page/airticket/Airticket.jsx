import React, { useState } from 'react';
import AirBackgroundImg from "../../components/airticket/Airticket_Components/AirBackgroundImg/AirBackgroundImg"
import AirticketSearchList from '../../components/airticket/Airticket_Components/AirticketSearchList/AirticketSearchList';
import AirticketSearchButton from '../../components/airticket/Airticket_Components/AirticketSearchButton/AirticketSearchButton';
import "../airticket/Airticket.css";


function Airticket() {
    const [AirticketPageState, setAirticketPageState] = useState("HomePage");

    switch (AirticketPageState) {
        case "HomePage":
            return (
                <div id="AirticketPage" className='AirticketPageSize_full'>
                    <AirBackgroundImg AirticketImgSize="Airticketimg_full"/>
                    <AirticketSearchList />
                    <AirticketSearchButton setPage={e => setAirticketPageState("ChoosePage")} />
                </div>
            )

        case "ChoosePage":
            return (
                <div id="AirticketPage" className='AirticketPageSize_free'>
                    <AirBackgroundImg AirticketImgSize="Airticketimg_top"/>
                </div>
            )
            
        default:
            return <></>;
    }
}

export default Airticket;