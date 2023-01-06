import React from 'react';
import {Link} from "react-router-dom";
import "./setting.css";
import styled from 'styled-components';

const  Resetpassword=()=>{

const Main=styled.main`
position:absolute;
top:30%;
left:25%;
padding:2%;
`

const Button=styled.button`
width:30%;
`

    return(
    <div className="setting">
    <Main>
        <div>您的密碼已寄送至您的信箱<br />

            請重新點擊郵件連結重新設定密碼</div>

        <Link to="/member/LoginandSignup"><Button>返回登入頁</Button></Link>

    </Main>
    </div>
    )
}
export default Resetpassword;