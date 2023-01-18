import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import AuthContext from '../../contexts';
import { setAuthToken } from '../../utils';

const Memberlist = (props) => {
    // 導向頁面的宣告
    const navigate = useNavigate();
    

    // 設定登出後狀態
    const handleLogout = () => {
        setAuthToken("");
        setUser(null);
        navigate("/");
    };

    
    // 判斷是否有會員登入中
    const {user,setUser}  = useContext(AuthContext);
// console.log(user)

    // CSS
    const Modelbox = styled.div`
    position: fixed;
    top: 0;
    left:0;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    background-color: rgba(129, 129, 129, 0.5);
    padding:1%;
    display: flex;
    justify-content:end;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    z-index: 10000;
    `

    const MemberList = styled.div`
    padding:1%;
    width:fit-content;
    height:fit-content;
    background-color:#fff;
    border-radius:10px;
   
    `

    const Userinfo = styled.div`
    margin:auto;
    display: flex;
    justify-content:space-evenly;
    align-items:center;
    `

    const Userimg = styled.img`
    width:50px;
    height:50px;
    clip-path: circle(50% at 50% 50%);
    `

    const UserInfotext = styled.div`
    padding:10px;
    `;

    const Username = styled.div`
    font-size:150%;
    `

    const Email = styled.div`
    font-size:80%;
    `

    const Membermenu = styled.div`
    display: flex;
    flex-direction:column;
    `
    const StyledLink = styled(Link)`
    text-decoration: none;
    color:#000;
    padding:5px;
    &:hover{
        color:#376B6D;
        text-decoration: none;
    }
    `

    const Logout = styled.div`
    cursor:pointer;
    padding-left:5px;
    &:hover{
        color:#376B6D;
        text-shadow: var(--text-shadow);
    }
    `

    return (props.trigger) ? (
        <Modelbox onClick={() => props.setShow(false)}>
            <MemberList>
                <Userinfo>
                    <Userimg src={user.profile_photo_path} alt="avatar" />
                    <UserInfotext>
                        <Username>{user.name}</Username>
                        <Email>{user.email}</Email>
                    </UserInfotext>
                </Userinfo>
                <hr />
                <Membermenu>
                    <StyledLink to="/member/MemberFavorite/">收藏名單</StyledLink>
                    <StyledLink to="/member/MemberSchedule/">行程表</StyledLink>
                    <StyledLink to="/member/Setting/">設定</StyledLink>
                </Membermenu>
                <hr />
                <Logout onClick={handleLogout}>登出</Logout>
            </MemberList>

        </Modelbox>
    ) : "";
}
export default Memberlist;