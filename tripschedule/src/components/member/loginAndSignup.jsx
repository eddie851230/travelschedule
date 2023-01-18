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
    const { user,setUser } = useContext(AuthContext);


    // ----------------------------------讓興趣取值
    const [interst,setInterst]=useState(
        [{
            name:"親近自然",
            value:"1"
        },{
            name:"歷史人文",
            value:"2"
        },
        {
            name:"尋找刺激",
            value:"3"
        },
        {
            name:"美食",
            value:"4"
        },
        {
            name:"歡樂",
            value:"5"
        },
        {
            name:"學習新知",
            value:"6"
        }
]
    )
    
    // const [checkedState, setCheckedState] = useState(
    //     new Array(interst.length).fill(false)
    // );

// const handleOnChange = (position) => {
//     const updatedCheckedState = checkedState.map((item, index) =>
//       index === position ? !item : item
//     );
//     // alert(updatedCheckedState);

//     setCheckedState(updatedCheckedState);
// };

    // --------------------------------------分辨是送出還是要轉換畫面的function
    const defineClick=()=>{
        // alert("defineClick?");
        if(toggle){
            // alert("stepChange?");
            return stepChange;
        }
        if(toggle===false){
            // alert("handleSubmitR?");
            return handleSubmitR;
        }
    }

//----------------------------------------------註冊api
const [username,setUsername]=useState("");
const [resEmail,setResEmail]=useState("");
const [resPassword,setResPassword]=useState("");
const [checkpwd,setCheckpwd]=useState("");
const [regErrorMessage,setRegErrorMessage]=useState("");




const handleSubmitR=async(e)=>{

   
    e.preventDefault();
    // navigate("/");
    // // 將checkedstate的index
    // checkedState.map((item, index)=>{
    //     console.log(item)
    //     if(item===false){
    //             interst.map((index)=>{
    //             setInterst[index].value=null;
    //             console.log(setInterst[index].value);
    //         })
    //         }
    //     })
   
    //  前端偵測是否符合資料
       // 密碼驗證符合格式
       let lowerCaseLetters = /[a-z]/g;
       let upperCaseLetters = /[A-Z]/g;
       let numbers = /[0-9]/g;
      
       if(username==="" || resEmail==="" || resPassword===""||checkpwd===""){
        return setRegErrorMessage("必填資料未填");
    }else if(!resPassword.match(upperCaseLetters)){
        return setRegErrorMessage("密碼缺少大寫英文");
    }else if(!resPassword.match(numbers)){
        return setRegErrorMessage("密碼缺少數字");
    }else if(resPassword.length < 8){
        return setRegErrorMessage("密碼長度需8個字以上");
    }
    else if(checkpwd!==resPassword){
        return setRegErrorMessage("確認密碼不符，請再檢視");
    }
    else if(!resPassword.match(lowerCaseLetters)){
           return setRegErrorMessage("密碼缺少小寫英文");
           
       }else{

    // 將登入資料傳遞給laravel(寫法一)-->localstorge
        await http.get('/sanctum/csrf-cookie');
        await http.post("/api/register",{
            name:username,
            email:resEmail,
            password:resPassword
        }).then((res)=>{
            
            // 如果回應成功變200時進行登入
            if(res.status===200){
                // 順便登入
                loginapi(resEmail, resPassword).then((data) => {
               
                    setAuthToken(data.data.token);
            
                    // 驗證
                    memberapi().then((res) => {
                    
                    if (res.status === 200) {
                        
                        setUser(res.data);
                    // 導到首頁
                    navigate("/");
                    }
                     })
                });
            
                    }

        }).catch((error) =>{
       
            if(error.response.data.message==="The email has already been taken.")
                { // alert("該信箱已註冊，請回到上一步修改");
                setAuthToken(null);
                return setRegErrorMessage("信箱已註冊");}
           
            });

     



    }
        
       
                    
            


}

const handleRPassword=(e)=>{
    setResPassword(e.target.value)
}

//---------------------------------------------登入api
//  登入表單資料抓取
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();


  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("handleSubmit");
 
    await http.get('/sanctum/csrf-cookie');
    await loginapi(email, password).then((data) => {

        // console.log("login",data);
        
    // 失敗顯示登入失敗原因
       if(data===422){
        return setErrorMessage(`帳密錯誤`);
       }else if(data === 401)  return setErrorMessage("密碼錯誤");
        // 成功的話就把 token 存到 localStorage
        // console.log(data.data.token);
        setAuthToken(data.data.token);

        // 驗證
        memberapi().then((res) => {
        //    console.log("member",res)
        if (res === 401) {
          // 在 memberapi() 出錯代表還沒成功登入，因此要把 token 清空
          setAuthToken(null);
          setErrorMessage("密碼錯誤");
        }
        else{
            setUser(res.data);
            // 導到首頁 
            console.log(user)
               navigate("/");

            
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
        // }

        // )
    // })



    };


  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

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
        // alert("stepChangeInner");
        let step1Node = step1.current;
        let step2Node = step2.current;

    //    // 密碼驗證符合格式
    //     let lowerCaseLetters = /[a-z]/g;
    //     let upperCaseLetters = /[A-Z]/g;
    //     let numbers = /[0-9]/g;
        
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
                    <form>
                        <div className="form-holder">
                            <div className="step1" ref={step1} style={{ display: toggle ? "block" : "none" }}>
                                <div className="social">
                                    <div className="google"><i className="fa-brands fa-google"></i></div>
                                    <div className="facebook"><i className="fa-brands fa-facebook"></i></div>
                                    <div className="line"><i className="fa-brands fa-line"></i></div>
                                </div>
                                <hr />
                                <input type="text" className="input" placeholder="暱稱(必填)" onChange={(e)=>setUsername(e.target.value)} value={username} name="username" required/>
                                <input type="email" className="input" placeholder="Email(必填)" name="email" onChange={(e)=>setResEmail(e.target.value)} value={resEmail} required />
                                <div datatitle="請輸入至少英文大小寫及數字各一">
                                    <input type="password" className="input" placeholder="密碼(必填)" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={handleRPassword} value={resPassword} title="" name="password" required/>
                                </div>
                                <input type="password" className="input" placeholder="再次確認密碼(必填)" onChange={(e)=>setCheckpwd(e.target.value)} value={checkpwd} required />
                                {/* 偵錯 */}
                                {regErrorMessage && <><div className="loginError">{regErrorMessage}</div></>}

                            </div>


                            {/* 註冊頁面二 */}
                            <div className="step2" ref={step2} style={{ display: toggle ? "none" : "block" }}>

                                {/* <!-- 興趣偏好 --> */}
                                <div className="interstTitle"><div>興趣偏好</div>
                                {
                                    interst.map(({name,value},index)=>{
                                        return(
                                            <label className="container" key={index}>{name}
                                             <input type="checkbox" name="interst" value={value} 
                                                // checked={checkedState[index]}
                                                //  onChange={() => handleOnChange(index)}
                                                 />
                                                <span className="checkmark"></span>
                                            </label>
                                        )
                                    })
                                }

                                </div>

                                <div className="back" onClick={stepChange}><div></div>back</div>
                            </div>
                        </div>
                        <button className="submit-btn" id="signsubmit" onClick={handleSubmitR}>註冊</button>
                        {/* <button className="submit-btn" id="signsubmit" onClick={defineClick}>{toggle ? "下一步" : "註冊"}</button> */}
                    </form>
                </div>
                {/* 登入 */}
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
                                {errorMessage && <><div className="loginError">{errorMessage}</div></>}
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