import React, { useRef,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";
import AuthContext from '../../contexts';



const CreateNewSchedule = (props) => {
    // 設定路由轉址
    const navigate = useNavigate();

     // 判斷是否有會員登入中
     const {user}  = useContext(AuthContext);



    const ScheduleDate = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:5%;
    `;

    const SettingScheduleDate = styled.label`
    padding:0 10px;
    vertical-align: middle;
    font-size:105%;
    font-weight:700;
    color:var(--nav-bg-color);
    `;

    const Button = styled.button`
    padding: 10px 30px;
    letter-spacing: 2px;
    background-color: #fff;
    color: var(--nav-bg-color);
    border: 5px solid var(--nav-bg-color);
    border-radius: 50px;
    font-weight: 600;
    font-size: large;
    `

    const DateInput = styled.input`
    padding: 5px;
    border: 3px solid var(--nav-bg-color);
    border-radius: 10px;
    background-color: #fff;
    color: var(--nav-bg-color);
    &:focus{
        outline: 3px solid var(--section-bg-color);
    }
    `

    // 新建行程表單樣式
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
       justify-content:center;
       align-items:center;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
       z-index: 10000;
       `;

    const NewSchedule = styled.form`
           width:45%;
           height:35%;
           background-color:#fff;
           border-radius:10px;
           border:5px solid var(--nav-bg-color);
           box-shadow:0 0 5px #4d4d4d;
           display:flex;
           flex-direction:column;
           justify-content:center;
           align-items:center;
           position:relative;
           top:0;
       `;
    // 關閉新建行程表單樣式
    const Closeshape = styled.div`
       position:absolute;
       top:-20px;
       right:-20px;
       color:#fff;
       font-size:40px;
       background-color: var(--nav-bg-color);
       width:50px;
       height:50px;
       display:flex;
       justify-content:center;
       align-items:center;
       clip-path:circle(50% at 50% 50%);
       cursor:pointer;
       &:hover {
           color: var(--black);
           background-color: #feda02;
           font-weight: 700;
           transition: .2s ease-in;
           cursor: pointer;
       }
       `;




    //   創立新行程表


    const createSchdule = (schduleName, startdate, enddate) => {
        axios.post("http://localhost:8000/schedules", {
            schduleName: schduleName,
            startdate: startdate,
            enddate: enddate,
            userid:user.id
        }).then((response) => {
            props.setSchdule([response.data, ...props.schdule]);
        });
        //導向飛機頁
        return navigate("/Airticket");
    }


    // (useref)
    const Scheref = useRef(undefined);
    const startDateRef = useRef(null);
    const endDateRef = useRef(null);


    return (props.trigger) ? (

        <Modelbox>
            <NewSchedule>
                <ScheduleDate>

                    {/* 行程表 */}
                    <SettingScheduleDate>行程表名稱:&nbsp;&nbsp;
                        <DateInput type="text" name='schduleName' ref={Scheref} required /></SettingScheduleDate>

                    {/* <!-- 開始日期 --> */}
                    <SettingScheduleDate >開始時間:&nbsp;&nbsp;
                        <DateInput type="date" name="startdate" ref={startDateRef} required /></SettingScheduleDate>

                    {/* <!-- 結束日期 --> */}
                    <SettingScheduleDate>結束時間:&nbsp;&nbsp;
                        <DateInput type="date" name="enddate" ref={endDateRef} required /></SettingScheduleDate>
                </ScheduleDate>
                {/* <!-- 確認按鈕 --> */}
                <Button type="submit" onClick={() => {
                    return createSchdule(Scheref.current.value, startDateRef.current.value, endDateRef.current.value);
                }}>新增行程表</Button>
                <Closeshape onClick={() => props.setScheshow(false)}><div>&times;</div></Closeshape>
            </NewSchedule >
        </Modelbox>

    ) : "";
}

export default CreateNewSchedule;
