import React, { useEffect, useState } from 'react';
import "./AirBackgroundImg.css"

function AirBackgroundImg() {
        const [BgimgState, setBgimgState] = useState("Airtickedimg_none");

        useEffect(() => {
                setBgimgState("Airtickedimg_full")
        },[])

        return (
                <>
                        <div id='Airticket_img' className={BgimgState}></div>
                </>
        );

}

export default AirBackgroundImg;