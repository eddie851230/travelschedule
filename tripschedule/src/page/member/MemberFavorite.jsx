import React, { useEffect, useContext, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../member/member.css";
import styled from 'styled-components';
import { http } from '../../WebAPI';
import AuthContext from '../../contexts';

const MemberFavorite = () => {

    const navigate = useNavigate();

    // 判斷是否有會員登入中
    const { user } = useContext(AuthContext);

    // 重整時置頂
    useEffect(() => {

        window.scrollTo(0, 0);

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
width:calc(90%/3);
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

    const FavoritSelect = styled.select`
font-size: 1.3rem;
padding:0 1%;
border-radius: 10px;
border: 2px solid var(--nav-bg-color);
color:var(--nav-bg-color);
font-weight: 700;
position: absolute;
top: calc(35vh + 7vh);
left: calc(100% * (2 / 8));
cursor: pointer;
&:focus{
        box-shadow: 0 0 5px var(--nav-bg-color);
}
`;

    const FavoritOption = styled.option`
font-size: 1.1rem;
padding:0 1%;
border-radius: 10px;
border: 2px solid var(--nav-bg-color);
color:var(--nav-bg-color);
font-weight: 700;
position: absolute;
top: calc(35vh + 7vh);
left: calc(100% / 4);
cursor: pointer;
`

    // 取得名單
    // 從laravel拉資料
    const [favorite, setFavorite] = useState(null);
    // 選擇不同的畫面
    const [listChange, setListChange] = useState("spot");

    const handleChange = () => {

        if (listChange === "spot") { return 'http://localhost:8000/favorite/spot' }
        else { return 'http://localhost:8000/favorite/hotel' };

    }





    useEffect(() => {

        http.get(handleChange())
            .then(response => {
                let newArray = response.data.filter(({ user_id }) => user_id === user.id);
                return setFavorite(newArray);
            })
            .catch(error => console.log(error));

    }, [user, handleChange()]);


    const handleDelete = (id) => {
        // 將刪除的名單從 favorite 中移除
        const Newfavorite = favorite.filter(e => e.id !== id);

        http.delete(handleChange() + '/' + id)
            .then(response =>console.log(response))
            .catch(error => console.log(error));
        // 使用 setState 更新 favorite 並重新渲染
        return setFavorite(Newfavorite);

    }

    return (
        <>
            {/* <!-- 封面故事 --> */}
            <img src={user["coverphoto_path"]} alt="mainstory" id="mainstory" className="w-100" />
            {/* <!-- 主要頁面 --> */}
            <div className="membermain">
                <Row className="row w-100">
                    {/* <!-- 旁邊導覽列 --> */}
                    <div className="sidebar col-2">
                        <div>
                            <img src={user["profile_photo_path"]} alt="avatar" id="avatar" />
                            <div>{user.name}</div>
                        </div>
                        <div className="thisPage" onClick={() => navigate("/member/MemberSchedule/")}>行程表</div>
                        <div>收藏名單</div>
                    </div>
                    {/* 收藏名單切換 */}
                    <FavoritSelect onChange={e => setListChange(e.target.value)}>
                        <FavoritOption value='spot' selected={listChange === "spot"}>景點</FavoritOption>
                        <FavoritOption value='hotel' selected={listChange === "hotel"}>飯店</FavoritOption>
                    </FavoritSelect>
                    {/* <!-- 卡片分頁 --> */}
                    <Col className="col">
                        {favorite === null && <h3><b>沒有收藏名單</b></h3>}
                        {(listChange === "spot" && favorite) && favorite.map(({ id, attraction_id, name, path, suggestedtime }) => {
                            return (
                                <Card className="card p-3" key={attraction_id}>

                                    <Cardimg className="card-img-top" src={path} alt={name} />
                                    <div className="card-body">
                                        <h3 className="card-title">{name}</h3>
                                        <h5 className="card-text">
                                            <Favorititle>遊玩時長</Favorititle>&nbsp;<span className="text-info"><b>{suggestedtime}小時</b></span><br />
                                        </h5>
                                        <Link to="/Spot"><button>詳細資訊</button></Link>
                                        <button style={{ color: '#FFF', 'background-color': 'red' }} onClick={() => handleDelete(id)}>刪除</button>
                                    </div>

                                </Card>
                            )
                        })}

                        {(listChange === "hotel" && favorite) && favorite.map(({ id, hotel_id, name_CH, path, area }) => {
                            return (
                                <Card className="card p-3" key={hotel_id} id={hotel_id}>

                                    <Cardimg className="card-img-top" src={path} alt={name_CH} />
                                    <div className="card-body">
                                        <h3 className="card-title">{name_CH}</h3>
                                        <h5 className="card-text">
                                            <Favorititle>所在區域</Favorititle>&nbsp;<span className="text-info"><b>{area}</b></span><br />
                                        </h5>
                                        <Link to="/Hotel"><button>詳細資訊</button></Link>
                                        <button style={{ color: '#FFF', 'background-color': 'red' }} onClick={() => handleDelete(id)}>刪除</button>
                                    </div>

                                </Card>
                            )
                        })
                        };

                    </Col>
                </Row>
            </div>
        </>
    );

}

export default MemberFavorite;