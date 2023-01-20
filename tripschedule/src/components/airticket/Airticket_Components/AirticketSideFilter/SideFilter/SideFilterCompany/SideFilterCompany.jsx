import React from 'react';
import "./SideFilterCompany.css"
import Fake from './Fake';



function SideFilterCompany() {

    var CarriersObj = Object.values(Fake.content.results.carriers)

    const CoolCatMaker = CarriersObj.map((x) => {
        return (
            <div key={"Carriers-" + x.iata}>
                <label htmlFor={"Carriers-" + x.iata}>{x.name}</label>
                <input type="checkbox" id={"Carriers-" + x.iata} />
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