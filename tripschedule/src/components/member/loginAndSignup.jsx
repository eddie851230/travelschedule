import React from 'react';
import { Link } from "react-router-dom";
import "./loginAndSignup.css";
import "../tool/cueTitle.css";
import $ from 'jquery';

const LoginandSignup = () => {



    const loginOpen = () => {
        $('.signup').addClass('slide-up');
        $('.login').removeClass('slide-up');
    }

    const signupOpen = () => {
        $('.login').addClass('slide-up');
        $('.signup').removeClass('slide-up');
    }

    const signupNext = () => {
        if ($(".step1")) {
            $(".step2").css("display", "block");
            $(".step1").css("display", "none");
            $("#signsubmit").text("註冊");
            $("#signsubmit").attr("type","submit");
        }
    }

    const prevstep = () => {
        $(".step2").css("display", "none");
        $(".step1").css("display", "block");
        $(".submit-btn").text("下一步");
        $("#signsubmit").removeAttr("type","submit");
    }

 


    return (
        <div className="modelbox">
            <div className="loginAndSignup">
                <div className="signup">
                    <h2 className="form-title" id="signup" onClick={signupOpen}>註冊</h2>
                    <div className="form-holder">
                        <div className="step1">
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



                        <div className="step2">
                            
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

                                <label className="container">美食
                                    <input type="checkbox" name="interst" value="food" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">歡樂
                                    <input type="checkbox" name="interst" value="havefun" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>

                            <div className="back" onClick={prevstep}><div></div>back</div>
                        </div>
                    </div>
                    <button className="submit-btn" id="signsubmit" onClick={signupNext} >下一步</button>
                </div>
                <div className="login slide-up">
                    <div className="center">
                        <h2 className="form-title" id="login" onClick={loginOpen}>登入</h2>
                        <div className="form-holder">
                            <div className="social">
                                <div className="google"><i className="fa-brands fa-google"></i></div>
                                <div className="facebook"><i className="fa-brands fa-facebook"></i></div>
                                <div className="line"><i className="fa-brands fa-line"></i></div>
                            </div>
                            <hr />
                            <input type="email" className="input" placeholder="Email" required />
                            <input type="password" className="input" placeholder="密碼" required />
                        </div>
                        <button className="submit-btn">登 入</button>
                        <Link to="/forgetpassword"><div className="forget">忘記密碼</div></Link>
                    </div>
                </div>
            </div>
        </div>
    )

}



export default LoginandSignup;
