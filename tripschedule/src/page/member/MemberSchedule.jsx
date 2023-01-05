import React from 'react';
import "../member/member.css";

const MemberSchedule=()=>{
 
        return (
            <>
                {/* <!-- 封面故事 --> */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Lake_Kawaguchiko_Sakura_Mount_Fuji_4.JPG" alt="mainstory" id="mainstory" className="w-100" />

                {/* <!-- 主要頁面 --> */}
                <div className="membermain">
                    <div className="row w-100">
                        {/* <!-- 旁邊導覽列 --> */}
                        <div className="sidebar col-2">
                            <div>
                                <img src="/img/景點相片預覽(暗色).jpg" alt="avatar" id="avatar" />
                            </div>
                            <div>行程表</div>
                            <a href="/member/MemberFavorite">
                                <div>收藏名單</div>
                            </a>
                        </div>
                        {/* <!-- 新增行程表按鈕 --> */}
                        <a href="/"><input type="button" value="新增行程表" className="addSchdule" /></a>
                        {/* <!-- 卡片分頁 --> */}
                        <div className="card-columns col">
                            <div className="card p-3">
                                <a href="/Schedule">
                                    <img className="card-img-top" src="/img/景點相片預覽(明亮).jpg" alt="Card cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">秋天東京五天四夜</h3>
                                        <p className="card-text">2022年12月24日-2022年12月29日</p>
                                        <button className="btn btn-outline-danger">編輯</button>
                                    </div>
                                </a>
                            </div>

                            <div className="card p-3">
                                <a href="/Schedule">
                                    <img className="card-img-top" src="/img/景點相片預覽(明亮).jpg" alt="Card cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">秋天東京五天四夜</h3>
                                        <p className="card-text">2022年12月24日-2022年12月29日</p>
                                        <button className="btn btn-outline-danger">編輯</button>
                                    </div>
                                </a>
                            </div>



                            <div className="card p-3">
                                <a href="/Schedule">
                                    <img className="card-img-top" src="/img/景點相片預覽(明亮).jpg" alt="Card cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">春天東京五天四夜</h3>
                                        <p className="card-text">2022年12月24日-2022年12月29日</p>
                                        <button className="btn btn-outline-danger">編輯</button>
                                    </div>
                                </a>
                            </div>


                            <div className="card p-3">
                                <a href="/Schedule">
                                    <img className="card-img-top" src="/img/景點相片預覽(明亮).jpg" alt="Card cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">東京五天四夜</h3>
                                        <p className="card-text">2022年12月24日-2022年12月29日</p>
                                        <button className="btn btn-outline-danger">編輯</button>
                                    </div>
                                </a>
                            </div>



                            <div className="card p-3">
                                <a href="/Schedule">
                                    <img className="card-img-top" src="/img/景點相片預覽(明亮).jpg" alt="Card cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">東京五天四夜</h3>
                                        <p className="card-text">2022年12月24日-2022年12月29日</p>
                                        <button className="btn btn-outline-danger">編輯</button>
                                    </div>
                                </a>
                            </div>



                            <div className="card p-3">
                                <a href="/Schedule">
                                    <img className="card-img-top" src="/img/景點相片預覽(明亮).jpg" alt="Card cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">東京五天四夜</h3>
                                        <p className="card-text">2022年12月24日-2022年12月29日</p>
                                        <button className="btn btn-outline-danger">編輯</button>
                                    </div>
                                </a>
                            </div>


                        </div>
                    </div>
                </div>
            </>
        );
    
}

export default MemberSchedule;