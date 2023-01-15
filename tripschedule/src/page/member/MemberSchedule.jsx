import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../member/member.css";
import CreateNewSchedule from "../../components/member/CreateNewSchedule";
import styled from 'styled-components';
import axios from "axios"


const MemberSchedule = () => {



    useEffect(() => {

        window.scrollTo(0, 0);
        // console.log("test");

    }, []);

    const Row = styled.div`
    margin-top: 0%;
    margin-left: 0%;
    align-items:flex-start;
    `;

    const Col = styled.div`
    display:flex;
    flex-wrap:wrap;
    `


    const Card = styled.div`
    margin:1%;
    margin-top:0;
    width:calc((90%)/3);
    `

    const Cardimg = styled.img`
    height:150px;
    width:100%;
    object-fit:cover;
    `;


 

// 
    const [scheShow, setScheshow] = useState(false);



    // 從laravel拉資料
    const [schdule, setSchdule] = useState(null);


    //   讀取行程表資料
    useEffect(() => {
        axios.get("http://localhost:8000/schedules").then((response) => {
            setSchdule(response.data);
        });
    }, []);

    if (!schdule) return "沒有行程表";






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
                            <CreateNewSchedule trigger={scheShow} setScheshow={setScheshow}/>
                  



                    {/* <!-- 卡片分頁 --> */}
                    <Col className="col">
                        {schdule.map(({ id, name, date_start, date_end }) => {
                            return (
                                <Card className="card p-3" key={id}>
                                    <Link to="/Schedule">
                                        <Cardimg className="card-img-top" src="/img/景點相片預覽(明亮).jpg" alt="Card cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">{name}</h3>
                                            <p className="card-text">{date_start}至{date_end}</p>
                                            <button>編輯</button>
                                        </div>
                                    </Link>
                                </Card>
                            )
                        })}


                    </Col>
                </Row>
            </div>
        </>
    );

}

export default MemberSchedule;