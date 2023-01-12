import React, { useEffect, useState } from 'react';
import "./TicketListTicket.css"
// import Fake from '../../AirticketSideFilter/SideFilter/SideFilterCompany/Fake';

function TicketListTicket(props) {
  const [FilterArr, setFilterArr] = useState([]);
  
  var Data = props.apiData
  var ticketlegsObj = Object.values(Data.content.results.legs)
  var ticketlegskey = Object.keys(Data.content.results.legs)
  var ticketSearch = Data

  // LEGS
  const ticketMake = ticketlegsObj.map((ticket, x) => {
    var ticketNum = ticketlegskey[x]


    var originPlaceId = ticket.originPlaceId
    var destinationPlaceId = ticket.destinationPlaceId
    var marketingCarrierIds = ticket.marketingCarrierIds[0]
    var priceAmount = ticketSearch.content.results.itineraries[ticketNum].pricingOptions[0].price.amount
    var deepLink = ticketSearch.content.results.itineraries[ticketNum].pricingOptions[0].items[0].deepLink

    // 時間
    var startDateTime = ticket.departureDateTime
    var endDateTime = ticket.arrivalDateTime



    return (
      <div className={marketingCarrierIds + " ticketBox"} key={ticketNum}>
        {marketingCarrierIds}
        <img className="ticketCarrierImg" src={ticketSearch.content.results.carriers[marketingCarrierIds].imageUrl} alt={ticketSearch.content.results.carriers[marketingCarrierIds].name} />

        <div className='placeTime'>

          <div id="airTime">
            {/* 起飛時間 */}
            <div className='ticketStartTime'>
              {String(startDateTime.hour).padStart(2, "0")} : {String(startDateTime.minute).padStart(2, "0")}
            </div>

            {/* 抵達時間 */}
            <div className='ticketArrivalTime'>
              {String(endDateTime.hour).padStart(2, "0")} : {String(endDateTime.minute).padStart(2, "0")}
            </div>
          </div>

          <div id="airPlace">
            {/* 起飛機場 */}
            <div className="ticketoriginPlace">
              {ticketSearch.content.results.places[originPlaceId].name}
            </div>

            {/* 抵達地點 */}
            <div className="ticketdestinationPlace">
              {ticketSearch.content.results.places[destinationPlaceId].name}
            </div>
          </div>

          <div><a href={deepLink}>LINK</a></div>
        </div>

        <div className="ticketPrice">價格 : {priceAmount / 1000}</div>

      </div>
    )
  })

  useEffect(() => {
    var filterArr = []
    for (let key in props.sideFilter) {
      if (props.sideFilter[key] === true) {
        filterArr.push(key)
      }
    }
    setFilterArr(filterArr)
  }, [props.sideFilter])

  const filterTicket = ticketMake.filter(ticket => {
    return FilterArr.includes((ticket.props.className).split(" ")[0]);
  });



  return (
    <>
      {filterTicket}
    </>
  );
}
 

export default TicketListTicket;