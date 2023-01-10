import React from 'react';
import "./AirticketTicketList.css"
import TicketListTicket from './TicketListTicket/TicketListTicket';

function AirticketTicketList(props) {
    return (
        <div id='AirticketTicketList'>
            <TicketListTicket apiData={props.apiData}/>
   
        </div>
     );
}

export default AirticketTicketList;