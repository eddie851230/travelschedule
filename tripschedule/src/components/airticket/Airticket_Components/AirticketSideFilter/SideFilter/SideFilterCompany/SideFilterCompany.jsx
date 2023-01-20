import React from 'react';
import "./SideFilterCompany.css"

function SideFilterCompany() {
    var fake = ["cool", "cat", "men", "tou"]

    const CoolCatMaker = fake.map((x) => {
        return (
            <div>
                {x}<input type="checkbox" name="company" value={x}/>
            </div>
        )
    })

    return (
        <>
        <div id='SideFilterCompanyTitle'>Title</div>
        <div id="SideFilterCompany">
            {CoolCatMaker}
        </div>
        </>
    );
}

export default SideFilterCompany;