import React,{useState} from 'react';
import Footer from "../../components/tool/Footer";
import Video from "../index/tools/video";
import Teach from "../index/tools/teach";
import Hhtspot from "../index/tools/homeHotSpot";
import Homesch from "../index/tools/homeHotSchedule";
import "../index/Home.css";
import CreateNewSchedule from "../../components/member/CreateNewSchedule";


const Home = () => {
    
// 展開建立行程表單
    const [scheShow, setScheshow] = useState(false);

    return (
        <div>
            < Video />
            < Teach />
            <div className="homeBtn"><button type="button" onClick={() => setScheshow(true)}>開始您的行程</button></div>
            <CreateNewSchedule trigger={scheShow} setScheshow={setScheshow}/>
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