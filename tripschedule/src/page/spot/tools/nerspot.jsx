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
                            <img src="/img/jp1.jpg" />
                            <p>淺間神社</p>
                        </div>
                        <div className="nerspot-col">
                            <img src="/img/晴空塔.jpg" />
                            <p>晴空塔</p>
                        </div>
                        <div className="nerspot-col">
                            <img src="/img/disney.jpg" />
                            <p>東京迪士尼</p>
                        </div>
                        <div className="nerspot-col">
                            <img src="/img/mount fuji.jpg" />
                            <p>新倉山淺間公園</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Nerspot;