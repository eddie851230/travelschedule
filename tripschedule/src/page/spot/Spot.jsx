import React from 'react';
import Footer from "../../components/tool/Footer";
import Sptop from "../spot/tools/spotTop";
import Sphot from "../spot/tools/sphot";
import Spserch from "../spot/tools/spserch";
import Nerspot from "../spot/tools/nerspot";
import Oneday from "../spot/tools/oneday";
const Spot = () => {
        return (<div>
            <Sptop/>
            <Sphot/>
            <Spserch/>
            <Nerspot/>
            <Oneday/>
            <Footer/>
            </div>
        );
}
 
export default Spot;