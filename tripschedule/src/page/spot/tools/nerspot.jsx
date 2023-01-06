import React from 'react';
import "./nerspot.css";
const Nerspot = () => {
    return (
        <div>
            <div className="nerspot">
        <h1>附近景點</h1>
        <p>看看周圍的景點~</p>
        <div className="nerspotrow">
            <div className="nerspot-col">
                <img src="/img/jp1.jpg"/>
                <p>1231213212123123</p>
            </div>
            <div className="nerspot-col">
                <img src="/img/晴空塔.jpg"/>
                <p>1231213212123123</p>
            </div>
            <div className="nerspot-col">
                <img src="/img/disney.jpg"/>
                <p>1231213212123123</p>
            </div>
            <div className="nerspot-col">
                <img src="/img/mount fuji.jpg"/>
                <p>1231213212123123</p>
            </div>
        </div>
    </div>
        </div>
    );

}

export default Nerspot;