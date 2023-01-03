import React from 'react';
import Footer from "../../components/tool/Footer";

import "./index.css";
import "./hotel-search.css";
// import bgImg from "/20230102/travelschedule/tripschedule/public/img/hotel_img/search-page-bg.jpg";


const Search = () => {
  return (
    <div className="likeBody">
      
      <div id="contextImage">
        {/* <img src={bgImg} alt=""/> */}
      </div>

      <div className='articleZone'>
        <div className="containerZone" >
            {/* <!-- 左側篩選 --> */}
            <div id="asideFilter">
                {/* <!-- 熱門篩選 --> */}
                <form>
                    <p id="filterTitle">熱門篩選</p>
                    
                    <label className="container"> 免費wifi
                        <input type="checkbox" name="company" value="a01"/>
                        <span className="checkmark"></span>
                      </label>
                    <label className="container"> 攜帶寵物
                        <input type="checkbox" name="company" value="a02"/>
                        <span className="checkmark"></span>
                      </label>
                    <label className="container"> 可以免費取消
                        <input type="checkbox" name="company" value="a03"/>
                        <span className="checkmark"></span>
                      </label>
                    <label className="container"> 浴缸
                        <input type="checkbox" name="company" value="a04"/>
                        <span className="checkmark"></span>
                      </label>
                
                {/* <!-- 篩選地區 --> */}
                
                    <p id="filterTitle">篩選地區</p>
                    
                    <label className="container"> 足立區<input type="checkbox" name="company" value="d01"/><span className="checkmark"></span></label>
                    <label className="container"> 文京區<input type="checkbox" name="company" value="d02"/><span className="checkmark"></span></label>
                    <label className="container"> 千代田區<input type="checkbox" name="company" value="d03"/><span className="checkmark"></span></label>
                    <label className="container"> 中央區<input type="checkbox" name="company" value="d04"/><span className="checkmark"></span></label>
                    <label className="container"> 江戶川區<input type="checkbox" name="company" value="d05"/><span className="checkmark"></span></label>
                    <label className="container"> 板橋區<input type="checkbox" name="company" value="d06"/><span className="checkmark"></span></label>
                    
                    <label className="container"> 葛飾區<input type="checkbox" name="company" value="d07"/><span className="checkmark"></span></label>
                    <label className="container"> 江東區<input type="checkbox" name="company" value="d08"/><span className="checkmark"></span></label>
                    <label className="container"> 港區<input type="checkbox" name="company" value="d09"/><span className="checkmark"></span></label>
                    <label className="container"> 目黑區<input type="checkbox" name="company" value="d10"/><span className="checkmark"></span></label>
                    <label className="container"> 中野區<input type="checkbox" name="company" value="d11"/><span className="checkmark"></span></label>
                    <label className="container"> 練馬區<input type="checkbox" name="company" value="d12"/><span className="checkmark"></span></label>
                    <label className="container"> 大田區<input type="checkbox" name="company" value="d13"/><span className="checkmark"></span></label>
                    
                    <label className="container"> 世田谷區<input type="checkbox" name="company" value="d14"/><span className="checkmark"></span></label>
                    <label className="container"> 澀谷區<input type="checkbox" name="company" value="d15"/><span className="checkmark"></span></label>
                    <label className="container"> 品川區<input type="checkbox" name="company" value="d16"/><span className="checkmark"></span></label>
                    <label className="container"> 新宿區<input type="checkbox" name="company" value="d17"/><span className="checkmark"></span></label>
                    <label className="container"> 杉並區<input type="checkbox" name="company" value="d18"/><span className="checkmark"></span></label>
                    <label className="container"> 墨田區<input type="checkbox" name="company" value="d19"/><span className="checkmark"></span></label>
                    <label className="container"> 台東區<input type="checkbox" name="company" value="d20"/><span className="checkmark"></span></label>
                    <label className="container"> 豐島區<input type="checkbox" name="company" value="d21"/><span className="checkmark"></span></label>
                    <label className="container"> 北區<input type="checkbox" name="company" value="d22"/><span className="checkmark"></span></label>
                    
                
                {/* <!-- 價錢 --> */}


                {/* <!-- 選擇設施 --> */}
                
                    <p  id="filterTitle">選擇設施</p>
                    <label className="container"> 停車<input type="checkbox" name="company" value="a05"/><span className="checkmark"></span></label>
                    <label className="container"> SPA<input type="checkbox" name="company" value="a06"/><span className="checkmark"></span></label>
                    <label className="container"> 廚房<input type="checkbox" name="company" value="a07"/><span className="checkmark"></span></label>
                    <label className="container"> 健身房<input type="checkbox" name="company" value="a08"/><span className="checkmark"></span></label>
                    <label className="container"> 游泳池<input type="checkbox" name="company" value="a09"/><span className="checkmark"></span></label>
                    <label className="container"> 寵物友善<input type="checkbox" name="company" value="a10"/><span className="checkmark"></span></label>
                    <label className="container"> 洗衣機<input type="checkbox" name="company" value="a11"/><span className="checkmark"></span></label>
                
                {/* <!-- 確認按鈕 --> */}
                    <button id="searchBtn" type="submit">搜尋</button>

                </form>
                
            </div>
            <div className="rightMainZone">
                <div className="resultZone currentZone">
                    <div id="currentText">
                        <p>目前行程:</p>
                        <div>五天四夜春季東京之旅</div>
                        <p>日期:</p>
                        <p><span>2023/01/16 &nbsp;</span>到<span>&nbsp; 2023/01/20</span></p>
                    </div>
    
                </div>
                <div  className="resultZone  flexRight">
                    {/* <!-- 搜尋排序 --> */}
                    <div className="listOrder ">
                        排序依照 : 旅客首選 &nbsp;&dArr;
                    </div>   
                </div>

                {/* <!-- 飯店卡01 --> */}
                <div className="cardArea">
                    <div className="imageZone">
                        <img src="./img/hotel01.jpg" alt=""/>
                    </div>
                    {/* <!-- 飯店描述 --> */}
                    <div className="hotelDescription">
                        <p className="hotelTitle">東京xx飯店</p>
                        <span>位於<span>新宿區</span></span>
                        <p className="priceF">NT$ <span>7,456元</span>/一晚</p>
                    </div>
                    {/* <!-- 放入收藏與行程 --> */}
                    <div className="btnZone">
                        <button className="btnStyle colorCollection">放入收藏</button>
                        <button className="btnStyle colorSchedule">安排此行程</button>
                    </div>
                </div>
                {/* <!-- 飯店卡02 --> */}
                <div className="cardArea">
                    <div className="imageZone">
                        <img src="./img/hotel01.jpg" alt=""/>
                    </div>
                    {/* <!-- 飯店描述 --> */}
                    <div className="hotelDescription">
                        <p className="hotelTitle">東京xx飯店</p>
                        <span>位於<span>新宿區</span></span>
                        <p className="priceF">NT$ <span>7,456元</span>/一晚</p>
                    </div>
                    {/* <!-- 放入收藏與行程 --> */}
                    <div className="btnZone">
                        <button className="btnStyle colorCollection">放入收藏</button>
                        <button className="btnStyle colorSchedule">安排此行程</button>
                    </div>
                </div>
                {/* <!-- 飯店卡03 --> */}
                <div className="cardArea">
                    <div className="imageZone">
                        <img src="./img/hotel01.jpg" alt=""/>
                    </div>
                    {/* <!-- 飯店描述 --> */}
                    <div className="hotelDescription">
                        <p className="hotelTitle">東京xx飯店</p>
                        <span>位於<span>新宿區</span></span>
                        <p className="priceF">NT$ <span>7,456元</span>/一晚</p>
                    </div>
                    {/* <!-- 放入收藏與行程 --> */}
                    <div className="btnZone">
                        <button className="btnStyle colorCollection">放入收藏</button>
                        <button className="btnStyle colorSchedule">安排此行程</button>
                    </div>
                </div>
                {/* <!-- 飯店卡04 --> */}
                <div className="cardArea">
                    <div className="imageZone">
                        <img src="./img/hotel01.jpg" alt=""/>
                    </div>
                    {/* <!-- 飯店描述 --> */}
                    <div className="hotelDescription">
                        <p className="hotelTitle">東京xx飯店</p>
                        <span>位於<span>新宿區</span></span>
                        <p className="priceF">NT$ <span>7,456元</span>/一晚</p>
                    </div>
                    {/* <!-- 放入收藏與行程 --> */}
                    <div className="btnZone">
                        <button className="btnStyle colorCollection">放入收藏</button>
                        <button className="btnStyle colorSchedule">安排此行程</button>
                    </div>
                </div>
                {/* <!-- 飯店卡05 --> */}
                <div className="cardArea">
                    <div className="imageZone">
                        <img src="./img/hotel01.jpg" alt=""/>
                    </div>
                    {/* <!-- 飯店描述 --> */}
                    <div className="hotelDescription">
                        <p className="hotelTitle">東京xx飯店</p>
                        <span>位於<span>新宿區</span></span>
                        <p className="priceF">NT$ <span>7,456元</span>/一晚</p>
                    </div>
                    {/* <!-- 放入收藏與行程 --> */}
                    <div className="btnZone">
                        <button className="btnStyle colorCollection">放入收藏</button>
                        <button className="btnStyle colorSchedule">安排此行程</button>
                    </div>
                </div>
                {/* <!-- 飯店卡06 --> */}
                <div className="cardArea">
                    <div className="imageZone">
                        <img src="./img/hotel01.jpg" alt=""/>
                    </div>
                    {/* <!-- 飯店描述 --> */}
                    <div className="hotelDescription">
                        <p className="hotelTitle">東京xx飯店</p>
                        <span>位於<span>新宿區</span></span>
                        <p className="priceF">NT$ <span>7,456元</span>/一晚</p>
                    </div>
                    {/* <!-- 放入收藏與行程 --> */}
                    <div className="btnZone">
                        <button className="btnStyle colorCollection">放入收藏</button>
                        <button className="btnStyle colorSchedule">安排此行程</button>
                    </div>
                </div>
                {/* <!-- 飯店卡07 --> */}
                <div className="cardArea">
                    <div className="imageZone">
                        <img src="./img/hotel01.jpg" alt=""/>
                    </div>
                    {/* <!-- 飯店描述 --> */}
                    <div className="hotelDescription">
                        <p className="hotelTitle">東京xx飯店</p>
                        <span>位於<span>新宿區</span></span>
                        <p className="priceF">NT$ <span>7,456元</span>/一晚</p>
                    </div>
                    {/* <!-- 放入收藏與行程 --> */}
                    <div className="btnZone">
                        <button className="btnStyle colorCollection">放入收藏</button>
                        <button className="btnStyle colorSchedule">安排此行程</button>
                    </div>
                </div>    
            </div>    
        </div>
      </div>


      <Footer/>
    </div>

      
    
  )
}

export default Search