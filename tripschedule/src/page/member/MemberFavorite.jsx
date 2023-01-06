import React,{useEffect} from 'react';
import "../member/member.css";
import styled from 'styled-components';

const MemberFavorite=()=> {
    useEffect(() => {

        window.scrollTo(0, 0);
    
    }, []);

const CardGroup=styled.div`
column-count: 4;
padding-left:40px;
`;


const Cardimg=styled.img`
height:130px;
width:100%;
object-fit:cover;
`;

const Favorititle=styled.span`
font-size:16px;
padding:3px 10px;
color:#fff;
font-weight:700;
background-color:#376B6D;
border-radius:10px;
`

        return (
            <>
                {/* <!-- 封面故事 --> */}
                <img src="/img/景點相片預覽(暗色).jpg" alt="mainstory" id="mainstory" className="w-100" />

                {/* <!-- 主要頁面 --> */}
                <div className="membermain">
                    <div className="row w-100">
                        {/* <!-- 旁邊導覽列 --> */}
                        <div className="sidebar col-2">
                            <div>
                                <img src="/img/景點相片預覽(暗色).jpg" alt="avatar" id="avatar" />
                                <div>
                                    檸檬怪jiojekjlkejlkgjl
                                </div>
                            </div>
                            <a href="/member/MemberSchedule"><div>行程表</div></a>
                            <div>收藏名單</div>
                        </div>
                        {/* <!-- 卡片分頁 --> */}
                        <CardGroup className="col">
                            <div className="card p-3">
                                <a href="/Spot">
                                    <Cardimg className="card-img-top" src="/img/東京鐵塔(維基百科).jpg" alt="Card cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">東京鐵塔</h3>
                                            <h5 className="card-text">
                                                <Favorititle>遊玩時長</Favorititle>&nbsp;<span className="text-info"><b>1小時</b></span><br />
                                            </h5>
                                            <button className="btn btn-outline-danger">詳細資訊</button>
                                        </div>
                                </a>
                            </div>

                            <div className="card p-3">
                                <a href="Spot">
                                    <Cardimg className="card-img-top" src="/img/淺草寺.jpg" alt="Card cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">淺草寺</h3>
                                            <h5 className="card-text">
                                                <Favorititle>遊玩時長</Favorititle>&nbsp;<span className="text-info">1小時</span><br />
                                               
                                            </h5>
                                            <button className="btn btn-outline-danger">詳細資訊</button>
                                        </div>
                                </a>
                            </div>

                            <div className="card p-3">
                                <a href="Spot">
                                    <Cardimg className="card-img-top" src="/img/淺草寺(維基百科夜景).jpg" alt="Card cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">淺草寺</h3>
                                            <h5 className="card-text">
                                                <Favorititle>遊玩時長</Favorititle>&nbsp;<span className="text-info"><b>1小時</b></span><br />
                                               
                                            </h5>
                                            <button className="btn btn-outline-danger">詳細資訊</button>
                                        </div>
                                </a>
                            </div>

                            <div className="card p-3">
                                <a href="Spot">
                                    <Cardimg className="card-img-top" src="/img/淺草寺(維基百科夜景).jpg" alt="Card cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">淺草寺</h3>
                                            <h5 className="card-text">
                                                <Favorititle>遊玩時長</Favorititle>&nbsp;<span className="text-info">1小時</span><br />
                                               
                                            </h5>
                                            <button className="btn btn-outline-danger">詳細資訊</button>
                                        </div>
                                </a>
                            </div>

                           
                        </CardGroup>
                    </div>
                </div>
            </>
        );
   
}

export default MemberFavorite;