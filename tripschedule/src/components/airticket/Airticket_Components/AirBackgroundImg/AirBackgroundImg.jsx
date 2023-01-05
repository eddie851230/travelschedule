import React, { useEffect, useState } from 'react';
import "./AirBackgroundImg.css"

function AirBackgroundImg() {
        const [BgimgState, setBgimgState] = useState("Airticketimg_none");

        useEffect(() => {
                setBgimgState("Airticketimg_full")
        },[])

        return (
                <>
                        <div id='Airticket_img' className={BgimgState}></div>
                </>
        );

}

export default AirBackgroundImg;