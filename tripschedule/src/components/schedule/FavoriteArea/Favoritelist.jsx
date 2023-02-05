import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../../contexts';
import { ListContext } from 'page/schedule/Schedule';
import { http } from '../../../WebAPI';
import AddSpot from './AddSpot';

const Favoritelist = () => {
    // 判斷是否有會員登入中
    const { user } = useContext(AuthContext);
    const { spotListinfo } = useContext(ListContext);
    // console.log('user', user)

   


    const [spotinfo, updateSpotinfo] = useState([]);

    // 開啟收藏名單編輯
    const [trigger, setTrigger] = useState(false);

    // 偵測加載中
    const [loading, setLoading] = useState(true);

    // 抓取收藏名單資料
    useEffect(() => {
   http.get('/favorite/spot/' + user.id)
    .then(response => {
        setLoading(false);
        return updateSpotinfo(response.data)})
    .catch(error => console.log(error));
    
    }, [user,loading,]);

    const [hotelinfo, updateHotelinfo] = useState([]);
    useEffect(() => {

        http.get('/favorite/hotel/' + user.id)
            .then(response => updateHotelinfo(response.data))
            .catch(error => console.log(error));
        setLoading(false);
    }, [user,loading,spotListinfo]);

  




    // 抓取個別資訊
    const [detail, setDetail] = useState(null);

    const handleDetail = (e) => {
        setTrigger(true);
        let id = parseInt(e.currentTarget.dataset.id);
        let newArr = spotinfo.filter(r => r.attraction_id === id)
        return setDetail(newArr[0]);

    }
    const handleHotelDetail = (e) => {
        setTrigger(true);
        let id = e.currentTarget.dataset.id;
        let newArr = hotelinfo.filter(r => r.room_id === id)

        return setDetail(newArr[0]);

    }




    return (

        <div className="list">

            {/* 景點 */}


            <div className="fSpot">
            <AddSpot
                    trigger={trigger} setTrigger={setTrigger}
                    detail={detail}
                    spotinfo={spotinfo} updateSpotinfo={updateSpotinfo}
                   
                />
                {loading && <></>}
                {!loading && spotinfo.map(({ attraction_id, path, name }) => (
                    <div key={attraction_id} className="listinfo" onClick={handleDetail} data-id={attraction_id}>
                        <img src={path} alt={name} />
                        <div className="text">{name}</div>
                    </div>
                ))}
               

            </div>




            {/* 飯店 */}


            <div className="fHotel" >
                {loading && <></>}
                {!loading && hotelinfo.map(({ path, name_CH, room_id, roomtype }) => (
                    <div key={room_id} className="listinfo" onClick={handleHotelDetail} data-id={room_id}>
                        <img src={path} alt={name_CH} />
                        <div className="text" style={{ 'fontSize': '13px' }}>{name_CH}</div>
                        <div style={{ 'color': '#da663c' }}>{roomtype}</div>
                    </div>
                ))
                }
                <AddSpot
                    trigger={trigger} setTrigger={setTrigger}
                    detail={detail}
                    hotelinfo={hotelinfo} updateHotelinfo={updateHotelinfo}
                />

            </div>
        </div>
    )
}

export default Favoritelist;