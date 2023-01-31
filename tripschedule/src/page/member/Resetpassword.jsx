import React, { useRef, useState,useContext } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import "./setting.css";
import styled from 'styled-components';
import { http, loginapi, memberapi } from '../../WebAPI';
import { setAuthToken } from "../../utils";
import AuthContext from "../../contexts";

const Resetpassword = () => {

    //    轉跳頁面
    const navigate = useNavigate();

    // 取得email
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // 取得token
    const param = useParams();

    // 登入辨認
    const { setUser } = useContext(AuthContext);


    const Main = styled.main`
position:absolute;
top:20%;
left:25%;
padding:1%;
`;

    // const Muti=styled.div`
    // width:100%;
    // display:flex;
    // flex-direction:column;
    // flex-wrap:wrap;
    // align-item:center;
    // `

    const EmailInput = styled.input`
width:100%;
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
width:35%;
`

    // 從url取得email參數
    const email = searchParams.get('email');

    // 取得token
    const token = param.token;

    // 重設密碼相關監測
    const [error, setError] = useState("");
    const [checkerror, setcheckerror] = useState("");
    // 密碼的值
    const passwordref = useRef(null);
    const recheckpwdref = useRef(null);

    // 傳送數據去重設密碼
    const update = async () => {
        // 設定密碼值
        let pwd = passwordref.current.value;
        let checkpwd = recheckpwdref.current.value;
        // 密碼驗證符合格式
        let lowerCaseLetters = /[a-z]/g;
        let upperCaseLetters = /[A-Z]/g;
        let numbers = /[0-9]/g;

        if (pwd === "") {
            return setError("請輸入密碼");
        } else if (checkpwd === "") {
            return setcheckerror("請輸入確認密碼");
        } else if (!pwd.match(upperCaseLetters)) {
            return setError("密碼缺少大寫英文");
        } else if (!pwd.match(numbers)) {
            return setError("密碼缺少數字");
        } else if (pwd.length < 8) {
            return setError("密碼長度需8個字以上");
        }
        else if (pwd !== checkpwd) {
            return setcheckerror("確認密碼不符，請再檢視");
        }
        else if (!pwd.match(lowerCaseLetters)) {
            return setError("密碼缺少小寫英文");

        } else {
            await http.get('/sanctum/csrf-cookie');
            await http.post('/api/reset-password', {
                email: email,
                password: passwordref.current.value,
                token
            }).then(() => {
                alert("密碼已重設");

                http.get('/sanctum/csrf-cookie');
                loginapi(email, passwordref.current.value).then((data) => {

                    setAuthToken(data.data.token);

                    // // 驗證
                    memberapi().then((res) => {

                        setUser(res.data);
                        navigate("/");

                    })

                });

            }).catch(
                (error) => alert(error)
            )
        }
    }



    return (
        <div className="setting">
            <div className="settingTitle">重設密碼</div>
            <Main>
                <div>
                    {/* <Muti> */}
                    <div><b>信箱</b><EmailInput type="email" name="email" value={email} disabled /></div>
                    <div><b>密碼</b><EmailInput type="password" name="password" ref={passwordref} /><br />{error && (<span id="meg" style={{ "color": "red" }}><b>{error}</b></span>)}</div>
                    <div><b>確認密碼</b><EmailInput type="password" name="recheckpassword" ref={recheckpwdref} /><br />{checkerror && (<span id="meg" style={{ "color": "red" }}><b>{checkerror}</b></span>)}</div>
                    {/* </Muti> */}
                    <MutipleBtn>
                        <Button onClick={() => navigate('/LoginandSignup')}>返回登入頁</Button>
                        <Button onClick={update}>送出</Button>
                    </MutipleBtn>
                </div>

            </Main>
        </div>
    )
}
export default Resetpassword;