import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// 安裝icon、bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// 元件
import Error from "./components/Error";
// 首頁
import BeforeLogin from "./page/beforeLogin/beforeLogin";
import Home from "./page/index/Home";

// 機票
import Airticket from "./page/airticket/Airticket";
// 景點
import Spot from "./page/spot/Spot";
import Spotdetail from "./page/spot/Spotdetail";

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
import AuthContext from "./contexts";
import { getAuthToken } from "./utils";
import { memberapi } from "./WebAPI";

// 第三方登入驗證
import GoogleLogin from "./components/member/GoogleLogin";

// 頁尾
// import Footer from './components/tool/Footer';

function App() {
  //  驗證是否持續還在登入中
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      // 以 getAuthToken 從 localstorage讀取 token
      if (getAuthToken()) {
        // 有 token 才 call API
        try {
          const response = await memberapi();
          if (response.status === 200) {
            setUser(response.data);
            setIsLoading(false);
          }
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      }
    };
    fetchData();
  }, [getAuthToken()]);

  return (
    <>
      {/* {isLoading && (<div>加載中</div>)} */}

      <div>
        <AuthContext.Provider
          value={{ user, setUser, isLoading, setIsLoading }}
        >
          <BrowserRouter>
            <Navigation />

            <Routes>
              {!user && <Route path="/" element={<BeforeLogin />} />}
              {user && !isLoading && <Route path="/" element={<Home />} />}
              {!isLoading && (
                <Route path="/Airticket" element={<Airticket />} />
              )}
              {!isLoading && <Route path="/Spot" element={<Spot />} />}
              {!isLoading && (
                <Route path="/Spot/:id" element={<Spotdetail />} />
              )}
              {!isLoading && <Route path="/Hotel" element={<Hotel />} />}
              {!isLoading && (
                <Route path="/Hotel/Search" element={<Search />} />
              )}
              {!isLoading && (
                <Route path="/Hotel/Detail/:id" element={<Detail />} />
              )}
              {!isLoading && <Route path="/Schedule/" element={<Schedule />} />}
              {!isLoading && <Route path="/Schedule/:id" element={<Schedule />} />}
              <Route path="/LoginandSignup" element={<LoginandSignup />} />
              {!isLoading && (
                <Route
                  path="/member/MemberFavorite/"
                  element={<MemberFavorite />}
                />
              )}
              {!isLoading && (
                <Route
                  path="/member/MemberSchedule/"
                  element={<MemberSchedule />}
                />
              )}
              {!isLoading && (
                <Route path="/member/Setting/" element={<Setting />} />
              )}
              <Route path="/forgot-password" element={<ForgetPassword />} />
              <Route
                path="/reset-password/:token"
                element={<Resetpassword />}
              />
              <Route path="/auth/google" element={<GoogleLogin />} />
              <Route component={Error} />
            </Routes>
          </BrowserRouter>
        </AuthContext.Provider>
      </div>
    </>
  );
}

export default App;
