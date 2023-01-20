import React from 'react';
import "./AirticketSideFilter.css"
import SideFilterCompany from './SideFilter/SideFilterCompany/SideFilterCompany';
import SideFilterTime from './SideFilter/SideFilterTime/SideFilterTime';

function AirticketSideFilter() {
    return (
        <div className="AirticketSideFilterBar">
            <SideFilterCompany/>
            <SideFilterTime/>
        </div>
    );
}

export default AirticketSideFilter;