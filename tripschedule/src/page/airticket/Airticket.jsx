import React, { useState } from 'react';
import AirBackgroundImg from "../../components/airticket/Airticket_Components/AirBackgroundImg/AirBackgroundImg"
import AirticketSearchList from '../../components/airticket/Airticket_Components/AirticketSearchList/AirticketSearchList';
import AirticketSearchButton from '../../components/airticket/Airticket_Components/AirticketSearchButton/AirticketSearchButton';
import AirticketSideFilter from '../../components/airticket/Airticket_Components/AirticketSideFilter/AirticketSideFilter';
import AirticketTicketList from '../../components/airticket/Airticket_Components/AirticketTicketList/AirticketTicketList';
import "../airticket/Airticket.css";



function Airticket() {    

    const [AirticketSearch, setAirticketSearch] = useState();
    
    const searchRef = () => {
        console.log(AirticketSearch)
    }
    
    const [AirticketPageState, setAirticketPageState] = useState("HomePage");

    switch (AirticketPageState) {
        case "HomePage":
            return (
                <div id="AirticketPage" className='AirticketPageSize_full'>
                    <AirBackgroundImg AirticketImgSize="Airticketimg_full"/>
                    <AirticketSearchList setSearchList="SearchList_full" setAirticketSearch={(x) => setAirticketSearch(x)}/>
                    <AirticketSearchButton setPage={() => setAirticketPageState("ChoosePage")} searchRef={() => searchRef()} setSearchButton="SearchButton_full"/>
                </div>
            )

        case "ChoosePage":
            return (
                <div id="AirticketPage" className='AirticketPageSize_free'>
                    <AirBackgroundImg AirticketImgSize="Airticketimg_top"/>
                    <AirticketSearchList setSearchList="SearchList_free" setAirticketSearch={(x) => setAirticketSearch(x)}/>
                    <AirticketSearchButton setPage={() => setAirticketPageState("ChoosePage")} searchRef={() => searchRef()} setSearchButton="SearchButton_free"/>

                    <div className="ChoosePageOutput">
                       <AirticketSideFilter/>
                        <AirticketTicketList/>
                    </div>
                </div>
            )
            
        default:
            return <></>;
    }
}

export default Airticket;