import React, { useRef, useState,useContext } from 'react';
import { Link,useNavigate } from "react-router-dom";
import "./loginAndSignup.css";
import "../tool/cueTitle.css";
import { http,loginapi,memberapi } from '../../WebAPI';
import { setAuthToken } from "../../utils";
import AuthContext  from "../../contexts";





const LoginandSignup = () => {
    // 轉跳頁面
    const navigate=useNavigate();

    // 登入辨認
    const { setUser } = useContext(AuthContext);


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

    // 以上為前端動畫



//登入api


//  登入表單資料抓取
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();


  const handleSubmit = async(e) => {
    e.preventDefault();
 
    await http.get('/sanctum/csrf-cookie');
    await loginapi(email, password).then((data) => {
        
    // 失敗顯示登入失敗原因
       if(data===422){
        return setErrorMessage(`帳號未註冊或輸入格式錯誤`);
       }else if(data === 401)  return setErrorMessage("密碼錯誤");
        // 成功的話就把 token 存到 localStorage
        setAuthToken(data.data.token);

        // 驗證
        memberapi().then((res) => {
           console.log("member",res)
        if (res === 401) {
          // 在 memberapi() 出錯代表還沒成功登入，因此要把 token 清空
          setAuthToken(null);
          setErrorMessage("密碼錯誤");
        }
        else{
            setUser(res.data);
            // 導到首頁
            navigate("/");
        }
         })

        });
    };



 

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };




    return (
        <div className="modelbox">
            <div className="loginAndSignup">
                <div className="signup slide-up" ref={signupRef}>
                    <h2 className="form-title" id="signup" onClick={signupOpen}>註冊</h2>
                    <form action="">
                        <div className="form-holder">
                            <div className="step1" ref={step1} style={{ display: toggle ? "block" : "none" }}>
                                <div className="social">
                                    <div className="google"><i className="fa-brands fa-google"></i></div>
                                    <div className="facebook"><i className="fa-brands fa-facebook"></i></div>
                                    <div className="line"><i className="fa-brands fa-line"></i></div>
                                </div>
                                <hr />
                                <input type="text" className="input" placeholder="暱稱(必填)" name="username" required />
                                <input type="email" className="input" placeholder="Email(必填)" name="email" required />
                                <div datatitle="請輸入至少英文大小寫及數字各一">
                                    <input type="password" className="input" placeholder="密碼(必填)" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="" name="password" required />
                                </div>
                                {/* <input type="password" className="input" placeholder="再次確認密碼(必填)" required /> */}
                                {/* 偵錯 */}
                                {/* <div className="loginError">請輸入至少英文大小寫及數字各一</div> */}

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
                    </form>
                </div>
                <div className="login" ref={loginRef}>
                    <div className="center">
                        <h2 className="form-title" id="login" onClick={loginOpen}>登入</h2>
                        <form>
                            <div className="form-holder">
                                <div className="social">
                                    <div className="google"><i className="fa-brands fa-google"></i></div>
                                    <div className="facebook"><i className="fa-brands fa-facebook"></i></div>
                                    <div className="line"><i className="fa-brands fa-line"></i></div>
                                </div>
                                <hr />
                                <input type="email" name="email" className="input" placeholder="Email" required onChange={handleEmail} value={email}/>
                                <input type="password" name="password" className="input" placeholder="密碼" required onChange={handlePassword} value={password}/>
                                {errorMessage && <><small style={{ color: 'red' }}>&nbsp;&nbsp;&nbsp;{errorMessage}</small></>}
                            </div>
                            <button className="submit-btn" onClick={handleSubmit}>登 入</button>
                            <label className="container">記住我
                                        <input type="checkbox" name="interst" value="havefun" />
                                        <span className="checkmark"></span>
                                    </label>
                        </form>
                        <Link to="/forgetpassword"><div className="forget">忘記密碼</div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};




export default LoginandSignup;


// export const LoginButton = () => {
//     const { authenticated, user, signIn } = useSanctum();
  
//     const handleLogin = () => {
//       const email = "sanctum@example.org";
//       const password = "example";
//       const remember = true;
  
//       signIn(email, password, remember)
//         .then(() => window.alert("Signed in!"))
//         .catch(() => window.alert("Incorrect email or password"));
//     };
  
//     if (authenticated === true) {
//       return <h1>Welcome, {user.name}</h1>;
//     } else {
//       return <button onClick={handleLogin}>Sign in</button>;
//     }
//   };