import React, { useEffect, useState } from 'react';
import AirBackgroundImg from "../../components/airticket/Airticket_Components/AirBackgroundImg/AirBackgroundImg"
import AirticketSearchList from '../../components/airticket/Airticket_Components/AirticketSearchList/AirticketSearchList';
import AirticketSearchButton from '../../components/airticket/Airticket_Components/AirticketSearchButton/AirticketSearchButton';
import AirticketSideFilter from '../../components/airticket/Airticket_Components/AirticketSideFilter/AirticketSideFilter';
import AirticketTicketList from '../../components/airticket/Airticket_Components/AirticketTicketList/AirticketTicketList';
import "../airticket/Airticket.css";
import moment from 'moment';




function Airticket() {

    const url = "https://partners.api.skyscanner.net/apiservices/v3/flights/live/search/create";

    const [apiData, setapiData] = useState();
    const [sideFilter, setsideFilter] = useState();
    const [departureSpot, setdepartureSpot] = useState("TPE");
    const [arrivalSpot, setarrivalSpot] = useState("HND");
    const [departureDate, setdepartureDate] = useState(moment().format("YYYY-M-D"));
    const [returnDate, setreturnDate] = useState(moment().format("YYYY-M-D"));
    const [people, setpeople] = useState(1);

    const searchRef = () => {
        console.log(returnDate)
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                "query": {
                    "market": "TW",
                    "locale": "zh-TW",
                    "currency": "TWD",
                    "queryLegs": [
                        {
                            "originPlaceId": {
                                "iata": `${departureSpot}`
                            },
                            "destinationPlaceId": {
                                "iata": `${arrivalSpot}`
                            },
                            "date": {
                                "year": `${departureDate.split("-")[0]}`,
                                "month": `${departureDate.split("-")[1]}`,
                                "day": `${departureDate.split("-")[2]}`
                            }
                        }
                    ],
                    "adults": `${people}`,
                    "cabinClass": "CABIN_CLASS_ECONOMY"
                }
            }),
            headers: {
                "x-api-key": "prtl6749387986743898559646983194"
            }
        })
            .then((response) => response.json())
            .then((r) => {
                setapiData(r)
            })
            .catch((error) => {
                console.log("error");
            })
    }

    const [AirticketPageState, setAirticketPageState] = useState("HomePage");

    switch (AirticketPageState) {
        case "HomePage":
            return (
                <div id="AirticketPage" className='AirticketPageSize_full'>
                    <AirBackgroundImg AirticketImgSize="Airticketimg_full" />
                    <AirticketSearchList setSearchList="SearchList_full"
                        setdepartureSpot={(e) => setdepartureSpot(e)}
                        setarrivalSpot={(e) => setarrivalSpot(e)}
                        setdepartureDate={(e) => setdepartureDate(e)}
                        setreturnDate={(e) => setreturnDate(e)}
                        setpeople={(e) => setpeople(e)}
                    />
                    <AirticketSearchButton setPage={() =>
                        setTimeout(() => {
                            setAirticketPageState("ChoosePage")
                        }, 2000)
                    } searchRef={() => searchRef()} setSearchButton="SearchButton_full" />
                </div>
            )

        case "ChoosePage":
            return (
                <div id="AirticketPage" className='AirticketPageSize_free'>
                    <AirBackgroundImg AirticketImgSize="Airticketimg_top" />
                    <AirticketSearchList setSearchList="SearchList_free"
                        setdepartureSpot={(e) => setdepartureSpot(e)}
                        setarrivalSpot={(e) => setarrivalSpot(e)}
                        setdepartureDate={(e) => setdepartureDate(e)}
                        setreturnDate={(e) => setreturnDate(e)}
                        setpeople={(e) => setpeople(e)}
                    />
                    <AirticketSearchButton setPage={() =>
                        setTimeout(() => {
                            setAirticketPageState("ChoosePage")
                        }, 2000)
                        } searchRef={() => searchRef()} setSearchButton="SearchButton_free" />

                    <div className="ChoosePageOutput">
                        <AirticketSideFilter apiData={apiData} 
                        setsideFilter={(e) => setsideFilter(e)}
                        sideFilter={sideFilter}
                        />
                        <AirticketTicketList apiData={apiData} 
                        sideFilter={sideFilter}
                        />
                    </div>
                </div>
            )
        default:
            return <></>;
    }
}

export default Airticket;