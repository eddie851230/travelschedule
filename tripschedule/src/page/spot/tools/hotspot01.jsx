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

                        <img src="/img/spotDetail/tokyodisneysea01.jpg" />
                        <div className='flotno1'>TOP 1</div>
                    </div>
                    <div className="sphotspot-col">
                        <img src="/img/spotDetail/淺草寺01.jpg" />
                        <div className='flotno2'>TOP 2</div>
                    </div>
                    <div className="sphotspot-col">
                        <img src="/img/spotDetail/明治神宮01.jpg" />
                        <div className='flotno3'>TOP 3</div>
                    </div>
                    <div className="sphotspot-col">
                        <img src="/img/spotDetail/六本木01.jpg" />
                        <div className='flotno4'>TOP 4</div>
                    </div>
                </div>

            </div>
        </div>
    );
};



export default Hotspot01;