import React from 'react';
import Footer from "../../components/tool/Footer";
import SpotImg from "./tools/spotdetailpage/scroll";
import SpotDetailp from "./tools/spotdetailpage/spotdetailp";
import SpotDetailTop from "./tools/spotdetailpage/top";
import SpotTime from "./tools/spotdetailpage/spotTime";
import "./Spotdetail.css";



const Spotdetail = () => {

    return (<div>

        <div className='topscroll'>
            <SpotImg />
            <SpotTime />
        </div>
        <SpotDetailTop />
        <SpotDetailp />
        <Footer />
        {/* <Calendar/> */}
    </div>
    );
}

export default Spotdetail;