import React, { Component } from 'react';
import "./css/airplaneMain.css";


class Airticket extends Component {
    state = {}
    render() {
        return (
            <div className='airticket'>
                <div className="airplaneFliter">
                    {/* <!-- 出發地點 --> */}
                    <label for="departureSpot">出發地點</label>
                    <select name="" id="departureSpot">
                        <option value="TPE" selected>臺灣桃園國際機場(TPE)</option>
                        <option value="NRT">成田國際機場(NRT)</option>
                        <option value="HND">東京羽田國際機場(HND)</option>
                    </select>
                    {/* <!-- 到達地點 --> */}
                    <label for="arrivalSpot">抵達地點</label>
                    <select name="" id="arrivalSpot">
                        <option value="TPE">臺灣桃園國際機場(TPE)</option>
                        <option value="NRT">成田國際機場(NRT)</option>
                        <option value="HND" selected>東京羽田國際機場(HND)</option>
                    </select>
                    {/* <!-- 出發日期 --> */}
                    <label for="departureDate">去程</label><input type="date" name="" id="departureDate" />
                    {/* <!-- 回程日期 --> */}
                    <label for="returnDate">回程</label><input type="date" name="" id="returnDate" />
                    {/* <!-- 人數 --> */}
                    <label for="people">人數</label><input type="number" max="8" min="1" id="people" />
                </div>
                {/* <!-- 確認按鈕 --> */}
                <input type="submit" value="開始" />
            </div>
        );
    }
}

export default Airticket;