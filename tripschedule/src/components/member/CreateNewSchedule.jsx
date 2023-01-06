import React from 'react';
import styled from 'styled-components';


const CreateNewSchedule = (props) => {
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
        width:40%;
        height:30%;
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





    return (props.trigger) ? (
        <Modelbox>
            <NewSchedule>
                <ScheduleDate>
                    {/* <!-- 開始日期 --> */}
                    <SettingScheduleDate for="scheduleStartDate">開始時間:&nbsp;&nbsp;<DateInput type="date" name="" id="scheduleStartDate" /></SettingScheduleDate>
                    {/* <!-- 結束日期 --> */}
                    <SettingScheduleDate for="scheduleEndDate">結束時間:&nbsp;&nbsp;<DateInput type="date" name="" id="scheduleEndDate" /></SettingScheduleDate>
                </ScheduleDate>
                {/* <!-- 確認按鈕 --> */}
                <Button type="submit">新增行程表</Button>
                <Closeshape  onClick={() => props.setScheshow(false)}><div>&times;</div></Closeshape>
            </NewSchedule >
        </Modelbox>
    ) : "";
}

export default CreateNewSchedule;
