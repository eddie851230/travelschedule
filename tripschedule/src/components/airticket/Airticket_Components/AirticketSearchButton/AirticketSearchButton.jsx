import React from 'react';
import "./AirticketSearchButton.css"

function AirticketSearchButton(props) {
    
    return ( 
        <>
            <div id='AirticketSearchButton' onClick={props.setPage}>開始</div>
        </>
     );
}

export default AirticketSearchButton;