import React, { useEffect } from 'react';
import "./SideFilterCompany.css"



function SideFilterCompany(props) {
    var Data = props.apiData
    var CarriersObj = Object.values(Data.content.results.carriers)
    var Carrierskey = Object.keys(Data.content.results.carriers)

    // first
    var searchStateObj = Carrierskey.reduce((a, v) => ({...a, [v]: true}),{})
    useEffect(() => {props.setsideFilter(searchStateObj)},[])


    const searchcheck = (e) => {
        var sideValue = props.sideFilter;
        sideValue[e.target.value] = e.target.checked
        props.setsideFilter(sideValue)
    };
    
    const CoolCatMaker = CarriersObj.map((x, Carrykey) => {
        return (
            <div key={"Carriers-" + x.iata}>
                <label htmlFor={"Carriers-" + x.iata}>{x.name}</label>
                <input type="checkbox" id={"Carriers-" + x.iata} onChange={searchcheck} value={Carrierskey[Carrykey]} defaultChecked/>
            </div>
        )
    })

    return (
        <>
            <div id='SideFilterCompanyTitle'>Company</div>
            <div id="SideFilterCompany">
                {CoolCatMaker}
            </div>
        </>
    );
}

export default SideFilterCompany;