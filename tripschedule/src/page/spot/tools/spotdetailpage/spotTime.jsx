import React from 'react';
import "./spotTime.css";
const SpotTime = () => {
    return (
        <div className='sptimetable'>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.6137833466305!2d139.79417691562367!3d35.711120635938904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec6db068cd1%3A0xd9a856805c8012bd!2z5re66I2J5a-6IOmbt-mWgCAo6aKo6Zu356We6ZaAKQ!5e0!3m2!1szh-TW!2stw!4v1673886384016!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <img src="/img/map01.jpg" alt="" />
            <div className='tablep'>
                <div className='tablep1'>
                    <h5>電話</h5><p> 03-3842-0181</p>
                </div>
                <hr />
                <div className='tablep1'>
                    <h5>門票</h5><p>免費</p>
                </div>
                <hr />
                <div className='tablep1'>
                    <h5>開放時間</h5><p>自由參觀</p>
                </div>
                <hr />
                <div className='tablep1'>
                    <h5>建議遊玩時間</h5><p>4小時</p>
                </div>
                <div className="spdeCard3">
                    <button type='button'>加入行程表</button>
                </div>
            </div>
        </div>
    );

}

export default SpotTime;
