import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// 安裝icon、bootstrap、jquery
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
// import axios from "axois";

// 元件
import Error from "./components/Error";
// 首頁
import BeforeLogin from "./page/beforeLogin/beforeLogin";
import Home from "./page/index/Home";

// 機票
import Airticket from "./page/airticket/Airticket";
// 景點
import Spot from "./page/spot/Spot";
// 飯店
import Hotel from "./page/hotel/Hotel";
import Search from "./page/hotel/Search";
import Detail from "./page/hotel/Detail";
// 行程表
import Schedule from "./page/schedule/Schedule";
// 會員中心
import LoginandSignup from "./components/member/loginAndSignup";
import MemberFavorite from "./page/member/MemberFavorite";
import MemberSchedule from "./page/member/MemberSchedule";
import Setting from "./page/member/Setting";
import ForgetPassword from "./page/member/ForgetPassword";

import Resetpassword from "./page/member/Resetpassword";

// 導覽列
import Navigation from "./components/tool/Navigation";
//驗證登入狀態
import AuthContext from "./Contexts";
import { getAuthToken } from "./Utils";
import { memberapi } from "./WebApi";

// 頁尾
// import Footer from './components/tool/Footer';

function App() {
  //  驗證是否持續還在登入中
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // 以 getAuthToken 從 cookies讀取 token
  //   if (getAuthToken()) {
  //     // 有 token 才 call API
  //     memberapi().then((response) => {
  //       if (response.status === 200) {
  //         setUser(response.data);
  //       }
  //     });
  //   }
  // }, []);

  return (
    <div>
      {/* <AuthContext.Provider value={{ user, setUser }}> */}
      <BrowserRouter>
        <Navigation />

        <Routes>
          {/* {!user && <Route path="/" element={<BeforeLogin />} />} */}
          {/* {user && <Route path="/" element={<Home />} />} */}
          <Route path="/Airticket" element={<Airticket />} exact />
          <Route path="/Spot" element={<Spot />} />
          <Route path="/Spot/:id" element={<Spot />} />
          <Route path="/Hotel" element={<Hotel />} exact />
          {/* <Route path="/Hotel/Search" element={<Search />} exact /> */}
          {/*  */}
          <Route path="/Hotel/Search/:searchKey" element={<Search />} exact />
          {/*  */}
          <Route
            path="/Hotel/Search/:saveMinPrice/:saveMaxPrice"
            element={<Search />}
            exact
          />
          {/*  */}
          <Route path="/Hotel/Detail/:id" element={<Detail />} exact />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/LoginandSignup" element={<LoginandSignup />} />
          <Route path="/member/MemberFavorite/" element={<MemberFavorite />} />
          <Route path="/member/MemberSchedule/" element={<MemberSchedule />} />
          <Route path="/member/Setting/" element={<Setting />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          {/* <Route path="/Resetpassword" element={<Resetpassword/>} /> */}
          <Route component={Error} />
        </Routes>
      </BrowserRouter>
      {/* </AuthContext.Provider> */}
    </div>
  );
}

export default App;
