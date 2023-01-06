import React from 'react';
import "./oneday.css";
const Oneday = () => {
    return (
        <div>
         <div className="oneday">
        <h1>單日行程推薦</h1>
        <p>我們幫您安排一整日的行程</p>
        <div className="onedaybr">
            <div className="bigoneday">
                <img src="/img/jp1.jpg"/>
                <p>大圖</p>
            </div>
            <div className="smoneday-col">
                <div className="smd">
                    <img src="/img/mount fuji.jpg"/>
                    <p>1231213212123123</p>
                </div>
                <div className="smd">
                    <img src="/img/晴空塔.jpg"/>
                    <p>1231213212123123</p>
                </div>
                <div className="smd">
                    <img src="/img/disney.jpg"/>
                    <p>1231213212123123</p>
                </div>
                <div className="smd">
                    <img src="/img/jp3.jpg"/>
                    <p>1231213212123123</p>
                </div>
                <div className="smd">
                    <img src="./img/jp2.jpeg"/>
                    <p>1231213212123123</p>
                </div>
                <div className="smd">
                    <img src="/img/jp1.jpg"/>
                    <p>1231213212123123</p>
                </div>
            </div>
        </div>
    </div>
        </div>
    );

}

export default Oneday;