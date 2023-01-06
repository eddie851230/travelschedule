import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Memberlist = (props) => {

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

    const MemberList=styled.div`
    padding:1%;
    width:fit-content;
    height:fit-content;
    background-color:#fff;
    border-radius:10px;
   
    `

    const Userinfo=styled.div`
    margin:auto;
    display: flex;
    justify-content:space-evenly;
    align-items:center;
    `

    const Userimg=styled.img`
    width:50px;
    height:50px;
    clip-path: circle(50% at 50% 50%);
    `

    const UserInfotext=styled.div`
    padding:10px;
    `;

    const Username=styled.div`
    font-size:150%;
    `

    const Email=styled.div`
    font-size:80%;
    `

    const Membermenu=styled.div`
    display: flex;
    flex-direction:column;
    `
    const StyledLink = styled(Link)`
    padding:5px;
    &:hover{
        color:#376B6D;
    }
    `

    const Logout=styled.div`
    cursor:pointer;
    padding-left:5px;
    &:hover{
        color:#376B6D;
        text-shadow: var(--text-shadow);
    }
    `

    return (props.trigger) ? (
        <Modelbox onClick={()=>props.setShow(false)}>
            <MemberList>
                <Userinfo>
                    <Userimg src="/img/淺草寺.jpg" alt="avatar" />
                    <UserInfotext>
                        <Username>檸檬怪</Username>
                        <Email>jennifer53085@gmail.com</Email>
                    </UserInfotext>
                </Userinfo>
                <hr />
                <Membermenu>
                    <StyledLink to="/member/MemberFavorite/">收藏名單</StyledLink>
                    <StyledLink to="/member/MemberSchedule/">行程表</StyledLink>
                    <StyledLink to="/member/Setting/">設定</StyledLink>
                </Membermenu>
                <hr />
                <Logout>登出</Logout>
            </MemberList>

        </Modelbox>
    ) : "";
}
export default Memberlist;