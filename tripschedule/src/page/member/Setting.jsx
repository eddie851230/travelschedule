import React from 'react';
const Setting=()=>{
    return(
        <>
        <div className="settingTitle">設定</div>
    <main className="setting">
        <div className="username">
            <div className="nameTitle">暱稱</div>
            <div className="nameDiv">jennifer&nbsp;&nbsp;<button>編輯</button></div>

        </div>

        {/* <!-- 使用者ID --> */}
        <div className="userID">
            <div className="iDTitle">使用者ID</div>
            <div className="idNum">@1234657897987985465498794</div>

        </div>

        {/* <!-- 登入方式 --> */}
        <div className="loginway">
            <div className="loginTitle">登入方式</div>
            <div className="way"><img src="/img/景點相片預覽(暗色).jpg" alt=""/>&nbsp;<span>123@gmail.com</span></div>
        </div>

        {/* <!-- 興趣偏好 --> */}
        <div className="interstTitle">興趣偏好</div>
        <div>
            <label className="container">親近自然
                <input type="checkbox" name="interst" value="nature"/>
                <span className="checkmark"></span>
            </label>
            <label className="container">歷史人文
                <input type="checkbox" name="interst" value="history"/>
                <span className="checkmark"></span>
            </label>

            <label className="container">尋找刺激
                <input type="checkbox" name="interst" value="activity" checked />
                <span className="checkmark"></span>
            </label>

            <label className="container">美食
                <input type="checkbox" name="interst" value="food"/>
                <span className="checkmark"></span>
            </label>
            <label className="container">歡樂
                <input type="checkbox" name="interst" value="havefun" checked />
                <span className="checkmark"></span>
            </label>
            &nbsp;
            <button>更新</button>
        </div>
    </main>
        </>
    )
}

export default Setting;
