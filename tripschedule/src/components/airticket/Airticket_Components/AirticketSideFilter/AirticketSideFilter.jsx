import React from 'react';
import "./AirticketSideFilter.css"
import SideFilterCompany from './SideFilter/SideFilterCompany/SideFilterCompany';
import SideFilterTime from './SideFilter/SideFilterTime/SideFilterTime';

function AirticketSideFilter(props) {
    return (
        <div className="AirticketSideFilterBar">
            <SideFilterCompany apiData={props.apiData} setsideFilter={e => props.setsideFilter(e)} sideFilter={props.sideFilter}/>
            <SideFilterTime/>
        </div>
    );
}

export default AirticketSideFilter;