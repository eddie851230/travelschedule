import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../member/member.css";
import CreateNewSchedule from "../../components/member/CreateNewSchedule";
import styled from 'styled-components';
import { http } from '../../WebAPI';
import AuthContext from '../../contexts';
import { getAuthToken } from "../../utils";


const MemberSchedule = () => {
    const navigate = useNavigate();



    // 判斷是否有會員登入中
    const { user } = useContext(AuthContext);


    // 轉址後轉跳最上方
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

    const Shownone = styled.h3`
    width:100%;
    text-align:center;
    margin:5%;
    `


    // 開啟建立新行程表
    const [scheShow, setScheshow] = useState(false);



    // 從laravel拉資料
    const [schdule, setSchdule] = useState([]);
        // 控制加載完才出現資訊
        const [isLoading,setIsLoading]=useState(false);

    //   讀取行程表資料
    useEffect(() => {
        setIsLoading(true);
        http.get('/schedules/').then((response) => {
            let newArray = response.data.filter(({ user_id }) =>user_id === user.id)
            setIsLoading(false);
            return setSchdule(newArray);
            
        }).catch(() => "無法找到");

    }, [user]);

    const handleDelete = (id) => {
        // 新array
        let newSchdule = schdule.filter(e => e.id !== id);
        http.delete('/schedules/' + id)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        // 使用 setState 更新 並重新渲染
        return setSchdule(newSchdule);
    }


    // 行程表隨機圖
    const imgArr = ['/img/晴空塔.jpg', '/img/迪士尼.jpg', '/img/民治神功.jpg', '/img/淺草寺(維基百科夜景).jpg', '/img/淺草寺.jpg']
    const getRandomImage = () => {
        const random = Math.floor(Math.random() * imgArr.length);
        return imgArr[random];
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
                        <div>行程表</div>

                        <div className="thisPage" onClick={() => navigate("/member/MemberFavorite/")}>收藏名單</div>

                    </div>
                    {/* <!-- 新增行程表按鈕 --> */}
                    <input type="button" value="新增行程表" className="addSchdule" onClick={() => setScheshow(true)} />
                    <CreateNewSchedule trigger={scheShow} setScheshow={setScheshow} />




                    {/* <!-- 卡片分頁 --> */}
                    <Col className="col">
                        {isLoading && <Shownone><b>資料正在找尋中，請稍後</b></Shownone>}
                        {(schdule.length === 0 && !isLoading) && <Shownone><b>沒有行程表</b></Shownone>}
                        {(schdule.length !== 0 && !isLoading) && schdule.map(({ id, name, date_start, date_end }) => {
                            return (
                                <Card className="card p-3" key={id}>

                                    <Cardimg className="card-img-top" src={getRandomImage()} alt="Card cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">{name}</h3>
                                        <p className="card-text">{date_start}至{date_end}</p>
                                        <Link to={'/Schedule/' + id}><button>編輯</button></Link>
                                        <button style={{ color: '#FFF', 'backgroundColor': 'red' }} onClick={() => handleDelete(id)}>刪除</button>
                                    </div>

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