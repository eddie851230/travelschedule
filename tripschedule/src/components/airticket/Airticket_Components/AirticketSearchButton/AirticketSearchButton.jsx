import React from 'react';
import "./AirticketSearchButton.css"

function AirticketSearchButton(props) {



    function col() {
        props.setPage()
        props.searchRef()
    }

    return (
        <>
            <div id='AirticketSearchButton'
                onClick={col}
                className={props.setSearchButton}>開始</div>
        </>
    );
}

export default AirticketSearchButton;