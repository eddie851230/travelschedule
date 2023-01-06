import React from 'react';
import "./beforeLogin.css";
const BeforeLogin = () => {
    return (
        <div>
            <div class="bfcontainer">
                <div className="bfRow">
                    <div className="col1">
                        <h1>歡迎</h1>
                        <p>
                            前往東京自由行的旅客,根據自身的喜好<br />
                            以系統的判斷來推薦行程,進而創建行程表<br />
                            提供交通、景點、機票、住宿等服務.<hr />
<br/><br/><br/>
                            為方便系統推薦與增加行程請先註冊或登錄會員。</p>
                        <a href=""><button type="button">登錄/註冊</button></a>
                    </div>
                    <div className="col2">
                        <div className="bfcard bfcard1">
                            <h2>加入會員</h2>
                            <div className="more"><p>透過會員來新增行程表開啟您的行程</p></div>
                        </div>
                        <div className="bfcard bfcard2">
                            <h2>創建行程表</h2>
                            <div className="more"><p>adsadasdasdasdasdsadas</p></div>
                        </div>
                        <div className="bfcard bfcard3">
                            <h2>推薦方式</h2>
                            <div className="more"><p>adsadasdasdasdasdsadas</p></div>
                        </div>
                        <div className="bfcard bfcard4">
                            <h2>行程表操作</h2>
                            <div className="more"><p>adsadasdasdasdasdsadas</p></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}
export default BeforeLogin;