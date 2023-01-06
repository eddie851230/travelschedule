import React from 'react';
import "./homeHotSpot.css";
const Hhtspot = () => {
    return (
        <section className="hotspot">
            <h1>熱門景點</h1>
            <p>看看大家都喜歡去哪玩吧!</p>

            <div className="row">
                <div className="hotspot-col p1">
                    <img src="/img/jp1.jpg" />
                    <h1>新倉富士浅間神社</h1>
                    <p>想要觀賞富士山，新倉富士淺間神社位置絕佳，可以說是人氣第一。<br />
                        秋天有楓葉、春天則是鋪著粉紅色花海的櫻花，富士山景在每個山坡處皆有不同風情，
                        就像是設計好的背景牆美的不可思議。
                    </p>
                </div>
                <div className="hotspot-col p2">
                    <img src="/img/jp2.jpeg" />
                    <h1>皇居</h1>
                    <p>
                        東京都千代田區的皇居是天皇所居住的地方，
                        內部大致分為「東御苑」、「皇居外苑」以及需事先預約的「皇居內」三個區塊，
                        皆不需另外付費，使得皇居及其周邊區域成為集結全世界各地旅客的一大觀光景點。
                    </p>
                </div>
                <div className="hotspot-col p3">
                    <img src="/img/jp3.jpg" />
                    <h1>佐倉市櫻花河畔</h1>
                    <p>在佐倉市有著日本著名的花卉。尤其是佐倉河濱公園，荷蘭風花園裡隨季節綻放的向日葵和鬱金香，以及仍在使用中的風車。
                        再加上河畔上的櫻花，是近期旅客光顧的一大特色。
                    </p>
                </div>
            </div>
        </section>

    );
}
export default Hhtspot;
