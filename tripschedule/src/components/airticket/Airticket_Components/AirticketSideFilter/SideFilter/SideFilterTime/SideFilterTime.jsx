import React from 'react';
import "./SideFilterTime.css"

function SideFilterTime() {
    var fake = ["cool", "cat", "men", "tou"]

    const CoolCatMaker = fake.map((x) => {
        return (
            <div>
                {x}<input type="checkbox" name="Time" value={x}/>
            </div>
        )
    })

    return (
        <>
        <div id='SideFilterTimeTitle'>Title</div>
        <div id="SideFilterTime">
            {CoolCatMaker}
        </div>
        </>
    );
}

export default SideFilterTime;