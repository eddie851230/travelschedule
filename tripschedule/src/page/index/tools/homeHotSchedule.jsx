import React from 'react';

import "./homeHotSchedule.css";
const Homesch = () => {


    return (
        <section className="campus">
        <h1>熱門行程表</h1>
        <p>以我們推薦的流程，輕鬆地完成您的行程。</p>
        <div className="row">
            <div className="campus-col">
                <img src="/img/mount fuji.jpg" alt=""/>
                <div className="layer">
                    <h3>富士山三日遊</h3>
                    <p>
                        大湧谷<br/>
                        箱根玻璃森林美術館<br/>
                        河口湖站<br/>
                        忍野八海<br/>
                        新倉山淺間公園<br/>
                        富士急高地樂園<br/>
                        小田急箱根高地飯店
                    </p>
                    <button type="button">儲存此行程表</button>
                </div>
            </div>
            <div className="campus-col">
                <img src="/img/tok.jpg" alt=""/>
                <div className="layer">
                    <h3>市區四日遊</h3>
                    <p>
                    晴空塔<br/>
                    淺草寺<br/>
                    明治神宮<br/>
                    代代木公園<br/>
                    三鷹之森<br/>
                    秋葉原<br/>
                    東京灣東急大飯店
                    </p>
                    <button type="button">儲存此行程表</button>
                </div>
            </div>
            <div className="campus-col">
                <img src="/img/disney.jpg" alt=""/>
                <div className="layer">
                    <h3>迪士尼  浦安三日遊</h3>
                    <p> 
                    美景廳<br/>
                    伊克斯皮兒莉<br/>
                    大江戶溫泉物語<br/>
                    浦安市鄉土博物館<br/>
                    東京迪士尼樂園<br/>
                    東京迪士尼海洋<br/>
                    東京灣喜來登大飯店
                    </p>
                    <button type="button">儲存此行程表</button>
                </div>
            </div>
        </div>
    </section>
    );

}

export default Homesch;