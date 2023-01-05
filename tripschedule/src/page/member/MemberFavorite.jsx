import React from 'react';
import "../member/member.css";

const MemberFavorite=()=> {

        return (
            <>
                {/* <!-- 封面故事 --> */}
                <img src="/img/景點相片預覽(暗色).jpg" alt="mainstory" id="mainstory" className="w-100" />

                {/* <!-- 主要頁面 --> */}
                <div className="main">
                    <div className="row w-100">
                        {/* <!-- 旁邊導覽列 --> */}
                        <div className="sidebar col-2">
                            <div>
                                <img src="/img/景點相片預覽(暗色).jpg" alt="avatar" id="avatar" />
                            </div>
                            <a href="/member/MemberSchedule"><div>行程表</div></a>
                            <div>收藏名單</div>
                        </div>
                        {/* <!-- 卡片分頁 --> */}
                        <div className="card-columns col">
                            <div className="card p-3">
                                <a href="/Spot">
                                    <img className="card-img-top" src="/img/東京鐵塔(維基百科).jpg" alt="Card cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">東京鐵塔</h3>
                                            <h5 className="card-text">
                                                <span className="badge badge-pill badge-info m-1">遊玩時長</span>&nbsp;<span className="text-info"><b>1小時</b></span><br />
                                                <span className="badge badge-pill badge-secondary m-1">地址</span>&nbsp;<span className="text-secondary spotAddr m-1">ōme-2-8 Shibakōen, Minato City, Tokyo 105-0011日本</span>
                                            </h5>
                                            <button className="btn btn-outline-danger">詳細資訊</button>
                                        </div>
                                </a>
                            </div>

                            <div className="card p-3">
                                <a href="Spot">
                                    <img className="card-img-top" src="/img/淺草寺.jpg" alt="Card cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">淺草寺</h3>
                                            <h5 className="card-text">
                                                <span className="badge badge-pill badge-info m-1">遊玩時長</span>&nbsp;<span className="text-info"><b>1小時</b></span><br />
                                                <span className="badge badge-pill badge-secondary m-1">地址</span>&nbsp;<span className="text-secondary spotAddr m-1">日本東京都台東區淺草二丁目3番1號</span>
                                            </h5>
                                            <button className="btn btn-outline-danger">詳細資訊</button>
                                        </div>
                                </a>
                            </div>

                            <div className="card p-3">
                                <a href="Spot">
                                    <img className="card-img-top" src="/img/淺草寺(維基百科夜景).jpg" alt="Card cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">淺草寺</h3>
                                            <h5 className="card-text">
                                                <span className="badge badge-pill badge-info m-1">遊玩時長</span>&nbsp;<span className="text-info"><b>1小時</b></span><br />
                                                <span className="badge badge-pill badge-secondary m-1">地址</span>&nbsp;<span className="text-secondary m-1 spotAddr">日本東京都台東區淺草二丁目3番1號</span>
                                            </h5>
                                            <button className="btn btn-outline-danger">詳細資訊</button>
                                        </div>
                                </a>
                            </div>

                            <div className="card p-3">
                                <a href="/Spot">
                                    <img className="card-img-top" src="/img/淺草寺(維基百科夜景).jpg" alt="Card cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">淺草寺</h3>
                                            <h5 className="card-text">
                                                <span className="badge badge-pill badge-info m-1">遊玩時長</span>&nbsp;<span className="text-info"><b>1小時</b></span><br />
                                                <span className="badge badge-pill badge-secondary m-1">地址</span>&nbsp;<span className="text-secondary m-1 spotAddr">日本東京都台東區淺草二丁目3番1號</span>
                                            </h5>
                                            <button className="btn btn-outline-danger">詳細資訊</button>
                                        </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
   
}

export default MemberFavorite;