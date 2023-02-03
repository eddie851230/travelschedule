import React, { useRef, useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./loginAndSignup.css";
import "../tool/cueTitle.css";
import { http, loginapi, memberapi } from '../../WebAPI';
import { setAuthToken, setAuthTokenlimter, getAuthToken } from "../../utils";
import AuthContext from "../../contexts";
import GoogleLogo from './GoogleLogo';





const LoginandSignup = () => {


    // 轉跳頁面
    const navigate = useNavigate();


    // 登入辨認
    const { user, setUser } = useContext(AuthContext);

    // 防止登入後會看到該畫面
    useEffect(() => {
        if (getAuthToken() && getAuthToken() === null) {
            return navigate("/");
        }
    }, [])



    // ----------------------------------讓興趣取值
    const [interst, setInterst] = useState(
        [{
            name: "親近自然",
            value: "1"
        }, {
            name: "歷史人文",
            value: "2"
        },
        {
            name: "尋找刺激",
            value: "3"
        },
        {
            name: "美食",
            value: "4"
        },
        {
            name: "歡樂",
            value: "5"
        },
        {
            name: "學習新知",
            value: "6"
        }
        ]
    )

    // --------------------------------------分辨是送出還是要轉換畫面的function
    const defineClick = () => {

        if (toggle === false) {
            return handleInterst;
        }
        if (toggle) {
            return handleSubmitR;
        }
    }

    //----------------------------------------------註冊api
    const [username, setUsername] = useState("");
    const [resEmail, setResEmail] = useState("");
    const [resPassword, setResPassword] = useState("");
    const [checkpwd, setCheckpwd] = useState("");
    const [regErrorMessage, setRegErrorMessage] = useState("");




    const handleSubmitR = async (e) => {


        e.preventDefault();


        //  前端偵測是否符合資料
        // 密碼驗證符合格式
        let lowerCaseLetters = /[a-z]/g;
        let upperCaseLetters = /[A-Z]/g;
        let numbers = /[0-9]/g;

        if (username === "" || resEmail === "" || resPassword === "" || checkpwd === "") {

            return setRegErrorMessage("必填資料未填");
        } else if (!resPassword.match(upperCaseLetters)) {
            setRegErrorMessage("密碼缺少大寫英文");

            return setTimeout(() => setRegErrorMessage(""), 3000);
        } else if (!resPassword.match(numbers)) {

            setRegErrorMessage("密碼缺少數字");
            return setTimeout(() => setRegErrorMessage(""), 3000);
        } else if (resPassword.length < 8) {

            setRegErrorMessage("密碼長度需8個字以上");
            return setTimeout(() => setRegErrorMessage(""), 3000);
        }
        else if (checkpwd !== resPassword) {

            setRegErrorMessage("確認密碼不符，請再檢視");
            return setTimeout(() => setRegErrorMessage(""), 3000);
        }
        else if (!resPassword.match(lowerCaseLetters)) {

            setRegErrorMessage("密碼缺少小寫英文");
            return setTimeout(() => setRegErrorMessage(""), 3000);

        } else {

            // 將登入資料傳遞給laravel(寫法一)-->localstorge
            await http.get('/sanctum/csrf-cookie');
            await http.post("/api/register", {
                name: username,
                email: resEmail,
                password: resPassword
            }).then(res => {

                // 如果回應成功變200時進行下一步
                if (res.status === 200) {

                    // 順便登入
                    loginapi(resEmail, resPassword).then((data) => {

                        setAuthTokenlimter(data.data.token);

                        // 驗證
                        memberapi().then((res) => {

                            if (res.status === 200) {

                                setUser(res.data);


                            }
                        })
                    });
                    return stepChange();
                }

            }).catch((error) => {

                if (error.response.data.message === "The email has already been taken.") {
                    setAuthToken(null);
                    setRegErrorMessage("信箱已註冊");
                    return setTimeout(() => setRegErrorMessage(""), 3000);
                }

            });

        }

    }

    // 確認密碼是否重複
    const handleRPassword = (e) => {
        setResPassword(e.target.value)
    }

    // 上傳興趣
    const [check, setCheck] = useState([])
    const handleCheck = (e) => {
        const value = parseInt(e.target.value)
        if (e.target.checked === true) {
            setCheck([...check, value])
            console.log('check', check)

        } else {

            let newArr = check.filter(e => e !== parseInt(value))
            setCheck(newArr);
            console.log('ok', check)
        }

    }

    const handleInterst = () => {
        http.post('/addCollection', {
            attraction_id: check,
            user: user.id
        }).then(() => {
            //    導至首頁
            return navigate('/');

        })
            .catch(err => console.log(err))
    }

    //---------------------------------------------登入api
    //  登入表單資料抓取
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState();
    const [remember, setRemember] = useState(false);

    // 登入加載
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (!email || !password) {
            setIsLoading(false);
            setErrorMessage('請填入帳號密碼');
            return setTimeout(() => setErrorMessage(""), 3000);
        }

        await http.get('/sanctum/csrf-cookie');
        await loginapi(email, password).then((data) => {

           
            // 失敗顯示登入失敗原因
            if (data === 422) {
                setErrorMessage(`帳密錯誤`)
                setIsLoading(false);
                return setTimeout(() => setErrorMessage(""), 3000);
            } else if (data === 401) {
                setErrorMessage("密碼錯誤")
                setIsLoading(false);
                return setTimeout(() => setErrorMessage(""), 3000);
            };


            // 成功的話就把 token 存到 localStorage
            if (remember) {
                setAuthToken(data.data.token);
            } else {
                setAuthTokenlimter(data.data.token);
            }

            // 驗證
            memberapi().then((res) => {
                //    console.log("member",res)
                if (res === 401) {
                    // 在 memberapi() 出錯代表還沒成功登入，因此要把 token 清空
                    setAuthToken(null);
                    setAuthTokenlimter(null);
                    setErrorMessage("密碼錯誤");
                    setTimeout(() => setErrorMessage(""), 3000);
                    setIsLoading(false);
                }
                else {
                    // 導到首頁 
                    navigate("/");
                    setIsLoading(false);
                    return setUser(res.data);
                }
            })





        });

        // 寫法二cookies

        //    http.get('/sanctum/csrf-cookie').then(()=>{
        //     loginapi(email, password).then(res=>{
        //         if(res.data.error)
        //         {
        //             console.log(res.data.error)
        //         }else{
        //             setAuthToken(res.data.token);
        //             setUser(res.data.user);
        //             navigate("/");
        //         }
        //     }

        // )
        // })



    };


    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };


    //第三方登入-----------------------------------------------------

    // google
    const [googleLoginUrl, setGoogleLoginUrl] = useState(null);

    useEffect(() => {
        http.get('/auth/google', { headers: { accept: 'application/json' } })
            .then(response => {
                return setGoogleLoginUrl(response.data)
            })
            .catch(error => console.log(error));
    }, []);





    // 前端動畫-----------------------------------------------------

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
        // alert("stepChangeInner");
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

    // 以上為前端動畫


    return (
        <div className="modelbox">
            <div className="loginAndSignup">
                {/* 註冊 */}
                <div className="signup slide-up" ref={signupRef}>
                    <h2 className="form-title" id="signup" onClick={signupOpen}>註冊</h2>
                    <div className="form-holder">
                        <form>
                            <div className="step1" ref={step1} style={{ display: toggle ? "block" : "none" }}>
                                <div className="social">
                                    <a href={googleLoginUrl} className="google"><GoogleLogo /><span>使用Google登入</span></a>
                                    {/* <a href={googleLoginUrl} className="google"><i className="fa-brands fa-google"></i>使用Google登入</a> */}
                                    {/* <div className="facebook"><i className="fa-brands fa-facebook"></i></div> */}
                                    {/* <div className="line"><i className="fa-brands fa-line"></i></div> */}
                                    {/* <div id="buttonDiv"></div>  */}
                                </div>
                                <hr />
                                <input type="text" className="input" placeholder="暱稱(必填)" onChange={(e) => setUsername(e.target.value)} value={username} name="username" required />
                                <input type="email" className="input" placeholder="Email(必填)" name="email" onChange={(e) => setResEmail(e.target.value)} value={resEmail} required />
                                <div datatitle="請輸入至少英文大小寫及數字各一">
                                    <input type="password" className="input" placeholder="密碼(必填)" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={handleRPassword} value={resPassword} title="" name="password" required />
                                </div>
                                <input type="password" className="input" placeholder="再次確認密碼(必填)" onChange={(e) => setCheckpwd(e.target.value)} value={checkpwd} required />
                                {/* 偵錯 */}
                                {regErrorMessage && <><div className="loginError">{regErrorMessage}</div></>}

                            </div>
                        </form>
                        {/* 註冊頁面二 */}
                        <form>
                            <div className="step2" ref={step2} style={{ display: toggle ? "none" : "block" }}>

                                {/* <!-- 興趣偏好 --> */}
                                <div className="interstTitle"><div>興趣偏好</div>
                                    {
                                        interst.map(({ name, value }, index) => {
                                            return (
                                                <label className="container" key={index}>{name}
                                                    <input type="checkbox" name="interst" value={value}
                                                        onChange={handleCheck}
                                                    />
                                                    <span className="checkmark"></span>
                                                </label>
                                            )
                                        })
                                    }

                                </div>

                                {/* <div className="back" onClick={stepChange}><div></div>back</div> */}
                            </div>
                        </form>
                    </div>
                    {/* <button className="submit-btn" id="signsubmit" onClick={handleSubmitR}>註冊</button> */}
                    <button className="submit-btn" id="signsubmit" onClick={defineClick()}>{toggle ? "註冊" : "選擇完成"}</button>

                </div>
                {/* 登入 */}

                <div className="login" ref={loginRef}>
                    <div className="center">
                        <h2 className="form-title" id="login" onClick={loginOpen}>登入</h2>
                        <form>
                            <div className="form-holder">
                                <div className="social">
                                    <a href={googleLoginUrl} className="google"><GoogleLogo /><span>使用Google登入</span></a>
                                    {/* <a href={googleLoginUrl} className="google"><i className="fa-brands fa-google"></i><span>使用Google登入</span></a> */}
                                    {/* <div className="facebook"><i className="fa-brands fa-facebook"></i></div> */}
                                    {/* <div className="line"><i className="fa-brands fa-line"></i></div> */}
                                </div>
                                <hr />
                                <input type="email" name="email" className="input" placeholder="Email" required onChange={handleEmail} value={email} />
                                <input type="password" name="password" className="input" placeholder="密碼" required onChange={handlePassword} value={password} />
                                {errorMessage && <><div className="loginError">{errorMessage}</div></>}
                            </div>
                            <button className="submit-btn" onClick={handleSubmit}>{isLoading ? "登入中..." : "登 入"}</button>
                            <label className="container">記住我
                                <input type="checkbox" name="remember" value={remember} onClick={() => setRemember(!remember)} />
                                <span className="checkmark"></span>
                            </label>

                        </form>
                        <Link to="/forgot-password"><div className="forget">忘記密碼</div></Link>
                    </div>
                </div>
            </div >
        </div >
    )
};




export default LoginandSignup;
