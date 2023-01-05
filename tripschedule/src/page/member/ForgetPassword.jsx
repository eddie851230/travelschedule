import React from 'react';
// import {Link} from 'react-router-dom';
import "./setting.css";
import styled from 'styled-components';


const ForgetPassword = () => {

    const Main = styled.main`
    padding:5%;
    `;

    const EmailInput = styled.input`
    width:60%;
    height:fit-content;
    font-size:100%;
    padding:0;
    `;
    const MutipleBtn = styled.div`
    width:90%;
    margin:auto;
    margin-top:5%;
    display:flex;
    justify-content:space-around;
`;
    const Button = styled.button`
    padding:5px 30px;
    margin:0;
    width:35%;
    `


    return (
        <div className="setting">
            <div className="settingTitle">忘記密碼</div>
            <Main>

                <form action="" method="POST">
                    <div>信箱 <EmailInput type="email" name="account" id="account" onChange="checkNewAccount()" />&nbsp;<span id="meg">信箱錯誤</span>
                    </div>

                    <MutipleBtn>
                        <Button>返回登入頁</Button>
                        <Button>送出驗證碼</Button>
                    </MutipleBtn>
                </form>

            </Main>
        </div>
    )
}

export default ForgetPassword;
