import moment from 'moment/moment';
import React from 'react';
import "./AirticketSearchList.css"

function AirticketSearchList(props) {


    // const searchArr = [departureSpotRef, arrivalSpotRef, departureDateRef, returnDateRef];

    return (
        <div id="AirticketSearchBar" className={props.setSearchList}>
            {/* <!-- 出發地點 --> */}
            <label htmlFor="departureSpot">出發地點</label>
            <select name="" id="departureSpot" onChange={(e) => props.setdepartureSpot(e.target.value)}>
                <option value="TPE">臺灣桃園國際機場(TPE)</option>
                <option value="NRT">成田國際機場(NRT)</option>
                <option value="HND">東京羽田國際機場(HND)</option>
            </select>
            {/* <!-- 到達地點 --> */}
            <label htmlFor="arrivalSpot">抵達地點</label>
            <select name="" id="arrivalSpot" onChange={(e) => props.setarrivalSpot(moment(e.target.value))}>
                <option value="HND">東京羽田國際機場(HND)</option>
                <option value="NRT">成田國際機場(NRT)</option>
                <option value="TPE">臺灣桃園國際機場(TPE)</option>
            </select>


            {/* <!-- 出發日期 --> */}
            <label htmlFor="departureDate">去程</label>
            <input type="date" name="" id="departureDate" defaultValue={moment().format("YYYY-MM-DD")} onChange={(e) => props.setdepartureDate(moment(e.target.value).format("YYYY-M-D"))} />
            {/* <!-- 回程日期 --> */}

            <label htmlFor="returnDate">回程</label>
            <input type="date" name="" id="returnDate" defaultValue={moment().format("YYYY-MM-DD")} onChange={(e) => props.setreturnDate(moment(e.target.value).format("YYYY-M-D"))} />
            {/* <!-- 人數 --> */}
            <label htmlFor="people">人數</label>
            <input type="number" max="8" min="1" id="people" defaultValue={1} onChange={(e) => props.setpeople(e.target.value)} />
        </div>

    );
}

export default AirticketSearchList;