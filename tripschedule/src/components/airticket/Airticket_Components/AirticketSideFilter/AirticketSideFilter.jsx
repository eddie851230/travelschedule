import React from 'react';
import "./AirticketSideFilter.css"
import SideFilterCompany from './SideFilter/SideFilterCompany/SideFilterCompany';

function AirticketSideFilter() {
    return (
        <div class="AirticketSideFilterBar">
            <SideFilterCompany/>
            <SideFilterCompany/>
            <SideFilterCompany/>
        </div>
    );
}

export default AirticketSideFilter;