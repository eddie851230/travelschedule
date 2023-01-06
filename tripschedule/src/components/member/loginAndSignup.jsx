import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import "./loginAndSignup.css";
import "../tool/cueTitle.css";

const LoginandSignup = () => {


    // 前端動畫

    // 開關
    const [toggle, setToggle] = useState(true);

    // 加入classList
    const loginRef = useRef(null);
    const signupRef = useRef(null);

    const loginOpen = () => {
        let loginNode = loginRef.current;
        let signupRefNode = signupRef.current;
        signupRefNode.classList.add("slide-up");
        loginNode.classList.remove("slide-up");
    }

    const signupOpen = () => {
        const loginNode = loginRef.current;
        const signupRefNode = signupRef.current;
        loginNode.classList.add("slide-up");
        signupRefNode.classList.remove("slide-up");
    }

    const step1 = useRef(null);
    const step2 = useRef(null);


    // 註冊兩分頁
    const stepChange = () => {
        let step1Node = step1.current;
        let step2Node = step2.current;


        if (toggle) {
            step1Node.classList.add("closeSignupStep");
            setTimeout(() => {
                step1Node.classList.remove("closeSignupStep");
                step2Node.classList.remove("showSignupStep");
                step2Node.classList.add("showSignupStep");
                setToggle(false)
            }, 500);

        } else {
            step2Node.classList.add("closeSignupStep");
            setTimeout(() => {
                step2Node.classList.remove("closeSignupStep");
                step1Node.classList.remove("showSignupStep");
                step1Node.classList.add("showSignupStep");
                setToggle(true)

            }, 500);

        }

    }

    // const [errorMessage, setErrorMessage] = useState(false);

    // useEffect

    // 以上為前端動畫

    // login連接後端
    const [useremail, setUseremail] = useState("");
    // const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        // setLoading(true);
        // setErrorMessage(null);
        // login(useremail, password).then((data) => {
        //     if (data.token == null) {
        //         setLoading(false);
        //         return setErrorMessage(data.status);
        //     }
        //     setLoading(false);
        // });
    };

    const handleUseremail = (e) => {
        setUseremail(e.target.value);
    };
    // const handleUsername = (e) => {
    //     setUsername(e.target.value);
    // };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };







    return (
        <div className="modelbox">
            <div className="loginAndSignup">
                <div className="signup slide-up" ref={signupRef}>
                    <h2 className="form-title" id="signup" onClick={signupOpen}>註冊</h2>
                    <div className="form-holder">
                        <div className="step1" ref={step1} style={{ display: toggle ? "block" : "none" }}>
                            <div className="social">
                                <div className="google"><i className="fa-brands fa-google"></i></div>
                                <div className="facebook"><i className="fa-brands fa-facebook"></i></div>
                                <div className="line"><i className="fa-brands fa-line"></i></div>
                            </div>
                            <hr />
                            <input type="text" className="input" placeholder="暱稱(必填)" required />
                            <input type="email" className="input" placeholder="Email(必填)" required />
                            <div datatitle="請輸入至少英文大小寫及數字各一">
                                <input type="password" className="input" placeholder="密碼(必填)" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="" required />
                            </div>
                            <input type="password" className="input" placeholder="再次確認密碼(必填)" required />
                            {/* 偵錯 */}
                            <div className="loginError">請輸入至少英文大小寫及數字各一</div>

                        </div>



                        <div className="step2" ref={step2} style={{ display: toggle ? "none" : "block" }}>

                            {/* <!-- 興趣偏好 --> */}
                            <div className="interstTitle"><div>興趣偏好</div>

                                <label className="container">親近自然
                                    <input type="checkbox" name="interst" value="nature" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">歷史人文
                                    <input type="checkbox" name="interst" value="history" />
                                    <span className="checkmark"></span>
                                </label>
                                <br />
                                <label className="container">尋找刺激
                                    <input type="checkbox" name="interst" value="activity" />
                                    <span className="checkmark"></span>
                                </label>

                                <label className="container">學習新知
                                    <input type="checkbox" name="interst" value="havefun" />
                                    <span className="checkmark"></span>
                                </label>

                                <label className="container">美食
                                    <input type="checkbox" name="interst" value="food" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">歡樂
                                    <input type="checkbox" name="interst" value="havefun" />
                                    <span className="checkmark"></span>
                                </label>

                            </div>

                            <div className="back" onClick={stepChange}><div></div>back</div>
                        </div>
                    </div>
                    <button className="submit-btn" id="signsubmit" onClick={stepChange} type={toggle ? "" : "submit"}>{toggle ? "下一步" : "註冊"}</button>
                </div>
                <div className="login" ref={loginRef}>
                    <div className="center">
                        <h2 className="form-title" id="login" onClick={loginOpen}>登入</h2>
                        <div className="form-holder">
                            <div className="social">
                                <div className="google"><i className="fa-brands fa-google"></i></div>
                                <div className="facebook"><i className="fa-brands fa-facebook"></i></div>
                                <div className="line"><i className="fa-brands fa-line"></i></div>
                            </div>
                            <hr />
                            <input type="email" className="input" placeholder="Email" value={useremail} onChange={handleUseremail} required />
                            <input type="password" className="input" placeholder="密碼" value={password} onChange={handlePassword} required />
                            {errorMessage && <><hr /><small style={{ color: 'red' }}>{errorMessage}</small></>}
                        </div>
                        <button className="submit-btn" onClick={handleLogin} disabled={loading}>登 入</button>
                        <Link to="/forgetpassword"><div className="forget">忘記密碼</div></Link>
                    </div>
                </div>
            </div>
        </div>
    )

}



export default LoginandSignup;
