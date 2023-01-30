import React, { useContext } from 'react';
import styled from 'styled-components';
import AuthContext from '../../contexts';

const Setting = () => {
const Button=styled.button`
    width:30%;
    height:fit-content;
    padding:0px;

    `;

    
     // 判斷是否有會員登入中
     const {user}  = useContext(AuthContext);

    return (
        <div className="setting">
            <div className="settingTitle">設定</div>
            <main>
                <div className="username">
                    <div className="nameTitle">暱稱</div>
                    <div className="nameDiv">{user.name}</div>
                </div>
                <hr />

                {/* <!-- 使用者ID --> */}
                <div className="userID">
                    <div className="iDTitle">Email</div>
                    <div className="idNum">{user.email}</div>

                </div>
                <hr />
                {/* <!-- 大頭貼 -->*/}
                {/* <div className="loginway">
                    <div className="loginTitle">登入方式</div>
                    <div className="way"><img src="/img/景點相片預覽(暗色).jpg" alt="" /></div>
                </div> */}
                <hr /> 
                {/* <!-- 興趣偏好 --> */}
                <div className="interst"><div className="interstTitle">興趣偏好</div>
               
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
                    
                </div>
               
            </main>
            <Button>編輯</Button>
        </div>
    )
}

export default Setting;
