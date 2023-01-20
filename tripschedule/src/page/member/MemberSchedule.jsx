import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../member/member.css";
import CreateNewSchedule from "../../components/member/CreateNewSchedule";
import styled from 'styled-components';

const MemberSchedule = () => {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    const Row = styled.div`
    margin-top: 0%;
    margin-left: 0%;
    align-items:flex-start;
    `;

    const Cardimg = styled.img`
    height:150px;
    width:100%;
    object-fit:cover;
    `;
    const [scheShow, setScheshow] = useState(false);

    return (
        <>
            {/* <!-- 封面故事 --> */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Lake_Kawaguchiko_Sakura_Mount_Fuji_4.JPG" alt="mainstory" id="mainstory" className="w-100" />

            {/* <!-- 主要頁面 --> */}
            <div className="membermain">
                <Row className="row w-100">
                    {/* <!-- 旁邊導覽列 --> */}
                    <div className="sidebar col-2">
                        <div>
                            <img src="/img/景點相片預覽(暗色).jpg" alt="avatar" id="avatar" />
                            <div>
                                檸檬怪jiojekjlkejlkgjl
                            </div>
                        </div>
                        <div>行程表</div>
                        <Link to="/member/MemberFavorite">
                            <div>收藏名單</div>
                        </Link>
                    </div>
                    {/* <!-- 新增行程表按鈕 --> */}
                    <input type="button" value="新增行程表" className="addSchdule" onClick={() => setScheshow(true)} />
                    <CreateNewSchedule trigger={scheShow} setScheshow={setScheshow} />
                    {/* <!-- 卡片分頁 --> */}
                    <div className="card-columns col">
                        <div className="card p-3">
                            <a href="/Schedule">
                                <Cardimg className="card-img-top" src="/img/景點相片預覽(明亮).jpg" alt="Card cap" />
                                <div className="card-body">
                                    <h3 className="card-title">秋天東京五天四夜</h3>
                                    <p className="card-text">2022年12月24日-2022年12月29日</p>
                                    <button className="btn btn-outline-danger">編輯</button>
                                </div>
                            </a>
                        </div>

                        <div className="card p-3">
                            <a href="/Schedule">
                                <Cardimg className="card-img-top" src="/img/景點相片預覽(明亮).jpg" alt="Card cap" />
                                <div className="card-body">
                                    <h3 className="card-title">秋天東京五天四夜</h3>
                                    <p className="card-text">2022年12月24日-2022年12月29日</p>
                                    <button className="btn btn-outline-danger">編輯</button>
                                </div>
                            </a>
                        </div>



                        <div className="card p-3">
                            <a href="/Schedule">
                                <Cardimg className="card-img-top" src="/img/景點相片預覽(明亮).jpg" alt="Card cap" />
                                <div className="card-body">
                                    <h3 className="card-title">春天東京五天四夜</h3>
                                    <p className="card-text">2022年12月24日-2022年12月29日</p>
                                    <button className="btn btn-outline-danger">編輯</button>
                                </div>
                            </a>
                        </div>


                        <div className="card p-3">
                            <a href="/Schedule">
                                <Cardimg className="card-img-top" src="/img/景點相片預覽(明亮).jpg" alt="Card cap" />
                                <div className="card-body">
                                    <h3 className="card-title">東京五天四夜</h3>
                                    <p className="card-text">2022年12月24日-2022年12月29日</p>
                                    <button className="btn btn-outline-danger">編輯</button>
                                </div>
                            </a>
                        </div>



                        <div className="card p-3">
                            <a href="/Schedule">
                                <Cardimg className="card-img-top" src="/img/景點相片預覽(明亮).jpg" alt="Card cap" />
                                <div className="card-body">
                                    <h3 className="card-title">東京五天四夜</h3>
                                    <p className="card-text">2022年12月24日-2022年12月29日</p>
                                    <button className="btn btn-outline-danger">編輯</button>
                                </div>
                            </a>
                        </div>



                        <div className="card p-3">
                            <a href="/Schedule">
                                <Cardimg className="card-img-top" src="/img/景點相片預覽(明亮).jpg" alt="Card cap" />
                                <div className="card-body">
                                    <h3 className="card-title">東京五天四夜</h3>
                                    <p className="card-text">2022年12月24日-2022年12月29日</p>
                                    <button className="btn btn-outline-danger">編輯</button>
                                </div>
                            </a>
                        </div>


                    </div>
                </Row>
            </div>
        </>
    );

}

export default MemberSchedule;