import React from 'react';
import Footer from "../../components/tool/Footer";
import Sptop from "../spot/tools/spotTop";
import Sphot from "../spot/tools/sphot";
import Spserch from "../spot/tools/spserch";
import Nerspot from "../spot/tools/nerspot";
import Oneday from "../spot/tools/oneday";
// import Calendar from "../spot/tools/calendar/onDragEnd";
const Spot = () => {
        return (<div>
            <Sptop/>
            <Sphot/>
            <Spserch/>
            <Nerspot/>
            <Oneday/>
            <Footer/>
            {/* <Calendar/> */}
            </div>
        );
}
 
export default Spot;