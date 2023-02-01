import React, { useEffect, useState } from 'react';
import "./sphot.css";
const Hotspot01 = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
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
                <div className="sprow">
                    <div className="sphotspot-col">
                        <img src="/img/jp1.jpg" />
                        <p>1231213212123123</p>
                    </div>
                    <div className="sphotspot-col">
                        <img src="/img/晴空塔.jpg" />
                        <p>1231213212123123</p>
                    </div>
                    <div className="sphotspot-col">
                        <img src="/img/disney.jpg" />
                        <p>1231213212123123</p>
                    </div>
                    <div className="sphotspot-col">
                        <img src="/img/mount fuji.jpg" />
                        <p>1231213212123123</p>
                    </div>
                </div>

            </div>
        </div>
    );
};



export default Hotspot01;