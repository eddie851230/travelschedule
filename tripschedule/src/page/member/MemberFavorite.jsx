import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../member/member.css";
import styled from 'styled-components';
import axios from "axios"

const MemberFavorite = () => {
    // targetURL使用的網址是範例，實際測試要搭配你的認證碼喔
    let targetURL = "https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-A0012-001?Authorization=CWB-1234ABCD-78EF-GH90-12XY-IJKL12345678&format=XML";

    axios.get(targetURL)
        .then(function (response) {
            // console.log(response) //<-- 你可以顯示完整的response
            console.log(response.data.cwbopendata.dataset);
        }) //<-- response資料太多，我們顯示回傳的資料
        .catch(function (error) {
            console.log(error);
        });

        
    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    const Row = styled.div`
    margin-top: 0%;
    margin-left: 0%;
    align-items:flex-start;
    `;




const Col=styled.div`
display:flex;
flex-wrap:wrap;
`


const Card=styled.div`
margin:1%;
margin-top:0;
width:calc(90%/4);
`

    const Cardimg = styled.img`
height:130px;
width:100%;
object-fit:cover;
`;

    const Favorititle = styled.span`
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
                <Row className="row w-100">
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
                    <Col className="col">
                        <Card className="card p-3">
                            <Link to="/Spot">
                                <Cardimg className="card-img-top" src="/img/東京鐵塔(維基百科).jpg" alt="Card cap" />
                                <div className="card-body">
                                    <h3 className="card-title">東京鐵塔</h3>
                                    <h5 className="card-text">
                                        <Favorititle>遊玩時長</Favorititle>&nbsp;<span className="text-info"><b>1小時</b></span><br />
                                    </h5>
                                    <button>詳細資訊</button>
                                </div>
                            </Link>
                        </Card>

                    </Col>
                </Row>
            </div>
        </>
    );

}

export default MemberFavorite;