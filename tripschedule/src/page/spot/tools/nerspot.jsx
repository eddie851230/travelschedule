import React, { useEffect, useState } from 'react';
import "./nerspot.css";
const Nerspot = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 2000) {
              setShow(true);
            } else {
              setShow(false);
            }
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
    return (
        <div className={`nerspot ${show ? 'show' : 'hide'}`}>
            <div>
                <div className="nerspot">
                    <h1>附近景點</h1>
                    <p>看看周圍的景點~</p>
                    <div className="nerspotrow">
                        <div className="nerspot-col">
                            <img src="/img/spotDetail/新倉山淺間公園01.jpg" />
                            <p>新倉山淺間公園</p>
                        </div>
                        <div className="nerspot-col">
                            <img src="/img/spotDetail/晴空塔01.jpg" />
                            <p>晴空塔</p>
                        </div>
                        <div className="nerspot-col">
                            <img src="/img/spotDetail/tokyodisneyland4.jpg" />
                            <p>東京迪士尼</p>
                        </div>
                        <div className="nerspot-col">
                            <img src="/img/spotDetail/築地市場01.jpg" />
                            <p>築地市場</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Nerspot;