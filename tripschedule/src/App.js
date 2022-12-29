import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// 安裝icon、bootstrap、jquery
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
// import axios from "axois";



// 元件
import Error from './components/Error';

// 首頁
import Home from './page/index/Home';
// 機票
import Airticket from './page/airticket/Airticket';
// import AirticketP1 from './page/airticket/AirticketP1';
// import AirticketP2 from './page/airticket/AirticketP2';

// 景點
import Spot from './page/spot/Spot';
// 飯店
import Hotel from './page/hotel/Hotel';
// 行程表
import Schedule from './page/schedule/Schedule';
// 會員中心
import MemberFavorite from './page/member/MemberFavorite';
import MemberSchedule from './page/member/MemberSchedule';


// 導覽列
import Navigation from './components/tool/Navigation';

// 頁尾
// import Footer from './components/tool/Footer';



function App() {
  return (

    <div>
      <BrowserRouter>

        <Navigation />

        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/Home" element={<Home/>} exact />
          <Route path="/Airticket" element={<Airticket/>} exact />
          <Route path="/Spot" element={<Spot/>} />
          <Route path="/Spot/:id" element={<Spot/>} />
          <Route path="/Hotel" element={<Hotel/>} />
          <Route path="/Hotel/:id" element={<Hotel/>} />
          <Route path="/Schedule" element={<Schedule/>} />
          <Route path="/member/MemberFavorite" element={<MemberFavorite/>} />
          <Route path="/member/MemberSchedule" element={<MemberSchedule/>} />
          <Route component={Error} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}


export default App;