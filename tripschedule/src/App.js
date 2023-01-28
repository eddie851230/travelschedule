import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// 安裝icon、bootstrap
import "bootstrap/dist/css/bootstrap.min.css";



// 元件
import Error from './components/Error';
// 首頁
import BeforeLogin from './page/beforeLogin/beforeLogin';
import Home from './page/index/Home';

// 機票
import Airticket from './page/airticket/Airticket';
// 景點
import Spot from './page/spot/Spot';
// 飯店
import Hotel from './page/hotel/Hotel';
// 行程表
import Schedule from './page/schedule/Schedule';
// 會員中心
import LoginandSignup from "./components/member/loginAndSignup"
import MemberFavorite from './page/member/MemberFavorite';
import MemberSchedule from './page/member/MemberSchedule';
import Setting from './page/member/Setting';
import ForgetPassword from './page/member/ForgetPassword';
import Resetpassword from './page/member/Resetpassword';


// 導覽列
import Navigation from './components/tool/Navigation';

//驗證登入狀態
import AuthContext from "./contexts";
import { getAuthToken } from "./utils";
import { memberapi } from './WebAPI';

// 第三方登入驗證
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLogin from './components/member/GoogleLogin';

// 頁尾
// import Footer from './components/tool/Footer';



function App() {

  //  驗證是否持續還在登入中
  const [user, setUser] = useState(null);
  console.log(user)

  // 設定是否有會員存在?優化重整畫面會閃出未登入畫面
  const [ismember,setIsmember]=useState(true);

  useEffect(() => {
    // 以 getAuthToken 從 cookies讀取 token
    if (getAuthToken()||ismember) {
   
      // 有 token 才 call API
     memberapi().then((response) => {
      console.log(response)
        if (response.status===200) {
          console.log("app",response.data)
          setUser(response.data);
          setIsmember(false);
        }
        else {
          setIsmember(false);
        }
      });
    }
  } , []);

  return (
    <div>

      <AuthContext.Provider value={{ user, setUser }}>
      <GoogleOAuthProvider clientId="250841553348-5e2n3s3tv4nr5j4n57ardiep8joscr6m.apps.googleusercontent.com">
        <BrowserRouter>

          <Navigation />

          <Routes>
            {user===null &&(<Route path="/" element={<BeforeLogin />} />)}
            {user &&(<Route path="/" element={<Home />} />)}
            <Route path="/Airticket" element={<Airticket />} />
            <Route path="/Spot" element={<Spot />} />
            <Route path="/Spot/:id" element={<Spot />} exact/>
            <Route path="/Hotel" element={<Hotel />} />
            <Route path="/Hotel/:id" element={<Hotel />} />
            <Route path="/Schedule" element={<Schedule />} />
            <Route path="/LoginandSignup" element={<LoginandSignup />}/>
            <Route path="/member/MemberFavorite/" element={<MemberFavorite />} />
            <Route path="/member/MemberSchedule/" element={<MemberSchedule/>} />
            <Route path="/member/Setting/" element={<Setting />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/reset-password/:token" element={<Resetpassword/>} />
            <Route path='/auth/google' element={<GoogleLogin/>}/>
            <Route component={Error} />
          </Routes>
        </BrowserRouter>
        </GoogleOAuthProvider>
      </AuthContext.Provider>

    </div>

  );
}


export default App;