import React from 'react';
import HotspotRow from "./test";
import Hotspot01 from "./hotspot01";
import "./sphot.css";
const Sphot = () => {
return (
        <div>
            <div className="sphotspot">
        <h1>熱門景點</h1>
        <p>看看大家都喜歡去哪玩!</p>
        <HotspotRow/>
        <Hotspot01/>
        


    </div>
        </div>
    );

}

export default Sphot;