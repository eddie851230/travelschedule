import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./setting.css";
import styled from 'styled-components';
import { http } from '../../WebAPI';


const ForgetPassword = () => {
    const navigate = useNavigate();

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
    margin-top:3%;
    width:40%;
    `


    const [email, setEmail] = useState("");

    const [sentEmail, setSentEmail] = useState(false);
    const [error, setError] = useState("");

    // 寄信中動態
    const [sending, setSending] = useState(false);

    const reset = async () => {
        setSending(true);
        if (email === "") {
            setSending(false);
            return setError("請填入信箱資訊");
        }

        await http.get('/sanctum/csrf-cookie');
        await http.post('/api/forgot-password', { email }).then(() => {
            setSending(false);
            setSentEmail(true);
        }).catch(() => {
            setSending(false);
            setError("請填入正確信箱");
            setSentEmail(false);
        })
    }

    return (
        <div className="setting">
            <div className="settingTitle">忘記密碼</div>
            <Main>

                {!sentEmail ? (
                    <div>
                        <div><b>信箱</b>&nbsp;&nbsp;<EmailInput type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} autoFocus />&nbsp;{error && (<span id="meg" style={{ "color": "red" }}><b>{error}</b></span>)}
                        </div>
                        <MutipleBtn>
                            <Button onClick={() => navigate('/LoginandSignup')}>返回登入頁</Button>
                            <Button onClick={reset} style={sending ?{'backgroundColor':'#376B6D','color':'#fff','fontWeight':'700'}:{}}>{sending ?"寄信確認中...": "送出驗證碼"}</Button>
                        </MutipleBtn>

                    </div>
                ) : (
                    <>
                        <div>您的密碼已寄送至您的信箱<br /><b>{email}</b><br />請重新點擊郵件連結重新設定密碼</div>
                        <Button onClick={() => navigate('/LoginandSignup')}>返回登入頁</Button>
                    </>
                )}

            </Main>
        </div>
    )
}

export default ForgetPassword;
