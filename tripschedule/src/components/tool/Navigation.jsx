import React from 'react';

import { NavLink } from 'react-router-dom';

import { UilHome, UilPlaneDeparture, UilMapPinAlt, UilBed, UilSchedule, UilUserCircle,UilApps} from "@iconscout/react-unicons";
import "https://kit.fontawesome.com/11f63461bc.js";
import "./navAndScrollbar.css";


const Navigation = () => {
   return (
      <header>
         <div className="nav-bar">
            <a href="/" className="logo"><img src="/img/logo.png" alt="logo" /><img src="/img/大專logo title.png" alt="logo title" /></a>
            <div className="menu-btn"></div>
            <div className="navigation">
               <div className="nav-items">
                  <NavLink to="/"><UilHome /> 首頁</NavLink>
                  <NavLink to="/Airticket"><UilPlaneDeparture /> 機票</NavLink>
                  <NavLink to="/Spot"><UilMapPinAlt /> 景點推薦</NavLink>
                  <NavLink to="/Hotel"><UilBed /> 住宿推薦</NavLink>
                  <NavLink to="/Schedule"><UilSchedule /> 行程表規劃</NavLink>
                  <NavLink to="/member/MemberSchedule"><UilUserCircle /> 會員中心</NavLink>
               </div>
            </div>
            <UilApps className="nav-menu-btn" />
         </div>
      </header>
   );
}

export default Navigation;