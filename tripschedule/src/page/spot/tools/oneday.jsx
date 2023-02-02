import React from 'react';
import "./oneday.css";

const oneDayImg = [
    {
        url: "/img/spotDetail/淺草寺06.jpg",
        p: "所有第一次來東京自由行旅客必去的東京景點 Top1，因為淺草、上野、谷中銀座一帶，是東京僅存能體驗江戶「下町」文化、貼近感受庶民生活的社區，曾經的中下級武士居住地，如今成為了懷舊商店滿街的觀光景點。整個淺草一帶有太多好玩景點、好吃餐廳，我們整理了下町風光必去景點、交通方式及淺草一日遊行程安排建議，還有夏天限定煙花大會，希望大家都愛上散步淺草的樂趣。",
        h1:"淺草寺周邊一日遊"
    },
    {
        url: "/img/晴空塔.jpg",
        p: "晴空塔有多高、除了觀景之外還有什麼好玩的？其實晴空塔不只有絕景，限定美食餐點、伴手禮⋯能買的、能吃的絕對比你想得還更多，一不小心就可能荷包失守！？本篇整理出TOKYO SKYTREE TOWN 東京晴空塔攻略，從1樓到445樓、從晴空塔到周邊景點，蒐集所有資訊，讓準備出發到晴空塔的你，行程安排不苦惱！",
        h1:"晴空塔周邊一日遊"
    },
    {
        url: "/img/spotDetail/tokyodisneysea03.jpg",
        p: "因日本迪士尼（即東京迪士尼度假區）的樂園和東京迪士尼海洋已經開了不少又新又好玩的遊樂設施，東京迪士尼必玩機動遊戲最新有夢幻的美女與野獸城堡奇緣、小飛俠天空之旅及 翱翔：夢幻奇航等等，一於等拾捌堂教你編排 2023東京迪士尼一日遊攻略 玩盡30大迪士尼遊樂設施！快快加這個「日本迪士尼攻略」入去你的行程吧。",
        h1:"東京迪士尼一日遊"
    },
    {
        url: "/img/jp3.jpg",
        p: "在佐倉市有著日本著名的花卉。尤其是佐倉河濱公園，荷蘭風花園裡隨季節綻放的向日葵和鬱金香，以及仍在使用中的風車。 再加上河畔上的櫻花，是近期旅客光顧的一大特色。",
        h1:"佐倉市賞花一日遊"
    },
    {
        url: "/img/jp2.jpeg",
        p: "東京都千代田區的皇居是天皇所居住的地方， 內部大致分為「東御苑」、「皇居外苑」以及需事先預約的「皇居內」三個區塊， 皆不需另外付費，使得皇居及其周邊區域成為集結全世界各地旅客的一大觀光景點。",
        h1:"千代區一日遊"
    },
    {
        url: "/img/jp1.jpg",
        p: "想要觀賞富士山，新倉富士淺間神社位置絕佳，可以說是人氣第一。秋天有楓葉、春天則是鋪著粉紅色花海的櫻花，富士山景在每個山坡處皆有不同風情， 就像是設計好的背景牆美的不可思議。",
        h1:"富士浅間一日遊"
    }
];


class Oneday extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bigImg: "/img/jp1.jpg",
            p: "想要觀賞富士山，新倉富士淺間神社位置絕佳，可以說是人氣第一。秋天有楓葉、春天則是鋪著粉紅色花海的櫻花，富士山景在每個山坡處皆有不同風情， 就像是設計好的背景牆美的不可思議。",
            h1:"富士浅間一日遊"
        };
    }

    handleClick = (event) => {
        let img = event.target.src;
        this.setState({ bigImg: img });
        
        let idp=event.target.id;
        let array=oneDayImg.filter((item,index)=>index==idp)
        this.setState({ p: array[0].p });
        this.setState({ h1: array[0].h1 });
        console.log(event)
    }

    render() {
        return (
            <div>
                <div className="oneday">
                    <h1>單日行程推薦</h1>
                    <p>我們幫您安排一整日的行程</p>
                    <div className="onedaybr">


                        <div className="bigoneday">
                            <img src={this.state.bigImg} />
                            <h1>{this.state.h1}</h1>
                            <p>{this.state.p}</p>
                            
                        </div>

                        <div className="smoneday-col">
                            {oneDayImg.map((smimg,index) => (
                                
                                <div
                                    className="smd"
                                    onClick={this.handleClick}>
                                    <img src={smimg.url} id={index}
                                    />
                                </div>))}
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default Oneday;