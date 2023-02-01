import React from 'react';
import { Link } from "react-router-dom";
import "./beforeLogin.css";


const BeforeLogin = () => {
    return (
        <div>
            <div class="bfcontainer">
                <div className="bfRow">
                    <div className="col2">
                        <div className="bfcard bfcard1">
                            <h2>加入會員</h2>
                            <p>透過會員來新增行程表開啟您的行程，我們將記錄你蒐藏的景點。</p>
                        </div>
                        <div className="bfcard bfcard2">
                            <h2>創建行程表</h2>
                            <p>透過開始時間與結束時間創建您的行程，可創建多個行程表。</p>
                        </div>
                        <div className="bfcard bfcard3">
                            <h2>推薦方式</h2>
                            <p>由註冊會員時所選擇的喜好來推薦您，也有根據點擊率的熱門推薦。</p>
                        </div>
                        <div className="bfcard bfcard4">
                            <h2>行程表操作</h2>
                            <p>您可以透過蒐藏景點至會員中心行程表編輯，也可以直接以拖曳方式加入當日之行程。</p>
                        </div>
                    </div>
                    <div className="col1">
                        <h1>歡迎</h1>
                        <p>
                            前往東京自由行的旅客,根據自身的喜好<br />
                            以系統的判斷來推薦行程,進而創建行程表<br />
                            提供交通、景點、機票、住宿等服務.<hr />
                         
                            為方便系統推薦與增加行程請先註冊或登錄會員。</p>
                            <Link to="/LoginandSignup"><button type="button">登錄/註冊</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default BeforeLogin;