import React from 'react';
import Footer from "../../components/tool/Footer";
import Video from "../index/tools/video";
import Teach from "../index/tools/teach";
import Hhtspot from "../index/tools/homeHotSpot";
import Homesch from "../index/tools/homeHotSchedule";
import "../index/Home.css";
const Home = () => {

    return (
        <div>
            < Video />
            < Teach />
            < Homesch />
            < Hhtspot />
            <section className="cta">
                <h1>有任何建議都可以聯絡我們</h1>
                <a href="" className="btnhome"><button>聯絡我們</button></a>
            </section>

            <Footer />
        </div>
    );
}

export default Home;