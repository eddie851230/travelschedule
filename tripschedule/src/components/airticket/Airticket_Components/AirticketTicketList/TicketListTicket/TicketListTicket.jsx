import React from 'react';
import "./TicketListTicket.css"
import Fake from '../../AirticketSideFilter/SideFilter/SideFilterCompany/Fake';


function TicketListTicket() {

  var ticketlegsObj = Object.values(Fake.content.results.legs)
  var ticketNum = Object.keys(Fake.content.results.legs)
  var ticketSearch = Fake
  
  // LEGS
  const ticketMake = ticketlegsObj.map((ticket) => {
    console.log(ticketNum)
    var originPlaceId = ticket.originPlaceId
    var destinationPlaceId = ticket.destinationPlaceId

    return (
      <div className="ticketBox" key={ticket.segmentIds}>
        <img src="https://logos.skyscnr.com/images/airlines/03.png" alt="peach" />
        <div className="ticketFlyingSpot">
          起飛機場: {ticketSearch.content.results.places[originPlaceId].name}
          <br/>
          抵達地點: {ticketSearch.content.results.places[destinationPlaceId].name}
        </div>
        <div className="ticketPrice">"價格:12345NTD"</div>
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