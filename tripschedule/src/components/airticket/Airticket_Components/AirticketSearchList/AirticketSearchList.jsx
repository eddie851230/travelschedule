import React, { useRef } from 'react';
import "./AirticketSearchList.css"

function AirticketSearchList(props) {

    const departureSpotRef = useRef()
    const arrivalSpotRef = useRef()
    const departureDateRef = useRef()
    const returnDateRef = useRef()
    
    props.setAirticketSearch("coolcat")

    // const searchArr = [departureSpotRef, arrivalSpotRef, departureDateRef, returnDateRef];

    return (
        <div id="AirticketSearchBar" className={props.setSearchList}>
            {/* <!-- 出發地點 --> */}
            <label htmlFor="departureSpot">出發地點</label>
            <select name="" id="departureSpot" ref={departureSpotRef}>
                <option value="TPE">臺灣桃園國際機場(TPE)</option>
                <option value="NRT">成田國際機場(NRT)</option>
                <option value="HND">東京羽田國際機場(HND)</option>
            </select>
            {/* <!-- 到達地點 --> */}
            <label htmlFor="arrivalSpot">抵達地點</label>
            <select name="" id="arrivalSpot" ref={arrivalSpotRef}>
                <option value="TPE">臺灣桃園國際機場(TPE)</option>
                <option value="NRT">成田國際機場(NRT)</option>
                <option value="HND">東京羽田國際機場(HND)</option>
            </select>


            {/* <!-- 出發日期 --> */}
            <label htmlFor="departureDate">去程</label>
            <input type="date" name="" id="departureDate" ref={departureDateRef} />
            {/* <!-- 回程日期 --> */}

            <label htmlFor="returnDate">回程</label>
            <input type="date" name="" id="returnDate" ref={returnDateRef} />
            {/* <!-- 人數 --> */}
            <label htmlFor="people">人數</label>
            <input type="number" max="8" min="1" id="people" />
        </div>

    );
}

export default AirticketSearchList;