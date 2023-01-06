import React from 'react';
import "./sphot.css";
const Sphot = () => {
return (
        <div>
            <div className="sphotspot">
        <h1>熱門景點</h1>
        <p>看看大家都喜歡去哪玩!</p>
        <div className="sprow">
            <div className="sphotspot-col">
                <img src="/img/jp1.jpg"/>
                <p>1231213212123123</p>
            </div>
            <div className="sphotspot-col">
                <img src="/img/晴空塔.jpg"/>
                <p>1231213212123123</p>
            </div>
            <div className="sphotspot-col">
                <img src="/img/disney.jpg"/>
                <p>1231213212123123</p>
            </div>
            <div className="sphotspot-col">
                <img src="/img/mount fuji.jpg"/>
                <p>1231213212123123</p>
            </div>
        </div>
    </div>
        </div>
    );

}

export default Sphot;