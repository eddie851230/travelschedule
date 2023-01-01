import React from 'react';
import "./setting.css";

const ForgetPassword=()=>{
    return(<>
     <div className="settingTitle">忘記密碼</div>
    <main className="setting">

        <form action="" method="POST">
            <div>信箱 <input type="email" name="account" id="account" onChange="checkNewAccount()" /><span id="meg"></span>
            </div>

            <div>
                <button>返回登入頁</button>
                <button>送出驗證碼</button>
            </div>
        </form>

    </main>
    </>)
}

export default ForgetPassword;
