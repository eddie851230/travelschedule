import React from 'react';
import "./spserch.css";
const Spserch = () => {
    return (
        <div>
            <div className="chareati">
                <h1>景點搜尋</h1>
                <p>瞄準東京的景點一網打盡吧!</p>
            </div>

            <div className="charea">
                <div className="chicon">
                    <div className="spcicons">
                        <input type="radio" name="iconer" />c8 <br />
                        <input type="radio" name="iconer" />ac<br />
                        <input type="radio" name="iconer" />ca<br />
                        <input type="radio" name="iconer" />ca<br />
                        <input type="radio" name="iconer" />casc<br />
                        <input type="radio" name="iconer" />casc<br />
                        <input type="radio" name="iconer" />cac<br />
                        <input type="radio" name="iconer" />cac<br />
                    </div>
                </div>
                <div className="spotde">
                    <div className="spdebox"></div>
                    <div className="spde">
                        <img src="./img/jp1.jpg" alt="" />
                        <div className="spdeInformation">
                            <h1>淺滄富士神社</h1>
                            <p>
                                想要觀賞富士山，新倉富士淺間神社位置絕佳，可以說是人氣第一。<br />
                                秋天有楓葉、春天則是鋪著粉紅色花海的櫻花，富士山景在每個山坡處皆有不同風情，
                                就像是設計好的背景牆美的不可思議。
                            </p>
                            <div className="spdec">
                                <div className="spdeCard1">
                                    <h4>價格:</h4>
                                    <h3>0NT</h3>
                                </div>
                                <div className="spdeCard2">
                                    <h4>熱門程度:6.8</h4>

                                    </div>
                                <div className="spdeCard3">
                                    <button type='button'>了解詳情</button>
                                    </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="spde"></div>
                    <div className="spde"></div>
                    <div className="spde"></div>
                    <div className="spde"></div>
                    <div className="spde"></div>
                    <div className="spde"></div>
                    <div className="spde"></div>
                    <div className="spde"></div>
                    <div className="spde"></div>
                    <div className="spde"></div>
                    <div className="spde"></div>
                    <div className="spde"></div>
                </div>
            </div>
        </div>
    );

}

export default Spserch;