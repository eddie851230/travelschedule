import React, { useEffect, useState } from 'react';

import "./teach.css";
const Teach = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
              setShow(true);
            } else {
              setShow(false);
            }
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);

    return (
        <section className="course">
            <h1>開啟您的行程表</h1>
            <p>以我們推薦的流程，輕鬆地完成您的行程。</p>
            <section className={`nerspot ${show ? 'show' : 'hide'}`}>
            <div className="row" >
                <div className="course-col">
                    <h3>以機票開啟行程</h3>
                    <p>
                        飛機是通往日本的第一站,還沒有訂機票?
                        可透過我們的網站在訂機票的同時，
                        將您的來回時間加入行程表中。</p>
                </div>
                <div className="course-col">
                    <h3>如何加入景點至行程表</h3>
                    <p>您可以透過蒐藏景點至會員中心行程表編輯，也可以直接以拖曳方式加入當日之行程。</p>
                </div>
                <div className="course-col">
                    <h3>會員中心行程表功能</h3>
                    <p>透過開始時間與結束時間創建您的行程，可創建多個行程表。
                    透過蒐藏景點至會員中心行程表編輯，也可直接以拖曳方式加入當日之行程。</p>
                </div>
            </div>
            <div className="homeBtn"><button type="button">開始您的行程</button></div>
            </section>
     
        </section>
    );

}

export default Teach;