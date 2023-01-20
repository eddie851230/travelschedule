import React from 'react';
import "./TicketListTicket.css"
import Fake from '../../AirticketSideFilter/SideFilter/SideFilterCompany/Fake';


function TicketListTicket() {

  var ticketlegsObj = Object.values(Fake.content.results.legs)
  var ticketlegskey = Object.keys(Fake.content.results.legs)
  var ticketSearch = Fake
  
  // LEGS
  const ticketMake = ticketlegsObj.map((ticket, x) => {
    var ticketNum = ticketlegskey[x]
    
    
    var originPlaceId = ticket.originPlaceId
    var destinationPlaceId = ticket.destinationPlaceId
    var marketingCarrierIds = ticket.marketingCarrierIds[0]
    var priceAmount = ticketSearch.content.results.itineraries[ticketNum].pricingOptions[0].price.amount

    // 時間
    var startDateTime = ticket.departureDateTime
    var endDateTime = ticket.arrivalDateTime

    return (
      <div className="ticketBox" key={ticketNum}>
        <img className="ticketCarrierImg" src={ticketSearch.content.results.carriers[marketingCarrierIds].imageUrl} alt={ticketSearch.content.results.carriers[marketingCarrierIds].name}  />
        <div className="ticketFlyingPlace">
          起飛機場 : {ticketSearch.content.results.places[originPlaceId].name} 抵達地點 : {ticketSearch.content.results.places[destinationPlaceId].name}
        </div>

        <div className='ticketStartTime'>
          起飛時間  時 : {startDateTime.hour}  分 : {startDateTime.minute}
        </div>

        <div className='ticketArrivalTime'>
          抵達時間  時 : {endDateTime.hour}  分 : {endDateTime.minute}
        </div>

        <div className="ticketPrice">價格 : {priceAmount/1000}</div>
      </div>
    )
  })

  

  return (
    <>
      {ticketMake}
    </>
  );
}

export default TicketListTicket;