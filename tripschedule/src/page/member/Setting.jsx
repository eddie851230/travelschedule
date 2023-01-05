import React from 'react';
import styled from 'styled-components';

const Setting = () => {
const Button=styled.button`
    width:80px;
    height:fit-content;
    padding:0px;
    justify-self:end;
    `;

    return (
        <div className="setting">
            <div className="settingTitle">設定</div>
            <main>
                <div className="username">
                    <div className="nameTitle">暱稱</div>
                    <div className="nameDiv">jennifer&nbsp;&nbsp;<Button>編輯</Button></div>
                </div>
                <hr />

                {/* <!-- 使用者ID --> */}
                <div className="userID">
                    <div className="iDTitle">使用者ID</div>
                    <div className="idNum">@1234657897987985465498794</div>

                </div>
                <hr />
                {/* <!-- 登入方式 --> */}
                <div className="loginway">
                    <div className="loginTitle">登入方式</div>
                    <div className="way"><img src="/img/景點相片預覽(暗色).jpg" alt="" />&nbsp;<span>123@gmail.com</span></div>
                </div>
                <hr />
                {/* <!-- 興趣偏好 --> */}
                <div className="interst"> <div className="interstTitle">興趣偏好</div>
                <div>
                    <label className="container">親近自然
                        <input type="checkbox" name="interst" value="nature" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">歷史人文
                        <input type="checkbox" name="interst" value="history" />
                        <span className="checkmark"></span>
                    </label>

                    <label className="container">尋找刺激
                        <input type="checkbox" name="interst" value="activity"/>
                        <span className="checkmark"></span>
                    </label>

                    <label className="container">學習新知
                        <input type="checkbox" name="interst" value="havefun"/>
                        <span className="checkmark"></span>
                    </label>

                    <label className="container">美食
                        <input type="checkbox" name="interst" value="food" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">歡樂
                        <input type="checkbox" name="interst" value="havefun"/>
                        <span className="checkmark"></span>
                    </label>
                 
                </div>
                    <Button>更新</Button>
                </div>
               
            </main>
        </div>
    )
}

export default Setting;
