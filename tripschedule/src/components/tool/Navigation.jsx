import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Memberlist from '../member/Memberlist';
import AuthContext from '../../contexts';

import { UilHome, UilPlaneDeparture, UilMapPinAlt, UilBed, UilSchedule, UilUserCircle, UilApps } from "@iconscout/react-unicons";
import "https://kit.fontawesome.com/11f63461bc.js";
import "./navAndScrollbar.css";


const Navigation = () => {
   // 判斷是否有會員登入中
   const { user } = useContext(AuthContext);

   // 控制展開

   const [show, setShow] = useState(false);


   return (<>
      {/* <AuthContext.Consumer> */}
      <header>
         <div className="nav-bar">
           
            <NavLink to="/" className="logo"><img src="/img/logo.png" alt="logo" /><img src="/img/大專logo title.png" alt="logo title" /></NavLink>
            

            <div className="menu-btn"></div>

            <div className="navigation">
               <div className="nav-items">
                  {/* 登入前 */}
                  {!user && (<NavLink to="/LoginandSignup"><UilHome /> 註冊/登入</NavLink>)}
                  {/* 登入後 */}
                  {user && (<NavLink to="/"><UilHome /> 首頁</NavLink>)}
                  {user && (<NavLink to="/Airticket"><UilPlaneDeparture /> 機票</NavLink>)}
                  {user && (<NavLink to="/Spot"><UilMapPinAlt /> 景點推薦</NavLink>)}
                  {user && (<NavLink to="/Hotel"><UilBed /> 住宿推薦</NavLink>)}
                  {user && (<NavLink to="/Schedule"><UilSchedule /> 行程表規劃</NavLink>)}
                  {user && (<div onClick={()=>setShow(true)}><UilUserCircle /> 會員中心</div>)}
               </div>

            </div>
            <UilApps className="nav-menu-btn" />
         </div>

         <Memberlist trigger={show} setShow={setShow} />

      </header>
      {/* </AuthContext.Consumer> */}
   </>
   );
}

export default Navigation;