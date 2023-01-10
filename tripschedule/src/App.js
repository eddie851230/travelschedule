import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// 安裝icon、bootstrap、jquery
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
// import axios from "axios";

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

// 導覽列
import Navigation from "./components/tool/Navigation";

// 頁尾
// import Footer from './components/tool/Footer';

// 測試
import Resetpassword from "./page/member/Resetpassword";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<BeforeLogin />} exact />
          <Route path="/Home/:id" element={<Home />} exact />
          <Route path="/Airticket" element={<Airticket />} exact />
          <Route path="/Spot" element={<Spot />} />
          <Route path="/Spot/:id" element={<Spot />} />
          <Route path="/Hotel" element={<Hotel />} exact />
          <Route path="/Hotel/Search" element={<Search />} exact />
          <Route path="/Hotel/Detail" element={<Detail />} exact />

          <Route path="/schedule" element={<Schedule />} />

          <Route path="/member/LoginandSignup" element={<LoginandSignup />} />
          <Route path="/member/MemberFavorite/" element={<MemberFavorite />} />
          <Route path="/member/MemberSchedule/" element={<MemberSchedule />} />
          <Route path="/member/Setting/" element={<Setting />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/Resetpassword" element={<Resetpassword />} />
          <Route component={Error} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
